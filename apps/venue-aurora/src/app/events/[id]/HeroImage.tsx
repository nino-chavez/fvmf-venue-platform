'use client';

import { useState } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  fallbackGradient: string;
}

export function HeroImage({ src, alt, fallbackGradient }: HeroImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${fallbackGradient}`} />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}
