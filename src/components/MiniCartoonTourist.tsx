import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MiniCartoonTouristProps {
  currentCardIndex: number;
  destinationName: string;
  tagline?: string;
  onJumpNext?: () => void;
}

const TOURIST_QUIPS: Record<string, string> = {
  Shrishailam: 'Mallikarjuna Jyotirlinga & Shakti Peeth! 🔱',
  Yadadri: 'Climbing holy Yadadri Narasimha hill! ⛰️',
  Vemulawada: 'Om Namah Shivaya! Vemulawada Rajanna! 🪔',
  'Ramappa Temple': 'UNESCO Wonder Ramappa Temple! 🏛️',
  'Thousand Pillar Temple': 'Warangal Thousand Pillar Temple! ✨',
  Bhadrachalam: 'Jai Sita Rama on sacred Godavari! 🏹',
  Yaganti: 'Miraculous growing Nandi at Yaganti! 🚩',
  Tirupati: 'Govinda Govinda! Tirumala Balaji! 🏔️',
  Arunachalam: 'Sacred Giri Pradakshina at Arunachala! 🔥',
  'Ganagapur Temple': 'Digambara Digambara Shripada Vallabha! 📿',
  'Tulja Bhavani Temple': 'Jai Bhavani! Chhatrapati Kulswamini! 🌺',
  'Akalkot Temple': 'Bhiu Nakos! Swami Samarth Maharaj! ✨',
  'Pandharpur Vitthal Rukmini Temple': 'Vitthal Vitthal Jai Hari Vitthal! 🪘',
  Shiridi: 'Shraddha & Saburi! Shirdi Sai Baba! 🙏',
  Bhimashankar: 'Into the misty Sahyadri Jyotirlinga! 🌿',
  Trimbakeshwar: 'Holy Godavari origin & Trimurti! 🌊',
  'Omkareshwar madhya pradesh': 'Sacred OM Island on Narmada River! ॐ',
  'Shri Mahakaleshwar Jyotirlinga Temple': 'Mahakal Bhasma Aarti at Ujjain! 🕉️',
  'Sabarimala Ayyappa Temple': 'Swamiye Saranam Ayyappa! 18 Steps! 🌴',
  'Ayodhya Ram Mandir': 'Jai Shri Ram at Ayodhya Dham! 🏹',
};

/**
 * Delightful animated mini cartoon tourist character featuring:
 * 1. Animated walking stride cycle (swinging legs, alternating shoes, swinging arms)
 * 2. Energetic spring jump & squash physics (anticipation, high leap, dynamic shadow)
 * 3. Horizontal walking stroll across the slide card top
 * 4. High celebratory leap when hopping between destination slides
 */
