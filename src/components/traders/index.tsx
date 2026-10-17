"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { traders, type Trader } from "@/data/traders";
import Text from "@/i18n/text";
import TraderCard from "./trader-card";
import Icon from "@/components/ui/icon";

export default function Traders({ items = traders, initialCount = 3 }: {
  items?: Trader[];
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const previousHeight = useRef<number | null>(null);
  const previewCount = Math.max(1, initialCount);
  const visibleTraders = expanded ? items : items.slice(0, previewCount);

  function toggleTraders() {
    previousHeight.current = gridRef.current?.getBoundingClientRect().height ?? null;
    setExpanded(value => !value);
  }

  useLayoutEffect(() => {
    const grid = gridRef.current;
    const fromHeight = previousHeight.current;
    if (!grid || fromHeight === null) return;
    previousHeight.current = null;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = expanded ? grid.children[previewCount] : headingRef.current;
    if (!target) return;
    const startScroll = window.scrollY;
    const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const endScroll = Math.max(0, startScroll + target.getBoundingClientRect().top - scrollPadding);
    const duration = 850;
    const animation = reducedMotion ? undefined : grid.animate(
      [
        { height: `${fromHeight}px`, overflow: "clip" },
        { height: `${grid.getBoundingClientRect().height}px`, overflow: "clip" },
      ],
      { duration, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
    );

    if (reducedMotion) {
      window.scrollTo({ top: endScroll, behavior: "instant" });
      return;
    }

    let frame = 0;
    const startTime = performance.now();
    const stopScroll = () => cancelAnimationFrame(frame);
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Escape"].includes(event.key)) stopScroll();
    };
    function scrollFrame(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      window.scrollTo({ top: startScroll + (endScroll - startScroll) * eased, behavior: "instant" });
      if (progress < 1) frame = requestAnimationFrame(scrollFrame);
    }
    frame = requestAnimationFrame(scrollFrame);
    window.addEventListener("wheel", stopScroll, { passive: true });
    window.addEventListener("touchstart", stopScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      stopScroll();
      animation?.cancel();
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded, previewCount]);

  return (
    <section id="traders" className="bg-white py-[82px] [overflow-anchor:none] max-[850px]:py-16 max-[600px]:py-12" aria-labelledby="traders-heading">
      <div className="mx-auto w-[calc(100%_-_80px)] max-w-[1120px] max-[850px]:w-[calc(100%_-_48px)] max-[600px]:w-[calc(100%_-_36px)]">
        <div ref={headingRef} className="mx-auto mb-10 max-w-[800px] text-center max-[600px]:mb-7">
          <Text as="h2" id="traders-heading" className="text-[clamp(28px,4vw,46px)] font-medium leading-[1.4] text-forest" messageKey="traders.title" />

        </div>
        <div ref={gridRef} id="trader-cards" className="grid grid-cols-3 items-start gap-[26px] max-[850px]:gap-4 max-[600px]:grid-cols-1">
          {visibleTraders.map((trader, index) => <TraderCard key={trader.id} trader={trader} index={index} />)}
        </div>
        {items.length > previewCount && (
          <div className="mt-11 flex justify-center max-[600px]:mt-[30px]">
            <button type="button" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-forest bg-white px-[22px] py-2.5 text-sm font-medium text-forest transition-colors hover:bg-sage" aria-expanded={expanded} aria-controls="trader-cards" onClick={toggleTraders}>
              {expanded
                ? <Text messageKey="traders.showLess" />
                : <Text messageKey="traders.showMore" />}
              <Icon name="arrow" className={`size-[17px]! transition-transform ${expanded ? "-rotate-90" : ""}`} />
            </button>
            <span role="status" className="sr-only">
              <Text messageKey="traders.status" params={{ count: visibleTraders.length, total: items.length }} />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
