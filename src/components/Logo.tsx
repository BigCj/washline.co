'use client';

import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'white';
  className?: string;
  height?: number;
}

export default function Logo({
  variant = 'dark',
  className = '',
  height = 46,
}: LogoProps) {
  const src =
    variant === 'white'
      ? '/images/logo/mr-washline-logo-white.png'
      : '/images/logo/mr-washline-logo.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Mr Washline - Your Foldaway Washing Line Specialists"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain block max-w-none"
        loading="eager"
      />
    </div>
  );
}
