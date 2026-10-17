import type { ComponentPropsWithoutRef } from "react";

export default function Container({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={`mx-auto w-[calc(100%_-_80px)] max-w-[1240px] max-[1100px]:w-[calc(100%_-_48px)] max-[600px]:w-[calc(100%_-_36px)] max-[360px]:w-[calc(100%_-_28px)] ${className}`} />;
}
