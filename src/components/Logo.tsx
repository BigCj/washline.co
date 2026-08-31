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
  height = 54,
}: LogoProps) {
  const src =
    variant === 'white'
      ? '/images/logo/the-washline-co-logo-white.png'
      : '/images/logo/the-washline-co-logo.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="The Washline Co. - Quality Foldaway Washing Lines"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain block max-w-none"
        loading="eager"
      />
    </div>
  );
}
