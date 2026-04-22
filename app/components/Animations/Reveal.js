"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const axis = direction === "left" || direction === "right" ? "X" : "Y";
  const signedDistance =
    direction === "down" || direction === "right" ? -distance : distance;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-transform": `translate${axis}(${signedDistance}px)`,
        }
      }
    >
      {children}
    </div>
  );
}
