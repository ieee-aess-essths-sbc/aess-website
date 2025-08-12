
import { useState } from "react";

export function HoverIcon({ href, src, hoverSrc, alt, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
        className={className}
          src={isHovered ? hoverSrc : src}
          alt={alt}
          loading="lazy"
        />
      </a>
    </div>
  );
}