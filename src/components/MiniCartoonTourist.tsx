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
  Shirdi: 'Next stop: Shirdi Sai Baba! 🙏',
  Yaganti: 'Hopping to ancient Yaganti caves! 🚩',
  Akalkot: 'Visiting Swami Samarth Maharaj! ✨',
  Kolhapur: 'To Mahalakshmi Temple blessings! 🌺',
  Yadagirigutta: 'Climbing holy Yadagirigutta! ⛰️',
  Swarnagiri: 'Golden Swarnagiri awaits! 🪔',
  Tirupati: 'Govinda Govinda! Tirumala Balaji! 🏔️',
  'Mallikarjuna Jyotirlinga (Srisailam)': 'Mallikarjuna Jyotirlinga! 🔱',
  Arunachalam: 'Sacred Giri Pradakshina! 🔥',
  Pandharpur: 'Vitthal Vitthal Jai Hari Vitthal! 🪘',
  'Dagadusheth Ganapati Mandir, Pune': 'Ganapati Bappa Morya! 🐘',
  Bhimashankar: 'Into the Sahyadri forests! 🌿',
  Trimbakeshwar: 'Holy Godavari Jyotirlinga! 🌊',
  Ayodhya: 'Jai Shri Ram at Ayodhya Dham! 🏹',
};

/**
 * Delightful animated mini cartoon tourist character that jumps
 * with realistic spring physics, squash-and-stretch, dynamic shadow,
 * and leaps from card to card across the 3 destination slides.
 */
export function MiniCartoonTourist({
  currentCardIndex,
  destinationName,
  tagline,
  onJumpNext,
}: MiniCartoonTouristProps) {
  const [isTransferring, setIsTransferring] = useState(false);
  const [jumpCount, setJumpCount] = useState(0);

  // Trigger high-power leap whenever active destination changes
  useEffect(() => {
    setIsTransferring(true);
    setJumpCount((prev) => prev + 1);
    const timer = setTimeout(() => setIsTransferring(false), 700);
    return () => clearTimeout(timer);
  }, [currentCardIndex]);

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
        className="relative mb-1 flex items-center gap-1.5 rounded-full border border-[#10241E]/20 bg-white px-3 py-1 shadow-md hover:scale-105 transition-transform"
      >
        <span className="text-[10.5px] font-bold text-[#10241E]">
          {speechText}
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10241E] text-[9px] font-bold text-white group-hover:translate-x-0.5 transition-transform">
          &rarr;
        </span>
        {/* Little bubble speech pointer triangle */}
        <div className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-[#10241E]/20 bg-white" />
      </motion.div>

      {/* Mini Cartoon Tourist Character Container with Jump Physics */}
      <div className="relative flex h-16 w-14 items-center justify-center">
        {/* Jumping Body */}
        <motion.div
          key={`jump-${jumpCount}`}
          animate={
            isTransferring
              ? {
                  // High celebratory leap between slides
                  y: [0, 4, -44, -38, 3, -12, 0],
                  scaleY: [1, 0.78, 1.35, 1.25, 0.76, 1.12, 1],
                  scaleX: [1, 1.22, 0.82, 0.88, 1.24, 0.94, 1],
                  rotate: [0, -18, 14, -6, 2, 0],
                }
              : {
                  // Continuous lively cartoon jumping rhythm (anticipation -> jump -> hang -> land -> rebound -> settle)
                  y: [0, 3, -24, -22, 3, -9, 0, 0],
                  scaleY: [1, 0.82, 1.24, 1.18, 0.8, 1.1, 1, 1],
                  scaleX: [1, 1.18, 0.86, 0.9, 1.2, 0.95, 1, 1],
                  rotate: [0, -4, 6, 4, -3, 2, 0, 0],
                }
          }
          transition={
            isTransferring
              ? {
                  duration: 0.7,
                  times: [0, 0.12, 0.42, 0.6, 0.8, 0.9, 1],
                  ease: 'easeInOut',
                }
              : {
                  duration: 1.45,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  times: [0, 0.15, 0.4, 0.55, 0.75, 0.88, 0.96, 1],
                  ease: 'easeInOut',
                }
          }
          className="relative flex h-14 w-12 items-center justify-center"
        >
          {/* Sparkle burst upon leaping or landing */}
          <AnimatePresence>
            {isTransferring && (
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

            {/* Legs & Shoes */}
            <rect x="23" y="52" width="5" height="12" rx="2" fill="#2E4A3E" />
            <rect x="35" y="52" width="5" height="12" rx="2" fill="#2E4A3E" />
            {/* Little Shoes */}
            <ellipse cx="24" cy="66" rx="4.5" ry="3" fill="#10241E" />
            <ellipse cx="38" cy="66" rx="4.5" ry="3" fill="#10241E" />

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

            {/* Mini Camera Hanging with Strap that jiggles with the jump */}
            <motion.g
              animate={{ y: [0, 2, -4, -3, 3, 0] }}
              transition={{ duration: 1.45, repeat: Infinity, ease: 'easeInOut' }}
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

            {/* Waving Arm & Hand */}
            <motion.path
              d="M44 33 C49 27 54 20 54 14"
              stroke="#FFE8D6"
              strokeWidth="3.2"
              strokeLinecap="round"
              animate={{ rotate: [0, 12, -8, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Hand palm */}
            <circle cx="54" cy="14" r="2.8" fill="#FFE8D6" stroke="#10241E" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Dynamic Jump Shadow on Card Top */}
        <motion.div
          animate={
            isTransferring
              ? {
                  // Shadow expands on squash, shrinks to tiny dot high in air
                  scaleX: [1, 1.35, 0.45, 0.5, 1.4, 0.95, 1],
                  scaleY: [1, 1.3, 0.35, 0.4, 1.35, 0.9, 1],
                  opacity: [0.28, 0.45, 0.08, 0.1, 0.48, 0.22, 0.28],
                }
              : {
                  // Synchronized continuous jump shadow loop
                  scaleX: [1, 1.25, 0.55, 0.6, 1.3, 0.85, 1, 1],
                  scaleY: [1, 1.2, 0.45, 0.5, 1.25, 0.8, 1, 1],
                  opacity: [0.26, 0.4, 0.1, 0.12, 0.42, 0.2, 0.26, 0.26],
                }
          }
          transition={
            isTransferring
              ? {
                  duration: 0.7,
                  times: [0, 0.12, 0.42, 0.6, 0.8, 0.9, 1],
                  ease: 'easeInOut',
                }
              : {
                  duration: 1.45,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  times: [0, 0.15, 0.4, 0.55, 0.75, 0.88, 0.96, 1],
                  ease: 'easeInOut',
                }
          }
          className="pointer-events-none absolute -bottom-1 h-2.5 w-10 rounded-full bg-[#10241E]/30 blur-[1px]"
        />
      </div>
    </div>
  );
}
