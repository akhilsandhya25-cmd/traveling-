import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { ROAD_TRIP_SCENES, type RoadTripScene } from '../data/roadTripData';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { LuxuryExpeditionSUV } from './LuxuryExpeditionSUV';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface RoadTripJourneyProps {
  onSelectDestinationById: (destinationId: string) => void;
  onExploreAll: () => void;
  onPlanTrip: () => void;
}

interface WaypointLayout {
  containerHeight: number;
  stages: { top: number; bottom: number; center: number }[];
  endY: number;
}

/**
 * Generates smooth cubic Bézier segments with strictly monotonic Y coordinates
 * so binary search along path.getPointAtLength() is exact and unambiguous.
 */
function buildDesktopPath(layout: WaypointLayout): string {
  const { stages, endY } = layout;
  const startY = 24;
  if (stages.length === 0) {
    return `M 500 0 L 500 ${Math.max(400, endY)}`;
  }

  let d = `M 500 0 L 500 ${startY}`;
  let prevX = 500;
  let prevY = startY;

  stages.forEach((stage, idx) => {
    const targetX = idx % 2 === 0 ? 745 : 255;
    const midY = (prevY + stage.center) / 2;
    d += ` C ${prevX} ${midY.toFixed(1)}, ${targetX} ${midY.toFixed(1)}, ${targetX} ${stage.center.toFixed(1)}`;
    prevX = targetX;
    prevY = stage.center;
  });

  const endMidY = (prevY + endY) / 2;
  d += ` C ${prevX} ${endMidY.toFixed(1)}, 500 ${endMidY.toFixed(1)}, 500 ${endY.toFixed(1)}`;
  return d;
}

/**
 * Dedicated portrait mobile road path:
 * Sweeps dramatically across full width in scenic corridors *between* destination cards,
 * then hugs a dedicated left driving lane (x = 46..54) while passing alongside cards
 * so the vehicle stays central and visible without covering any editorial text.
 */
function buildMobilePath(layout: WaypointLayout): string {
  const { stages, endY } = layout;
  if (stages.length === 0) {
    return `M 200 0 L 200 ${Math.max(400, endY)}`;
  }

  const laneX = 48;
  const startY = 18;
  let d = `M 200 0 L 200 ${startY}`;

  // Opening smooth S-curve from center hero down to Stage 1 left shoulder
  const firstEntryY = Math.max(startY + 40, stages[0].top - 6);
  const openMidY = (startY + firstEntryY) / 2;
  d += ` C 200 ${openMidY.toFixed(1)}, ${laneX} ${openMidY.toFixed(1)}, ${laneX} ${firstEntryY.toFixed(1)}`;

  stages.forEach((stage, idx) => {
    const exitY = stage.bottom + 6;

    // Steady vertical pass hugging the dedicated left highway corridor beside the card
    d += ` L ${laneX} ${exitY.toFixed(1)}`;

    if (idx < stages.length - 1) {
      const nextEntryY = Math.max(exitY + 36, stages[idx + 1].top - 6);
      const bridgeMidY = (exitY + nextEntryY) / 2;
      const halfInY = (exitY + bridgeMidY) / 2;
      const halfOutY = (bridgeMidY + nextEntryY) / 2;
      const peakX = idx % 2 === 0 ? 136 : 104;
      // C1-continuous dual S-curve sweep across the open scenic bridge between cards
      d += ` C ${laneX} ${halfInY.toFixed(1)}, ${peakX} ${halfInY.toFixed(1)}, ${peakX} ${bridgeMidY.toFixed(1)}`;
      d += ` C ${peakX} ${halfOutY.toFixed(1)}, ${laneX} ${halfOutY.toFixed(1)}, ${laneX} ${nextEntryY.toFixed(1)}`;
    }
  });

  // Final sweep into the End of Journey viewpoint center
  const lastExitY = stages[stages.length - 1].bottom + 6;
  const finalMidY = (lastExitY + endY) / 2;
  d += ` C ${laneX} ${finalMidY.toFixed(1)}, 200 ${finalMidY.toFixed(1)}, 200 ${endY.toFixed(1)}`;
  return d;
}

/**
 * Finds the exact path length whose Y coordinate matches `targetY` via binary search.
 */
