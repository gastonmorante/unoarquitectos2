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
  color = "#00A3A3",
  cubeColor = "#FFFFFF",
  strokeColor = "#00A3A3",
  strokeWidth = 4,
  animated = false,
  style = {},
}) => {
  if (!animated) {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size, ...style }}
      >
        {/* TOP-LEFT SEGMENT */}
        <g transform="translate(-3, -2)">
          <path
            d="M 100 20 L 30.72 60 L 30.72 140 L 69.69 117.5 L 69.69 82.5 L 100 65 Z"
            fill={color}
          />
        </g>

        {/* TOP-RIGHT SEGMENT */}
        <g transform="translate(3, -2)">
          <path
            d="M 100 20 L 169.28 60 L 169.28 140 L 130.31 117.5 L 130.31 82.5 L 100 65 Z"
            fill={color}
          />
        </g>

        {/* BOTTOM SEGMENT */}
        <g transform="translate(0, 4)">
          <path
            d="M 30.72 140 L 100 180 L 169.28 140 L 130.31 117.5 L 100 135 L 69.69 117.5 Z"
            fill={color}
          />
        </g>

        {/* CENTRAL 3D ISOMETRIC CUBE */}
        <g>
          <path
            d="M 100 77 L 119.92 88.5 L 119.92 111.5 L 100 123 L 80.08 111.5 L 80.08 88.5 Z"
            fill={cubeColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 100 100 L 100 123 M 100 100 L 80.08 88.5 M 100 100 L 119.92 88.5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
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
      {/* TOP-LEFT SEGMENT */}
      <g transform="translate(-3, -2)">
        <motion.path
          d="M 100 20 L 30.72 60 L 30.72 140 L 69.69 117.5 L 69.69 82.5 L 100 65 Z"
          fill={color}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </g>

      {/* TOP-RIGHT SEGMENT */}
      <g transform="translate(3, -2)">
        <motion.path
          d="M 100 20 L 169.28 60 L 169.28 140 L 130.31 117.5 L 130.31 82.5 L 100 65 Z"
          fill={color}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </g>

      {/* BOTTOM SEGMENT */}
      <g transform="translate(0, 4)">
        <motion.path
          d="M 30.72 140 L 100 180 L 169.28 140 L 130.31 117.5 L 100 135 L 69.69 117.5 Z"
          fill={color}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
      </g>

      {/* CENTRAL 3D ISOMETRIC CUBE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <path
          d="M 100 77 L 119.92 88.5 L 119.92 111.5 L 100 123 L 80.08 111.5 L 80.08 88.5 Z"
          fill={cubeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 100 100 L 100 123 M 100 100 L 80.08 88.5 M 100 100 L 119.92 88.5"
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
  
  const iconColor = "#00A3A3";
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
