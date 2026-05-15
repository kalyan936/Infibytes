import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Stylized Infinity Loop inspired by the logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <path
            d="M30 50C30 40 40 30 50 30C60 30 70 40 70 50C70 60 60 70 50 70C40 70 30 60 30 50ZM10 50C10 25 30 10 50 10C70 10 90 25 90 50C90 75 70 90 50 90C30 90 10 75 10 50Z"
            fill="url(#logoGradient)"
            className="animate-pulse-slow"
          />
          <path
             d="M50 35C42 35 35 42 35 50C35 58 42 65 50 65C58 65 65 58 65 50C65 42 58 35 50 35Z"
             fill="white"
             fillOpacity="0.2"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tighter text-white">
            INFIBYTE<span className="text-primary text-2xl leading-[0]">.</span>
          </span>
          <span className="text-[8px] font-mono tracking-[0.3em] text-gray-500 uppercase -mt-1">
            Systems Pvt. Ltd.
          </span>
        </div>
      )}
    </div>
  );
};
