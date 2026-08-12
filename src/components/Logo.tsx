import React, { useId } from "react";
import { motion } from "motion/react";

export interface UnoIsotypeProps {
  size?: number | string;
  className?: string;
  color?: string;
  cubeColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  animated?: boolean;
  style?: React.CSSProperties;
}

export const UnoIsotype: React.FC<UnoIsotypeProps> = ({
  size = 32,
  className = "",
  color = "#009E9B",
  cubeColor = "#FFFFFF",
  strokeColor = "#009E9B",
  strokeWidth = 3.2,
  animated = false,
  style = {},
}) => {
  const reactId = useId().replace(/:/g, "");
  const maskId = `uno-iso-mask-${reactId}`;

  // Mathematical Geometry (100% matched to official reference image):
  // Outer Regular Hexagon: Radius R = 83.14, Centers (100, 100)
  // Vertices: (100, 16.86), (172, 58.43), (172, 141.57), (100, 183.14), (28, 141.57), (28, 58.43)
  // Inner Isometric Cube: Radius r = 34.64, Centers (100, 100)
  // Cube Vertices: (100, 65.36), (130, 82.68), (130, 117.32), (100, 134.64), (70, 117.32), (70, 82.68)
  // Slit lines etched at exactly 30° and 90° angles with 3.2px width.

  if (!animated) {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size, ...style }}
      >
        <defs>
          <mask id={maskId}>
            {/* White reveals everything */}
            <rect width="200" height="200" fill="#FFFFFF" />
            {/* Black cuts the 3 slits with razor precision */}
            <line x1="100" y1="12" x2="100" y2="68" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
            <line x1="25" y1="143.5" x2="72" y2="116.5" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
            <line x1="175" y1="143.5" x2="128" y2="116.5" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
          </mask>
        </defs>

        {/* OUTER TEAL ISOMETRIC HEXAGON */}
        <path
          d="M 100 16.86 L 172 58.43 L 172 141.57 L 100 183.14 L 28 141.57 L 28 58.43 Z"
          fill={color}
          mask={`url(#${maskId})`}
        />

        {/* CENTRAL 3D ISOMETRIC CUBE (WHITE FACES) */}
        <path
          d="M 100 65.36 L 130 82.68 L 130 117.32 L 100 134.64 L 70 117.32 L 70 82.68 Z"
          fill={cubeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* INTERNAL 3-FACE ARISTAS (CENTER TO BOTTOM, TOP-LEFT, TOP-RIGHT) */}
        <path
          d="M 100 100 L 100 134.64 M 100 100 L 70 82.68 M 100 100 L 130 82.68"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size, ...style }}
    >
      <defs>
        <mask id={maskId}>
          <rect width="200" height="200" fill="#FFFFFF" />
          <line x1="100" y1="12" x2="100" y2="68" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
          <line x1="25" y1="143.5" x2="72" y2="116.5" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
          <line x1="175" y1="143.5" x2="128" y2="116.5" stroke="#000000" strokeWidth={strokeWidth} strokeLinecap="square" />
        </mask>
      </defs>

      {/* OUTER TEAL ISOMETRIC HEXAGON */}
      <motion.path
        d="M 100 16.86 L 172 58.43 L 172 141.57 L 100 183.14 L 28 141.57 L 28 58.43 Z"
        fill={color}
        mask={`url(#${maskId})`}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* CENTRAL 3D ISOMETRIC CUBE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      >
        <path
          d="M 100 65.36 L 130 82.68 L 130 117.32 L 100 134.64 L 70 117.32 L 70 82.68 Z"
          fill={cubeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 100 100 L 100 134.64 M 100 100 L 70 82.68 M 100 100 L 130 82.68"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
};

export interface LogoProps {
  className?: string;
  animated?: boolean;
  showText?: boolean;
  iconSize?: number | string;
  isScrolled?: boolean;
  theme?: "adaptive" | "light" | "dark";
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8", 
  animated = false,
  showText = true,
  iconSize = 32,
  isScrolled = false,
  theme = "adaptive",
  textSize = "text-base"
}) => {
  const isDarkBg = theme === "dark" || (theme === "adaptive" && !isScrolled);
  
  const iconColor = "#009E9B";
  const titleColor = isDarkBg ? "text-teal-uno md:text-white" : "text-teal-uno";
  const subtitleColor = isDarkBg ? "text-gris-texto md:text-zinc-300" : "text-gris-texto";
  const cubeBgColor = "#FFFFFF";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="relative flex items-center justify-center flex-shrink-0">
        <UnoIsotype
          size={iconSize}
          animated={animated}
          color={iconColor}
          cubeColor={cubeBgColor}
          strokeColor={iconColor}
        />
      </div>

      {showText && (
        <div className="flex flex-col items-center justify-center text-center leading-none font-sans select-none">
          <motion.span
            className={`font-semibold tracking-[0.3em] pl-[0.3em] uppercase font-label-caps ${textSize} ${titleColor}`}
            initial={animated ? { opacity: 0, y: -4 } : false}
            animate={animated ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            UNO
          </motion.span>
          <motion.span
            className={`font-normal tracking-[0.38em] pl-[0.38em] text-[9.5px] sm:text-[10px] mt-1 lowercase font-body-md ${subtitleColor}`}
            initial={animated ? { opacity: 0 } : false}
            animate={animated ? { opacity: 1 } : false}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            arquitectos
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default Logo;
