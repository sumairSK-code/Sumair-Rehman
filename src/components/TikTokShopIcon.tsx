import React from 'react';

interface TikTokShopIconProps {
  className?: string;
  size?: number;
}

export const TikTokShopIcon: React.FC<TikTokShopIconProps> = ({ className = 'w-6 h-6', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shopping Bag Outline */}
      <rect x="5" y="9" width="22" height="20" rx="4" fill="#010101" stroke="#FE2C55" strokeWidth="1.5" />
      <path
        d="M11 9V6.5C11 4.567 12.567 3 14.5 3H17.5C19.433 3 21 4.567 21 6.5V9"
        stroke="#25F4EE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* TikTok Note inside bag */}
      <path
        d="M19.5 13.5v5.8a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6.05.9.15V13.5h-1.5v6.5a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6.05.9.15V12h2.5c.3 1.2 1.3 2.1 2.6 2.3v-0.8z"
        fill="#FFFFFF"
      />
      <circle cx="15.2" cy="19.5" r="1.8" fill="#25F4EE" />
      <circle cx="16.5" cy="19.5" r="1.8" fill="#FE2C55" opacity="0.8" />
      <circle cx="15.8" cy="19.5" r="1.4" fill="#FFFFFF" />
    </svg>
  );
};
