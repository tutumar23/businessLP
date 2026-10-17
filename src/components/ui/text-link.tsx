import type { ComponentPropsWithoutRef } from "react";
import Icon, { type IconName } from "./icon";

export default function TextLink({ children, icon = "arrow", className = "", ...props }: ComponentPropsWithoutRef<"a"> & { icon?: IconName }) {
  return <a {...props} className={`mt-[18px] inline-flex items-center gap-[14px] py-2 text-[13px] font-semibold text-green transition-[gap] hover:gap-5 ${className}`}>{children}<Icon name={icon} className="size-[19px]!" /></a>;
}
