import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  if (variant === 'light' && !imgError) {
    return (
      <img
        src="/assets/aistudio/image_cf0e7919.png"
        alt="ONYCON Infrastructure"
        width={249}
        height={71}
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`h-[38px] sm:h-[44px] w-auto object-contain select-none shrink-0 ${className}`}
      />
    );
  }

  const isLight = variant === 'light';
  const wordmarkColor = isLight ? '#001B44' : '#FFFFFF';
  const subColor = isLight ? '#062B60' : '#DCE8F7';
  const symbolColor = isLight ? '#0763D1' : '#FFFFFF';

  return (
    <span className={`inline-flex items-center gap-3 select-none shrink-0 ${className}`}>
      <svg
        width="64"
        height="36"
        viewBox="0 0 132 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-[52px] sm:w-[60px] h-auto shrink-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 66L38 6H53L72 31L98 6H122L84 41L116 66H94L72 48L54 66H39L57 49L2 66ZM21 53L48 45L40 24L21 53Z"
          fill={symbolColor}
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className="font-heading font-bold tracking-[0.04em] text-[20px] sm:text-[23px]"
          style={{ color: wordmarkColor }}
        >
          ONYCON
        </span>
        <span
          className="font-heading font-semibold tracking-[0.14em] text-[8.5px] sm:text-[9.5px] mt-[3px]"
          style={{ color: subColor }}
        >
          INFRASTRUCTURE
        </span>
      </span>
    </span>
  );
};
