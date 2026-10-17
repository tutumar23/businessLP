"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";

export default function Reveal({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only hide content below the viewport; initial content stays visible during hydration.
    if (element.getBoundingClientRect().top > window.innerHeight) {
      setVisible(false);
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div {...props} ref={ref} data-visible={visible} className={`transition-[opacity,transform] duration-700 ease-out data-[visible=false]:translate-y-[22px] data-[visible=false]:opacity-0 motion-reduce:transform-none motion-reduce:opacity-100 ${className}`} />;
}
