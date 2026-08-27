import { useEffect } from 'react';

function useScrollReveal(key?: string) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger')
    );
    if (nodes.length === 0) return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [key]);
}

export default useScrollReveal;
