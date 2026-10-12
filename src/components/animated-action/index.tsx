"use client";

import { useEffect, useRef, useState, type AnchorHTMLAttributes } from "react";

// Keep both trails inside the button so they remain visible on light page backgrounds.
const animationClasses = `relative isolate overflow-visible
  before:pointer-events-none before:absolute before:z-10 before:rounded-[inherit] before:content-[''] before:[background:conic-gradient(from_var(--button-border-angle),transparent_0deg_100deg,transparent_100deg,var(--trail-faint)_135deg,var(--trail-medium)_160deg,var(--trail-bright)_178deg,transparent_180deg_280deg,transparent_280deg,var(--trail-faint)_315deg,var(--trail-medium)_340deg,var(--trail-bright)_358deg,transparent_360deg)] before:[mask:linear-gradient(#fff_0_0)_content-box_exclude,linear-gradient(#fff_0_0)] before:animate-button-border before:transition-opacity before:duration-250
  after:pointer-events-none after:absolute after:-inset-0.5 after:-z-10 after:rounded-[inherit] after:p-0.5 after:content-[''] after:[background:conic-gradient(from_var(--button-border-angle),transparent_0deg_100deg,#ffffff00_100deg,#ffffff26_135deg,#ffffff99_160deg,#ffffff_178deg,transparent_180deg_280deg,#ffffff00_280deg,#ffffff26_315deg,#ffffff99_340deg,#ffffff_358deg,transparent_360deg)] after:[mask:linear-gradient(#fff_0_0)_content-box_exclude,linear-gradient(#fff_0_0)] after:blur-[5px] after:animate-button-border after:transition-opacity after:duration-250
  motion-reduce:before:animate-none motion-reduce:after:animate-none motion-reduce:before:transition-none motion-reduce:after:transition-none`;

const interactionClasses = `before:opacity-0 before:[animation-play-state:paused]
  after:opacity-0 after:[animation-play-state:paused]
  hover:before:opacity-100 hover:before:[animation-play-state:running] hover:after:opacity-65 hover:after:[animation-play-state:running]
  focus-visible:before:opacity-100 focus-visible:before:[animation-play-state:running] focus-visible:after:opacity-75 focus-visible:after:[animation-play-state:running]
  data-[pressed=true]:before:opacity-100 data-[pressed=true]:before:[animation-play-state:running] data-[pressed=true]:after:opacity-75 data-[pressed=true]:after:[animation-play-state:running]
`;

const alwaysVisibleClasses = "before:opacity-100 after:opacity-65";

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  animation?: "interaction" | "always";
  tone?: "light" | "forest";
};

function usePressFeedback() {
  const [pressed, setPressed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showFeedback = () => {
    if (timer.current) clearTimeout(timer.current);
    setPressed(true);
    timer.current = setTimeout(() => setPressed(false), 1250);
  };
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);
  return { pressed, showFeedback };
}

export function AnimatedLink({ className = "", animation = "interaction", tone = "light", onClick, onPointerDown, onKeyDown, ...props }: AnimatedLinkProps) {
  const { pressed, showFeedback } = usePressFeedback();
  const appearance = tone === "forest"
    ? "[--trail-faint:#07533326] [--trail-medium:#07533399] [--trail-bright:#075333] before:inset-0 before:p-0.5"
    : "[--trail-faint:#ffffff26] [--trail-medium:#ffffff99] [--trail-bright:#ffffff] before:inset-0 before:p-0.5";
  const activation = animation === "always" ? alwaysVisibleClasses : interactionClasses;
  return <a {...props} className={`${animationClasses} ${appearance} ${activation} ${className}`} data-pressed={pressed}
    onPointerDown={event => { showFeedback(); onPointerDown?.(event); }}
    onClick={event => { showFeedback(); onClick?.(event); }}
    onKeyDown={event => { if (event.key === "Enter") showFeedback(); onKeyDown?.(event); }} />;
}
