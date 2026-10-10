import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const smoothFollow = () => {
      setPos((prev) => ({
        x: prev.x + (dotPos.x - prev.x) * 0.18,
        y: prev.y + (dotPos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotPos, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central precise metallic purple dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-purple-neon shadow-[0_0_8px_#C084FC] transition-transform duration-75"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate(${dotPos.x - 3}px, ${dotPos.y - 3}px)`,
        }}
      />
      {/* Outer subtle glow ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-all duration-200 ease-out ${
          isHovered
            ? 'border-purple-neon bg-purple-glow/20 scale-150 shadow-[0_0_15px_rgba(192,132,252,0.8)]'
            : 'border-purple-neon/40 scale-100 shadow-[0_0_8px_rgba(168,85,247,0.3)]'
        }`}
        style={{
          width: '32px',
          height: '32px',
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
        }}
      />
    </>
  );
};
