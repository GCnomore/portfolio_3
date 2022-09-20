import React, { Fragment, useEffect, useRef, useState } from "react";

interface FadeInDownProps {
  children: React.ReactNode;
  twClass?: string;
  delay?: number;
}

export default function FadeInDown({
  children,
  twClass = "",
  delay = 0.2,
}: FadeInDownProps) {
  const [_fadeIn, _setFadeIn] = useState<boolean>(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (!_fadeIn && entries[0].isIntersecting) {
          setTimeout(() => {
            _setFadeIn(true);
          }, delay * 500);
        }
      }
    );

    domRef.current && observer.observe(domRef.current);
    return () => {
      domRef.current && observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${
        _fadeIn ? "fadeInDown" : "hide"
      } ${twClass}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