function findLengthAtY(
  pathEl: SVGPathElement,
  totalLength: number,
  targetY: number
): number {
  let low = 0;
  let high = totalLength;
  for (let i = 0; i < 14; i++) {
    const mid = (low + high) * 0.5;
    const pt = pathEl.getPointAtLength(mid);
    if (pt.y < targetY) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) * 0.5;
}

export function RoadTripJourney({
  onSelectDestinationById,
  onExploreAll,
  onPlanTrip,
}: RoadTripJourneyProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const prefersReduced = useReducedMotion();

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlookRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const drivenPathRef = useRef<SVGPathElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const carInnerRef = useRef<HTMLDivElement>(null);

  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [svgSize, setSvgSize] = useState({ width: 1000, height: 3900 });
  const [layout, setLayout] = useState<WaypointLayout>({
    containerHeight: 3900,
    stages: [],
    endY: 3720,
  });

  const activeStage = ROAD_TRIP_SCENES[activeStageIdx] ?? ROAD_TRIP_SCENES[0];
  const svgW = isMobile ? 400 : 1000;
  const svgH = Math.max(1200, layout.containerHeight);

  const roadPathD = useMemo(() => {
    return isMobile ? buildMobilePath(layout) : buildDesktopPath(layout);
  }, [isMobile, layout]);

  const measureLayout = useCallback(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const trackRect = trackEl.getBoundingClientRect();
    const stages = stageRefs.current.map((el) => {
      if (!el) return { top: 0, bottom: 200, center: 100 };
      const r = el.getBoundingClientRect();
      const top = r.top - trackRect.top;
      const bottom = r.bottom - trackRect.top;
      return { top, bottom, center: (top + bottom) * 0.5 };
    });

    let endY = trackRect.height - 140;
    if (overlookRef.current) {
      const overRect = overlookRef.current.getBoundingClientRect();
      endY = Math.max(200, overRect.top - trackRect.top + 36);
    }

    setSvgSize({
      width: Math.max(320, trackRect.width),
      height: Math.max(1200, trackRect.height),
    });

    setLayout({
      containerHeight: Math.max(1200, trackRect.height),
      stages,
      endY,
    });
  }, []);

  useLayoutEffect(() => {
    measureLayout();
    const trackEl = trackRef.current;
    if (!trackEl || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measureLayout);
      return () => window.removeEventListener('resize', measureLayout);
    }

    const observer = new ResizeObserver(() => measureLayout());
    observer.observe(trackEl);
    stageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [measureLayout]);

  // High-frequency GPU RAF scroll tracker: zero React re-renders on scroll ticks
  useEffect(() => {
    const trackEl = trackRef.current;
    const pathEl = pathRef.current;
    const carEl = carWrapperRef.current;
    if (!trackEl || !pathEl || !carEl) return;

    const totalLen = pathEl.getTotalLength();
    if (!totalLen) return;

    if (drivenPathRef.current) {
      drivenPathRef.current.style.strokeDasharray = `${totalLen}`;
    }

    let currentY = 48;
    let currentAngle = 0;
    let targetY = 48;
    let rafId = 0;

    const computeTargetY = () => {
      const rect = trackEl.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const focalScreenY = isMobile ? vh * 0.42 : vh * 0.48;
      const rawY = focalScreenY - rect.top;
      const minY = 24;
      const maxY = Math.max(minY + 10, layout.endY);
      return Math.min(maxY, Math.max(minY, rawY));
    };

    const updateActiveStage = (yInTrack: number) => {
      if (layout.stages.length === 0) return;
      let closestIdx = 0;
      let minDist = Infinity;
      for (let i = 0; i < layout.stages.length; i++) {
        const d = Math.abs(yInTrack - layout.stages[i].center);
        if (d < minDist) {
          minDist = d;
          closestIdx = i;
        }
      }
      setActiveStageIdx((prev) => (prev === closestIdx ? prev : closestIdx));
    };

    const renderCarAtY = (yPos: number, dtScale: number) => {
      const len = findLengthAtY(pathEl, totalLen, yPos);
      const pt = pathEl.getPointAtLength(len);
      const delta = 18;
      const pBefore = pathEl.getPointAtLength(Math.max(0, len - delta));
      const pAfter = pathEl.getPointAtLength(Math.min(totalLen, len + delta));

      const dx = pAfter.x - pBefore.x;
      const dy = Math.max(0.01, pAfter.y - pBefore.y);
      const desiredAngle = Math.atan2(-dx, dy) * (180 / Math.PI);

      // Smooth angular interpolation
      let angleDiff = desiredAngle - currentAngle;
      while (angleDiff > 180) angleDiff -= 360;
      while (angleDiff < -180) angleDiff += 360;
      currentAngle += angleDiff * Math.min(1, 0.24 * dtScale);

      const xPx = (pt.x / svgW) * svgSize.width;
      const yPx = (pt.y / svgH) * svgSize.height;

      carEl.style.transform = `translate3d(${xPx.toFixed(2)}px, ${yPx.toFixed(
        2
      )}px, 0) translate(-50%, -42%) rotate(${currentAngle.toFixed(2)}deg)`;

      if (carInnerRef.current) {
        // Subtle cornering suspension lean proportional to lateral curvature
        const tilt = Math.max(-4, Math.min(4, angleDiff * 0.28));
        const bounce = prefersReduced ? 0 : Math.sin(len * 0.06) * 1.1;
        carInnerRef.current.style.transform = `translateY(${bounce.toFixed(
          2
        )}px) rotate(${tilt.toFixed(2)}deg)`;
      }

      if (drivenPathRef.current) {
        const dashOffset = Math.max(0, totalLen - len);
        drivenPathRef.current.style.strokeDashoffset = `${dashOffset.toFixed(1)}`;
      }
    };

    // Snap initial frame cleanly
    targetY = computeTargetY();
    currentY = targetY;
    renderCarAtY(currentY, 1);
    updateActiveStage(currentY);

    let lastTime = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(32, now - lastTime);
      lastTime = now;
      const dtScale = dt / 16.67;

      targetY = computeTargetY();
      if (prefersReduced || Math.abs(targetY - currentY) > 700) {
        currentY = targetY;
      } else {
        currentY += (targetY - currentY) * Math.min(1, 0.22 * dtScale);
      }

      renderCarAtY(currentY, dtScale);
      updateActiveStage(currentY);

      if (Math.abs(targetY - currentY) > 0.35) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        lastTime = performance.now();
        rafId = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isMobile, layout, prefersReduced, roadPathD, svgH, svgSize.height, svgSize.width, svgW]);

  const scrollToStage = (idx: number) => {
    const el = stageRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="road-trip"
      className="relative bg-[#0E1E19] text-[#F7F4EC]"
    >
      {/* Sticky Atmospheric Stage: Crossfading Indian Landscapes Behind the Road */}
      <div className="pointer-events-none sticky top-0 z-0 h-[100svh] w-full overflow-hidden">
        {ROAD_TRIP_SCENES.map((scene, idx) => {
          const isActive = idx === activeStageIdx;
          const imgProps = getResponsiveImageProps(scene.backdropImage, '100vw');
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                {...imgProps}
                alt={scene.imageAlt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
                className="photo-grade h-full w-full scale-105 object-cover object-center opacity-28 transition-transform duration-[2200ms]"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${scene.atmosphereGradient} opacity-86`}
              />
            </div>
          );
        })}

        {/* Atmospheric Drifting Mist Layers (disabled under prefers-reduced-motion) */}
        {!prefersReduced && (
          <motion.div
            animate={{ x: ['-4%', '4%', '-4%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-24 -left-1/4 h-[420px] w-[150%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,244,236,0.06)_0%,transparent_65%)] blur-2xl"
          />
        )}

        {/* Distant Parallax Mountain Ridges Silhouette */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 w-full opacity-25 sm:h-64"
          aria-hidden="true"
        >
          <path
            d="M0,256L80,224C160,192,320,128,480,138.7C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,320L0,320Z"
            fill="#091511"
          />
        </svg>

        <div className="editorial-grain absolute inset-0" />
      </div>

      {/* Main Content Layer Over Sticky Atmosphere (-mt-[100svh] overlaps sticky canvas cleanly) */}
      <div className="relative z-10 -mt-[100svh]">
        {/* Sticky Route Telemetry & Milestone Bar */}
        <div className="sticky top-[62px] z-30 border-y border-[#C6A66B]/20 bg-[#0d1f19]/88 px-3 py-2 backdrop-blur-md sm:top-[68px] sm:px-6 sm:py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3.5">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-[#102820] text-[#C6A66B] sm:h-7 sm:w-7">
                <Navigation className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold tracking-[0.16em] text-[#C6A66B] uppercase sm:text-[11px] sm:tracking-[0.24em]">
                  <span className="sm:hidden">{activeStage.stageNumber}/06 &bull; {activeStage.name}</span>
                  <span className="hidden sm:inline">Stage {activeStage.stageNumber} / 06 &bull; {activeStage.name}</span>
                </p>
                <p className="hidden truncate text-[10px] tracking-[0.18em] text-[#F7F4EC]/70 uppercase sm:block">
                  {activeStage.highwayCode} &bull; Elev. {activeStage.elevation}
                </p>
              </div>
            </div>

            {/* Interactive Milestone Route Pills */}
            <div
              className="flex shrink-0 items-center gap-1 sm:gap-2"
              role="navigation"
              aria-label="Road trip destinations"
            >
              {ROAD_TRIP_SCENES.map((scene, idx) => {
                const isCurrent = idx === activeStageIdx;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => scrollToStage(idx)}
                    aria-label={`Jump to Stage ${scene.stageNumber}: ${scene.name}`}
                    className={`flex cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
                      isCurrent
                        ? 'border-[#C6A66B] bg-[#C6A66B] h-6 w-6 text-[10px] font-bold text-[#102820] sm:h-7 sm:w-auto sm:px-3 sm:font-semibold sm:tracking-wider'
                        : 'h-6 w-6 border-white/20 bg-white/5 text-[9px] text-[#F7F4EC]/70 hover:border-[#C6A66B]/60 hover:text-white sm:h-7 sm:w-7 sm:text-[10px]'
                    }`}
                  >
                    <span className="sm:hidden">{scene.stageNumber}</span>
                    <span className="hidden sm:inline">{isCurrent ? scene.name : scene.stageNumber}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expedition Section Intro */}
        <div className="mx-auto max-w-4xl px-4 pt-14 pb-8 text-center sm:px-6 sm:pt-20 sm:pb-10">
          <Reveal className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase sm:tracking-[0.36em]">
            <AnimatedRule className="h-px w-6 bg-[#C6A66B] sm:w-8" />
            <span>The Grand Indian Expedition</span>
            <AnimatedRule className="h-px w-6 bg-[#C6A66B] sm:w-8" />
          </Reveal>
          <h2 className="font-editorial mt-3.5 text-[clamp(2rem,6.5vw,3.9rem)] font-normal leading-[1.08] tracking-[-0.02em] text-white">
            <MaskedLine delay={0.08}>
              One Winding Road Across Six Worlds.
            </MaskedLine>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] font-light leading-relaxed text-[#F7F4EC]/78 sm:text-base">
            Scroll gently to drive through misty cedar passes, mirror-still
            lakes, emerald tea terraces, royal desert forts, palm beaches, and
            Himalayan skyways.
          </p>
        </div>

        {/* ============================================================
            SCROLL-DRIVEN WINDING HIGHWAY TRACK + CAR + 6 SCENE CARDS
            ============================================================ */}
        <div
          ref={trackRef}
          className="relative mx-auto max-w-7xl overflow-hidden px-3 pt-4 pb-10 sm:px-6 lg:px-10"
        >
          {/* SVG Winding Scenic Highway Layer */}
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="road-gold-trail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#DCC28E" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.95" />
              </linearGradient>
              <filter id="road-glow" x="-15%" y="-5%" width="130%" height="110%">
                <feGaussianBlur stdDeviation={isMobile ? '3' : '5'} />
              </filter>
            </defs>

            {/* Layer 1: Soft Scenic Embankment Shadow */}
            <path
              d={roadPathD}
              fill="none"
              stroke="#07100D"
              strokeWidth={isMobile ? 42 : 76}
              strokeLinecap="round"
              strokeOpacity="0.6"
              filter="url(#road-glow)"
            />

            {/* Layer 2: Outer Mountain Stone Curbs / Shoulder Lines */}
            <path
              d={roadPathD}
              fill="none"
              stroke="#7A867D"
              strokeWidth={isMobile ? 31 : 58}
              strokeLinecap="round"
              strokeOpacity="0.45"
            />

            {/* Layer 3: Textured Asphalt Highway Carriageway */}
            <path
              ref={pathRef}
              d={roadPathD}
              fill="none"
              stroke="#1A221F"
              strokeWidth={isMobile ? 25 : 48}
              strokeLinecap="round"
            />

            {/* Layer 4: Subtle Inner Road Edge Markings */}
            <path
              d={roadPathD}
              fill="none"
              stroke="#DCC28E"
              strokeWidth={isMobile ? 23 : 44}
              strokeLinecap="round"
              strokeOpacity="0.16"
            />

            {/* Layer 5: Live Golden Route Progress Trail Drawn Behind Car */}
            <path
              ref={drivenPathRef}
              d={roadPathD}
              fill="none"
              stroke="url(#road-gold-trail)"
              strokeWidth={isMobile ? 4 : 6}
              strokeLinecap="round"
              strokeOpacity="0.5"
            />

            {/* Layer 6: Dashed Highway Centerline */}
            <path
              d={roadPathD}
              fill="none"
              stroke="#F7F4EC"
              strokeWidth={isMobile ? 1.8 : 2.6}
              strokeDasharray={isMobile ? '10 10' : '16 14'}
              strokeOpacity="0.65"
            />
          </svg>

          {/* Animated Scroll-Driven Luxury Expedition SUV Layer */}
          <div
            ref={carWrapperRef}
            className="pointer-events-none absolute top-0 left-0 z-20 will-change-transform"
            style={{
              transform: 'translate3d(0px, 0px, 0)',
            }}
          >
            <div ref={carInnerRef} className="will-change-transform">
              <LuxuryExpeditionSUV
                steerAngle={0}
                className="h-auto w-[46px] drop-shadow-[0_14px_22px_rgba(0,0,0,0.65)] sm:w-[56px] md:w-[72px]"
              />
            </div>
          </div>

          {/* 6 Editorial Destination Journey Scenes */}
          <div className="relative z-20 space-y-24 pt-16 sm:space-y-28 sm:pt-20 md:space-y-36 md:pt-12">
            {ROAD_TRIP_SCENES.map((scene: RoadTripScene, idx) => {
              const isLeftDesktop = idx % 2 === 0;
              const isReached = idx <= activeStageIdx;
              const cardImgProps = getResponsiveImageProps(
                scene.cardImage,
                '(max-width: 767px) 84vw, 44vw'
              );

              return (
                <div
                  key={scene.id}
                  id={scene.id}
                  className="pt-20 md:pt-0"
                >
                  <div
                    ref={(el) => {
                      stageRefs.current[idx] = el;
                    }}
                    className={`grid grid-cols-1 items-center md:grid-cols-12 ${
                      /* On mobile: reserve dedicated left highway corridor (~68px) so cards NEVER overlap the road/car */
                      'pl-[4.35rem] xs:pl-[4.75rem] md:pl-0'
                    }`}
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
                      className={`group relative overflow-hidden rounded-2xl border bg-[#10221C]/88 p-4 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-colors duration-500 sm:p-6 md:col-span-6 lg:col-span-5 lg:p-7 ${
                        isLeftDesktop
                          ? 'md:col-start-1'
                          : 'md:col-start-7 lg:col-start-8'
                      } ${
                        isReached
                          ? 'border-[#C6A66B]/55'
                          : 'border-white/15 hover:border-[#C6A66B]/45'
                      }`}
                    >
                      {/* Corner Editorial Foil Accent */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t border-r border-[#C6A66B]/45"
                      />

                      {/* Scene Checkpoint Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-[#C6A66B] uppercase">
                          <span>Scene {scene.stageNumber}</span>
                          <span className="h-1 w-1 rounded-full bg-[#C6A66B]" />
                          <span>{scene.kmMarker}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#C6A66B]/30 bg-[#18392e]/70 px-2.5 py-0.5 text-[9px] font-medium tracking-[0.16em] text-[#DCC28E] uppercase">
                          <Mountain className="h-2.5 w-2.5" />
                          {scene.elevation}
                        </span>
                      </div>

                      {/* Destination Photography Frame */}
                      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0a1813]">
                        <img
                          {...cardImgProps}
                          alt={scene.imageAlt}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d17]/90 via-transparent to-transparent" />
                        <div className="absolute right-3 bottom-3 left-3 flex flex-wrap gap-1.5">
                          {scene.stops.map((stop) => (
                            <span
                              key={stop}
                              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#102820]/75 px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[#F7F4EC] backdrop-blur-sm"
                            >
                              <MapPin className="h-2.5 w-2.5 text-[#C6A66B]" />
                              {stop}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Magazine Copy */}
                      <div className="mt-4 sm:mt-5">
                        <p className="font-editorial text-lg italic tracking-wide text-[#DCC28E] sm:text-xl">
                          {scene.headline}
                        </p>
                        <h3 className="font-editorial mt-0.5 text-[clamp(1.75rem,5vw,2.5rem)] font-normal leading-tight tracking-tight text-white">
                          {scene.name}
                        </h3>
                        <p className="mt-2.5 text-[14px] font-light leading-relaxed text-[#F7F4EC]/84 sm:text-[15px]">
                          {scene.intro}
                        </p>

                        {/* Attractions & Highlights Grid */}
                        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
                          <div>
                            <h4 className="text-[10px] font-semibold tracking-[0.2em] text-[#C6A66B] uppercase">
                              Popular Attractions
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {scene.attractions.map((attr) => (
                                <li
                                  key={attr}
                                  className="flex items-start gap-2 text-xs leading-snug text-[#F7F4EC]/78"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C6A66B]" />
                                  <span>{attr}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[10px] font-semibold tracking-[0.2em] text-[#C6A66B] uppercase">
                              Package Highlights
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {scene.packageHighlights.map((pkg) => (
                                <li
                                  key={pkg}
                                  className="flex items-start gap-2 text-xs leading-snug text-[#F7F4EC]/78"
                                >
                                  <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-[#C6A66B]" />
                                  <span>{pkg}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Interactive Modal CTA */}
                        <div className="mt-5 pt-1">
                          <motion.button
                            type="button"
                            whileTap={{ scale: 0.98 }}
                            onClick={() =>
                              onSelectDestinationById(scene.destinationId)
                            }
                            className="luxury-sheen inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#C6A66B]/60 bg-[#C6A66B] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase shadow-lg transition-colors duration-300 hover:bg-[#F7F4EC]"
                          >
                            <span>Explore Destination</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ============================================================
              END OF JOURNEY: SCENIC VIEWPOINT ARRIVAL
              ============================================================ */}
          <div
            ref={overlookRef}
            className="relative z-20 mx-auto mt-28 max-w-3xl pt-24 pb-10 text-center sm:mt-36 sm:pt-28"
          >
            <Reveal className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A66B]/50 bg-[#102820]/90 px-4 py-1.5 text-[10px] font-semibold tracking-[0.26em] text-[#DCC28E] uppercase backdrop-blur-md">
                <Compass className="h-3.5 w-3.5 text-[#C6A66B]" />
                <span>Scenic Viewpoint &bull; Journey Complete</span>
              </div>

              <h3 className="font-editorial mt-6 text-[clamp(2.2rem,6.8vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white">
                Every Journey Begins With a Dream.
              </h3>

              <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-[#F7F4EC]/84 sm:text-lg">
                Where will your next adventure take you?
              </p>

              <div className="mt-8 flex w-full max-w-sm flex-col items-center justify-center gap-3.5 sm:max-w-none sm:flex-row sm:gap-5">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onExploreAll}
                  className="luxury-sheen inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F7F4EC] px-7 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase shadow-xl transition-colors hover:bg-[#C6A66B] sm:w-auto"
                >
                  <span>Explore All Destinations</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onPlanTrip}
                  className="luxury-sheen inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#C6A66B] bg-[#102820]/80 px-7 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-[#DCC28E] uppercase backdrop-blur-md transition-colors hover:bg-[#C6A66B] hover:text-[#102820] sm:w-auto"
                >
                  <span>Plan Your Trip</span>
                </motion.button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
