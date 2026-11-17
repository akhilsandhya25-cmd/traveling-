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
 * from card to card as the visitor scrolls through the destination slides.
 */
export function MiniCartoonTourist({
  currentCardIndex,
  destinationName,
  tagline,
  onJumpNext,
}: MiniCartoonTouristProps) {
  const [isJumping, setIsJumping] = useState(false);
  const [jumpCount, setJumpCount] = useState(0);

  // Trigger playful jump whenever active destination card changes
  useEffect(() => {
    setIsJumping(true);
    setJumpCount((prev) => prev + 1);
    const timer = setTimeout(() => setIsJumping(false), 650);
    return () => clearTimeout(timer);
  }, [currentCardIndex]);

  const speechText =
    TOURIST_QUIPS[destinationName] ||
    tagline ||
    `Hopping to ${destinationName}! 🧳`;

  return (
    <div
      onClick={onJumpNext}
      title="Click me to hop to the next sacred destination!"
      className="group relative z-30 flex cursor-pointer flex-col items-center select-none"
    >
      {/* Speech Bubble */}
      <motion.div
        key={`bubble-${destinationName}`}
        initial={{ opacity: 0, y: 6, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.25 }}
        className="relative mb-1 flex items-center gap-1.5 rounded-full border border-[#10241E]/20 bg-white px-3 py-1 shadow-md"
      >
        <span className="text-[10.5px] font-bold text-[#10241E]">
          {speechText}
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10241E] text-[9px] font-bold text-white">
          &rarr;
        </span>
        {/* Little bubble speech pointer triangle */}
        <div className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-[#10241E]/20 bg-white" />
      </motion.div>

      {/* Mini Cartoon Tourist Character with Jump Physics */}
      <motion.div
        key={`character-${jumpCount}`}
        animate={
          isJumping
            ? {
                y: [0, -32, 2, 0],
                rotate: [0, -14, 10, 0],
                scaleX: [1, 0.9, 1.15, 1],
                scaleY: [1, 1.18, 0.82, 1],
              }
            : {
                y: [0, -3, 0],
                rotate: [0, 1.5, -1.5, 0],
              }
        }
        transition={
          isJumping
            ? {
                duration: 0.6,
                times: [0, 0.45, 0.85, 1],
                ease: 'easeInOut',
              }
            : {
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        className="relative flex h-14 w-12 items-center justify-center"
      >
        {/* Sparkle burst upon landing */}
        <AnimatePresence>
          {isJumping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1.3 }}
              exit={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="pointer-events-none absolute -bottom-1 flex items-center gap-2"
            >
              <Sparkles className="h-3 w-3 text-[#10241E]" />
              <Sparkles className="h-3.5 w-3.5 text-[#C6A66B]" />
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
          {/* Shadow underneath */}
          <ellipse cx="32" cy="71" rx="14" ry="3" fill="#10241E" fillOpacity="0.25" />

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

          {/* Mini Camera Hanging with Strap */}
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
            animate={{ rotate: [0, 8, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Hand palm */}
          <circle cx="54" cy="14" r="2.8" fill="#FFE8D6" stroke="#10241E" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}
