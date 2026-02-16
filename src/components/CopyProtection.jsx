"use client";

import { useEffect } from 'react';

export default function CopyProtection() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy, cut, paste
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (Ctrl+C, Ctrl+U, Ctrl+S, etc.)
    const handleKeyDown = (e) => {
      // Ctrl+C, Ctrl+X (Copy, Cut)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x')) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // F12, Ctrl+Shift+I, Ctrl+Shift+J (Developer Tools)
      if (e.key === 'F12' || 
          ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
}
