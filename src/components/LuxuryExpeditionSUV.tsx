interface LuxuryExpeditionSUVProps {
  /** Front wheel steering angle in degrees (-18 to +18) */
  steerAngle?: number;
  /** Wheel rotation phase in pixels/degrees for subtle tread motion */
  wheelPhase?: number;
  /** Subtle chassis suspension tilt on sharp bends */
  bodyRoll?: number;
  className?: string;
}

/**
 * Custom lightweight SVG luxury overland SUV oriented downward (+Y nose forward).
 * Features dynamic steering front tires, volumetric headlight beams, overland roof pod,
 * panoramic tinted glass, and metallic forest-graphite finish with zero brand logos.
 */
export function LuxuryExpeditionSUV({
  steerAngle = 0,
  wheelPhase = 0,
  bodyRoll = 0,
  className = 'w-14 h-auto sm:w-20',
}: LuxuryExpeditionSUVProps) {
  const clampedSteer = Math.max(-18, Math.min(18, steerAngle));
  const clampedRoll = Math.max(-3.5, Math.min(3.5, bodyRoll));
  const treadDashOffset = -(wheelPhase % 16);

  return (
    <svg
      viewBox="0 0 120 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Warm LED Headlight Beam Cones pointing downward (+Y) */}
        <linearGradient id="suv-beam-l" x1="38" y1="176" x2="26" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7DC" stopOpacity="0.62" />
          <stop offset="45%" stopColor="#DCC28E" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#DCC28E" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="suv-beam-r" x1="82" y1="176" x2="94" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7DC" stopOpacity="0.62" />
          <stop offset="45%" stopColor="#DCC28E" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#DCC28E" stopOpacity="0" />
        </linearGradient>

        {/* Metallic Forest-Graphite SUV Body Gradient */}
        <linearGradient id="suv-paint" x1="25" y1="30" x2="95" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E3C31" />
          <stop offset="40%" stopColor="#2A5143" />
          <stop offset="68%" stopColor="#142921" />
          <stop offset="100%" stopColor="#0C1914" />
        </linearGradient>

        {/* Tinted Panoramic Glass Roof */}
        <linearGradient id="suv-glass" x1="34" y1="52" x2="86" y2="138" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#091113" />
          <stop offset="45%" stopColor="#182C32" />
          <stop offset="100%" stopColor="#080F10" />
        </linearGradient>

        {/* Anodized Gold Roof Pod Accent */}
        <linearGradient id="suv-pod" x1="42" y1="54" x2="78" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A2220" />
          <stop offset="50%" stopColor="#2B3430" />
          <stop offset="100%" stopColor="#111614" />
        </linearGradient>

        {/* Rear Brake Taillight Ambient Glow */}
        <radialGradient id="suv-taillight" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF2E2E" stopOpacity="0" />
        </radialGradient>

        <filter id="suv-shadow-blur" x="-30%" y="-20%" width="160%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Volumetric Headlight Beams Ahead of Bumper */}
      <polygon points="34,174 46,174 52,258 10,254" fill="url(#suv-beam-l)" />
      <polygon points="74,174 86,174 110,254 68,258" fill="url(#suv-beam-r)" />

      {/* Ground Contact Shadow */}
      <rect
        x="22"
        y="34"
        width="76"
        height="148"
        rx="20"
        fill="#040807"
        fillOpacity="0.62"
        filter="url(#suv-shadow-blur)"
      />

      {/* Chassis Group with Subtle Cornering Roll */}
      <g transform={`translate(${clampedRoll}, 0)`}>
        {/* Rear Wheels */}
        <g>
          <rect x="20" y="48" width="9" height="26" rx="3" fill="#0B0D0C" stroke="#2D3330" strokeWidth="1" />
          <line
            x1="24.5"
            y1="50"
            x2="24.5"
            y2="72"
            stroke="#3C4440"
            strokeWidth="3.5"
            strokeDasharray="3 3"
            strokeDashoffset={treadDashOffset}
          />
          <rect x="91" y="48" width="9" height="26" rx="3" fill="#0B0D0C" stroke="#2D3330" strokeWidth="1" />
          <line
            x1="95.5"
            y1="50"
            x2="95.5"
            y2="72"
            stroke="#3C4440"
            strokeWidth="3.5"
            strokeDasharray="3 3"
            strokeDashoffset={treadDashOffset}
          />
        </g>

        {/* Steerable Front Wheels */}
        <g transform={`rotate(${clampedSteer} 24.5 148)`}>
          <rect x="20" y="135" width="9" height="26" rx="3" fill="#0B0D0C" stroke="#2D3330" strokeWidth="1" />
          <line
            x1="24.5"
            y1="137"
            x2="24.5"
            y2="159"
            stroke="#3C4440"
            strokeWidth="3.5"
            strokeDasharray="3 3"
            strokeDashoffset={treadDashOffset}
          />
        </g>
        <g transform={`rotate(${clampedSteer} 95.5 148)`}>
          <rect x="91" y="135" width="9" height="26" rx="3" fill="#0B0D0C" stroke="#2D3330" strokeWidth="1" />
          <line
            x1="95.5"
            y1="137"
            x2="95.5"
            y2="159"
            stroke="#3C4440"
            strokeWidth="3.5"
            strokeDasharray="3 3"
            strokeDashoffset={treadDashOffset}
          />
        </g>

        {/* Wing Mirrors */}
        <path d="M26 123 L17 120 L18 128 L27 129 Z" fill="#183228" stroke="#C6A66B" strokeOpacity="0.4" strokeWidth="0.8" />
        <path d="M94 123 L103 120 L102 128 L93 129 Z" fill="#183228" stroke="#C6A66B" strokeOpacity="0.4" strokeWidth="0.8" />

        {/* Rear Spare Adventure Tire Carrier */}
        <rect x="46" y="29" width="28" height="9" rx="4" fill="#131816" stroke="#C6A66B" strokeOpacity="0.55" strokeWidth="1" />

        {/* Sculpted SUV Body Shell */}
        <path
          d="M32 36 C32 31, 88 31, 88 36 L93 52 C95 66, 95 144, 93 162 L89 173 C88 178, 32 178, 31 173 L27 162 C25 144, 25 66, 27 52 Z"
          fill="url(#suv-paint)"
          stroke="#C6A66B"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />

        {/* Subtle Side Shoulder Body Highlight */}
        <path
          d="M31 48 L31 160"
          stroke="#DCE6DF"
          strokeOpacity="0.22"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M89 48 L89 160"
          stroke="#07100D"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Hood Power Bulge & Gold Trim Lines (Lower half toward +Y nose) */}
        <path
          d="M39 140 L37 168 M81 140 L83 168"
          stroke="#C6A66B"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <rect x="52" y="148" width="16" height="5" rx="2" fill="#0B1511" fillOpacity="0.85" />

        {/* Front Skid Guard & Grille Bumper */}
        <path
          d="M36 174 Q60 180 84 174"
          stroke="#C6A66B"
          strokeOpacity="0.7"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* High-Intensity LED Headlights */}
        <path d="M32 169 Q38 175 45 174" stroke="#FFF9E6" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M75 174 Q82 175 88 169" stroke="#FFF9E6" strokeWidth="3.2" strokeLinecap="round" />

        {/* Panoramic Windshield + Roof Glass Cabin */}
        <path
          d="M36 44 Q60 41 84 44 L86 124 Q60 137 34 124 Z"
          fill="url(#suv-glass)"
          stroke="#8FA8A0"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Diagonal Glass Sky Reflection */}
        <path
          d="M38 112 L78 58 L82 64 L44 122 Z"
          fill="#FFFFFF"
          fillOpacity="0.09"
        />

        {/* Inner Roof Frame + Brushed Gold Expedition Rails */}
        <line x1="39" y1="50" x2="39" y2="108" stroke="#C6A66B" strokeWidth="1.6" strokeOpacity="0.75" strokeLinecap="round" />
        <line x1="81" y1="50" x2="81" y2="108" stroke="#C6A66B" strokeWidth="1.6" strokeOpacity="0.75" strokeLinecap="round" />

        {/* Sleek Overland Expedition Roof Pod */}
        <rect
          x="44"
          y="53"
          width="32"
          height="50"
          rx="7"
          fill="url(#suv-pod)"
          stroke="#C6A66B"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <line x1="53" y1="59" x2="53" y2="97" stroke="#C6A66B" strokeOpacity="0.22" strokeWidth="1" />
        <line x1="67" y1="59" x2="67" y2="97" stroke="#C6A66B" strokeOpacity="0.22" strokeWidth="1" />

        {/* Rear Windshield Slit */}
        <path
          d="M38 40 Q60 36 82 40 L80 46 Q60 43 40 46 Z"
          fill="#070E0F"
        />

        {/* Crimson Rear Taillight Glow */}
        <ellipse cx="38" cy="34" rx="8" ry="4" fill="url(#suv-taillight)" />
        <ellipse cx="82" cy="34" rx="8" ry="4" fill="url(#suv-taillight)" />
        <line x1="34" y1="35.5" x2="43" y2="35.5" stroke="#FF5E5E" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="77" y1="35.5" x2="86" y2="35.5" stroke="#FF5E5E" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
