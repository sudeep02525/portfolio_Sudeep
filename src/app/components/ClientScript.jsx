"use client";

import { useEffect } from 'react';

export default function ClientScript() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe elements for reveal animation
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
      } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.6)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}