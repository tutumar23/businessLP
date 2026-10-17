"use client";

import { useEffect, useRef, useState } from "react";

export function useSiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    const onResize = () => { if (window.innerWidth > 850) setMenuOpen(false); };
    const onOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuButtonRef.current?.getAttribute("aria-expanded") === "true") menuButtonRef.current.focus();
      setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onOutsideClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onOutsideClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return {
    headerRef, menuButtonRef, menuOpen, scrolled, activeSection,
    closeMenu: () => setMenuOpen(false), toggleMenu: () => setMenuOpen(open => !open)
  };
}
