
import { useState } from "react";
import Image from 'next/image'

export function HoverIcon({ href, src, hoverSrc, alt, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
        className={className}
          src={isHovered ? hoverSrc : src}
          alt={alt}
          loading="lazy"
        />
      </a>
    </div>
  );
}