export function MiniCartoonTourist({
  currentCardIndex,
  destinationName,
  tagline,
  onJumpNext,
}: MiniCartoonTouristProps) {
  const [isTransferring, setIsTransferring] = useState(false);
  const [animationMode, setAnimationMode] = useState<'walk' | 'jump'>('walk');
  const [jumpCount, setJumpCount] = useState(0);

  // High celebratory leap when destination index changes
  useEffect(() => {
    setIsTransferring(true);
    setJumpCount((prev) => prev + 1);
    const timer = setTimeout(() => setIsTransferring(false), 750);
    return () => clearTimeout(timer);
  }, [currentCardIndex]);

  // Alternates between walking stroll (2.6s) and cheerful jump (1.6s)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationMode((prev) => (prev === 'walk' ? 'jump' : 'walk'));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const speechText =
    TOURIST_QUIPS[destinationName] ||
    tagline ||
    `Hopping to ${destinationName}! 🧳`;

  return (
    <div
      onClick={onJumpNext}
      title="Click me to leap to the next sacred destination!"
      className="group relative z-30 flex cursor-pointer flex-col items-center select-none"
    >
      {/* Speech Bubble */}
      <motion.div
        key={`bubble-${destinationName}`}
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative mb-1.5 flex items-center gap-1.5 rounded-full border border-[#10241E]/20 bg-white px-3.5 py-1 shadow-md transition-transform hover:scale-105"
      >
        <span className="text-[10.5px] font-bold text-[#10241E]">
          {speechText}
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10241E] text-[9px] font-bold text-white transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
        {/* Little bubble speech pointer triangle */}
        <div className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-[#10241E]/20 bg-white" />
      </motion.div>

      {/* Horizontal Walking Stroll Wrapper (moves left & right across card top while walking) */}
      <motion.div
        animate={
          isTransferring
            ? { x: 0 }
            : animationMode === 'walk'
            ? { x: [-22, 22, -22] }
            : { x: 0 }
        }
        transition={
          isTransferring
            ? { duration: 0.4 }
            : animationMode === 'walk'
            ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.3 }
        }
        className="relative flex h-16 w-14 items-center justify-center"
      >
        {/* Character Vertical Motion (Walk Bob vs Jumping Launch) */}
        <motion.div
          key={`motion-${jumpCount}-${animationMode}`}
          animate={
            isTransferring
              ? {
                  // High celebratory leap between slides
                  y: [0, 4, -46, -40, 3, -12, 0],
                  scaleY: [1, 0.76, 1.35, 1.25, 0.74, 1.12, 1],
                  scaleX: [1, 1.24, 0.82, 0.88, 1.26, 0.94, 1],
                  rotate: [0, -18, 14, -6, 2, 0],
                }
              : animationMode === 'jump'
              ? {
                  // Cartoon jump: crouch -> leap high -> apex -> squash landing -> rebound -> settle
                  y: [0, 3, -28, -26, 3, -10, 0],
                  scaleY: [1, 0.8, 1.28, 1.2, 0.76, 1.12, 1],
                  scaleX: [1, 1.2, 0.84, 0.88, 1.24, 0.94, 1],
                  rotate: [0, -5, 6, 4, -3, 2, 0],
                }
              : {
                  // Walking Bob: steps up & down with walking stride
                  y: [0, -4, 0, -4, 0, -4, 0],
                  rotate: [-3, 3, -3, 3, -3],
                  scaleY: [1, 1.04, 0.98, 1.04, 1],
                  scaleX: [1, 0.98, 1.02, 0.98, 1],
                }
          }
          transition={
            isTransferring
              ? {
                  duration: 0.75,
                  times: [0, 0.12, 0.42, 0.6, 0.8, 0.9, 1],
                  ease: 'easeInOut',
                }
              : animationMode === 'jump'
              ? {
                  duration: 1.2,
                  times: [0, 0.15, 0.45, 0.6, 0.8, 0.92, 1],
                  ease: 'easeInOut',
                }
              : {
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          className="relative flex h-14 w-12 items-center justify-center"
        >
          {/* Sparkle burst upon leaping or landing */}
          <AnimatePresence>
            {(isTransferring || animationMode === 'jump') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1.3 }}
                exit={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 0.45 }}
                className="pointer-events-none absolute -bottom-1 flex items-center gap-2"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#10241E]" />
                <Sparkles className="h-4 w-4 text-[#C6A66B]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vector SVG Cartoon Tourist Character */}
          <svg
            viewBox="0 0 64 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-md"
          >
            {/* Backpack on back */}
            <motion.g
              animate={
                animationMode === 'walk'
                  ? { y: [0, -2, 0, -2, 0], rotate: [-2, 2, -2] }
                  : { y: [0, -3, 0] }
              }
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect
                x="12"
                y="30"
                width="12"
                height="18"
                rx="4"
                fill="#10241E"
                stroke="#10241E"
                strokeWidth="1.5"
              />
              <rect x="14" y="27" width="8" height="4" rx="1.5" fill="#C6A66B" />
            </motion.g>

            {/* Left Leg & Shoe (Animated Walking Stride Cycle) */}
            <motion.g
              style={{ transformOrigin: '25px 52px' }}
              animate={
                isTransferring
                  ? { rotate: [-18, 22, -10, 0], y: [0, -4, 2, 0] }
                  : animationMode === 'jump'
                  ? { rotate: [-12, -4, 0], y: [0, -4, 0] }
                  : { rotate: [-28, 28, -28], y: [0, -3, 0] }
              }
              transition={{
                duration: animationMode === 'walk' ? 0.6 : 0.8,
                repeat: animationMode === 'walk' ? Infinity : 0,
                ease: 'easeInOut',
              }}
            >
              <rect x="22.5" y="52" width="5.5" height="13" rx="2.5" fill="#2E4A3E" />
              <ellipse cx="24.5" cy="65.5" rx="5" ry="3.2" fill="#10241E" />
              <path
                d="M21 66 Q24.5 68 28.5 66"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Right Leg & Shoe (Animated Walking Stride Cycle - Opposite Phase) */}
            <motion.g
              style={{ transformOrigin: '38px 52px' }}
              animate={
                isTransferring
                  ? { rotate: [22, -18, 10, 0], y: [-4, 0, 2, 0] }
                  : animationMode === 'jump'
                  ? { rotate: [12, 4, 0], y: [0, -4, 0] }
                  : { rotate: [28, -28, 28], y: [-3, 0, -3] }
              }
              transition={{
                duration: animationMode === 'walk' ? 0.6 : 0.8,
                repeat: animationMode === 'walk' ? Infinity : 0,
                ease: 'easeInOut',
              }}
            >
              <rect x="35.5" y="52" width="5.5" height="13" rx="2.5" fill="#2E4A3E" />
              <ellipse cx="38.5" cy="65.5" rx="5" ry="3.2" fill="#10241E" />
              <path
                d="M35 66 Q38.5 68 42.5 66"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Tourist Shirt & Body */}
            <rect
              x="20"
              y="29"
              width="24"
              height="25"
              rx="5"
              fill="#F7F5F0"
              stroke="#10241E"
              strokeWidth="1.5"
            />
            {/* Backpack straps */}
            <path d="M24 30 V50" stroke="#10241E" strokeWidth="1.5" />
            <path d="M39 30 V50" stroke="#10241E" strokeWidth="1.5" />

            {/* Mini Pilgrim Scarf */}
            <path
              d="M23 28 C28 32 36 32 41 28 L43 35 C36 37 28 37 21 35 Z"
              fill="#C6A66B"
              stroke="#10241E"
              strokeWidth="1"
            />

            {/* Left Arm & Hand (Swings naturally with the stride) */}
            <motion.g
              style={{ transformOrigin: '20px 32px' }}
              animate={
                animationMode === 'jump'
                  ? { rotate: [-18, -32, -18], y: [-2, -6, -2] }
                  : { rotate: [26, -26, 26] }
              }
              transition={{
                duration: animationMode === 'jump' ? 0.8 : 0.6,
                repeat: animationMode === 'jump' ? 1 : Infinity,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M20 32 C15 38 13 44 11 48"
                stroke="#FFE8D6"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="48"
                r="2.6"
                fill="#FFE8D6"
                stroke="#10241E"
                strokeWidth="0.8"
              />
            </motion.g>

            {/* Mini Camera Hanging with Strap (bounces with steps) */}
            <motion.g
              animate={
                animationMode === 'walk'
                  ? { y: [0, 2, -3, 1, 0], rotate: [-4, 4, -4] }
                  : { y: [0, 2, -4, -3, 3, 0] }
              }
              transition={{
                duration: animationMode === 'walk' ? 0.6 : 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path d="M26 31 L37 42" stroke="#10241E" strokeWidth="1" />
              <rect
                x="32"
                y="39"
                width="11"
                height="8"
                rx="2"
                fill="#10241E"
                stroke="#FFFFFF"
                strokeWidth="0.8"
              />
              <circle cx="37.5" cy="43" r="2.2" fill="#FFFFFF" />
              <circle cx="37.5" cy="43" r="1.2" fill="#2563EB" />
            </motion.g>

            {/* Head & Smiling Face */}
            <circle
              cx="32"
              cy="18"
              r="12"
              fill="#FFE8D6"
              stroke="#10241E"
              strokeWidth="1.5"
            />
            {/* Blushing cheeks */}
            <ellipse cx="24" cy="21" rx="2" ry="1.2" fill="#FDA4AF" />
            <ellipse cx="40" cy="21" rx="2" ry="1.2" fill="#FDA4AF" />
            {/* Cheerful Eyes */}
            <circle cx="26" cy="17" r="1.6" fill="#10241E" />
            <circle cx="38" cy="17" r="1.6" fill="#10241E" />
            {/* Eye sparkles */}
            <circle cx="26.5" cy="16.5" r="0.6" fill="#FFFFFF" />
            <circle cx="38.5" cy="16.5" r="0.6" fill="#FFFFFF" />
            {/* Happy smile */}
            <path
              d="M28 22 C30 25 34 25 36 22"
              stroke="#10241E"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* Traveler Sunhat / Safari Cap */}
            <path
              d="M17 13 C17 6 47 6 47 13 Z"
              fill="#EFECE6"
              stroke="#10241E"
              strokeWidth="1.5"
            />
            <ellipse
              cx="32"
              cy="13"
              rx="18"
              ry="3.8"
              fill="#EFECE6"
              stroke="#10241E"
              strokeWidth="1.5"
            />
            {/* Hat band */}
            <path
              d="M20 11.5 C24 10.5 40 10.5 44 11.5"
              stroke="#10241E"
              strokeWidth="2"
            />

            {/* Right Arm & Hand (Waves enthusiastically) */}
            <motion.path
              d="M44 33 C49 27 54 20 54 14"
              stroke="#FFE8D6"
              strokeWidth="3.2"
              strokeLinecap="round"
              animate={
                animationMode === 'jump'
                  ? { rotate: [0, 24, -10, 0] }
                  : { rotate: [0, 14, -8, 0] }
              }
              transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <circle
              cx="54"
              cy="14"
              r="2.8"
              fill="#FFE8D6"
              stroke="#10241E"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Dynamic Shadow on Card Top (Tracks walking horizontal position & jump elevation) */}
        <motion.div
          animate={
            isTransferring
              ? {
                  scaleX: [1, 1.35, 0.45, 0.5, 1.4, 0.95, 1],
                  scaleY: [1, 1.3, 0.35, 0.4, 1.35, 0.9, 1],
                  opacity: [0.28, 0.45, 0.08, 0.1, 0.48, 0.22, 0.28],
                }
              : animationMode === 'jump'
              ? {
                  scaleX: [1, 1.3, 0.5, 0.55, 1.35, 0.85, 1],
                  scaleY: [1, 1.25, 0.4, 0.45, 1.3, 0.8, 1],
                  opacity: [0.28, 0.42, 0.1, 0.12, 0.44, 0.2, 0.28],
                }
              : {
                  scaleX: [1, 1.08, 0.94, 1.08, 1],
                  scaleY: [1, 1.06, 0.96, 1.06, 1],
                  opacity: [0.28, 0.34, 0.26, 0.34, 0.28],
                }
          }
          transition={
            isTransferring
              ? {
                  duration: 0.75,
                  times: [0, 0.12, 0.42, 0.6, 0.8, 0.9, 1],
                  ease: 'easeInOut',
                }
              : animationMode === 'jump'
              ? {
                  duration: 1.2,
                  times: [0, 0.15, 0.45, 0.6, 0.8, 0.92, 1],
                  ease: 'easeInOut',
                }
              : {
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          className="pointer-events-none absolute -bottom-1 h-2.5 w-11 rounded-full bg-[#10241E]/30 blur-[1px]"
        />
      </motion.div>
    </div>
  );
}
