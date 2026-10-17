import type { CSSProperties } from "react";

export type IconName = "leaf" | "arrow" | "phone" | "pin" | "truck" | "check" | "basket" | "sun" | "external" | "store" | "avatar-woman" | "avatar-man";

// A mask lets external SVG assets inherit the surrounding text color.
export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const style: CSSProperties = {
    mask: `url(/svg/${name}.svg) center / contain no-repeat`,
    WebkitMask: `url(/svg/${name}.svg) center / contain no-repeat`,
  };
  return <span aria-hidden="true" style={style} className={`inline-block size-[22px] shrink-0 bg-current ${className}`} />;
}
