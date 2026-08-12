import React from "react";
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
  strokeWidth = 3.5,
  animated = false,
  style = {},
}) => {
  // Exact 1:1 Geometry matched to official UNO Arquitectos isotype:
  // Outer Hexagon: (100,15), (173.61,57.5), (173.61,142.5), (100,185), (26.39,142.5), (26.39,57.5)
  // Inner Cube: (100,62), (132.91,81), (132.91,119), (100,138), (67.09,119), (67.09,81)
  // Slit width: 4px

  if (!animated) {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size, ...style }}
      >
        {/* SEGMENT 1: TOP-LEFT TEAL APERTURE */}
        <path
          d="M 98 15 L 26.39 57.5 L 26.39 140.5 L 65.5 117.5 L 65.5 82 L 98 63.5 Z"
          fill={color}
        />

        {/* SEGMENT 2: TOP-RIGHT TEAL APERTURE */}
        <path
          d="M 102 15 L 173.61 57.5 L 173.61 140.5 L 134.5 117.5 L 134.5 82 L 102 63.5 Z"
          fill={color}
        />

        {/* SEGMENT 3: BOTTOM TEAL APERTURE */}
        <path
          d="M 28 144 L 100 185 L 172 144 L 133 121.5 L 100 140.5 L 67 121.5 Z"
          fill={color}
        />

        {/* CENTRAL ISOMETRIC 3D CUBE - 3 WHITE FACES */}
        <path
          d="M 100 62 L 132.91 81 L 132.91 119 L 100 138 L 67.09 119 L 67.09 81 Z"
          fill={cubeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* CUBE INTERNAL EDGES (CENTER TO BOTTOM, TOP-LEFT, TOP-RIGHT) */}
        <path
          d="M 100 100 L 100 138 M 100 100 L 67.09 81 M 100 100 L 132.91 81"
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
      {/* SEGMENT 1: TOP-LEFT TEAL APERTURE */}
      <motion.path
        d="M 98 15 L 26.39 57.5 L 26.39 140.5 L 65.5 117.5 L 65.5 82 L 98 63.5 Z"
        fill={color}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* SEGMENT 2: TOP-RIGHT TEAL APERTURE */}
      <motion.path
        d="M 102 15 L 173.61 57.5 L 173.61 140.5 L 134.5 117.5 L 134.5 82 L 102 63.5 Z"
        fill={color}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      />

      {/* SEGMENT 3: BOTTOM TEAL APERTURE */}
      <motion.path
        d="M 28 144 L 100 185 L 172 144 L 133 121.5 L 100 140.5 L 67 121.5 Z"
        fill={color}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />

      {/* CENTRAL ISOMETRIC 3D CUBE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      >
        <path
          d="M 100 62 L 132.91 81 L 132.91 119 L 100 138 L 67.09 119 L 67.09 81 Z"
          fill={cubeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 100 100 L 100 138 M 100 100 L 67.09 81 M 100 100 L 132.91 81"
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
