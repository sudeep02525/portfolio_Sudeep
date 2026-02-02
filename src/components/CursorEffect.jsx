"use client";

import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef2 = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Optimized mouse move handler with throttling
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;

      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Update dot position immediately
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    // Optimized cursor follow animation
    const animateCursor = () => {
      const dx = mouseRef.current.x - cursorRef2.current.x;
      const dy = mouseRef.current.y - cursorRef2.current.y;

      // Only animate if there's significant movement
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        cursorRef2.current.x += dx * 0.1;
        cursorRef2.current.y += dy * 0.1;

        cursor.style.left = cursorRef2.current.x + 'px';
        cursor.style.top = cursorRef2.current.y + 'px';
      }

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    // Handle hover effects
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-dot-hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-dot-hover');
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .contact-method-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animateCursor();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(0, 212, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: '#00d4ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
        }}
      />
    </>
  );
}