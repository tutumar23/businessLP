"use client";

import { createElement, type HTMLAttributes, type JSX } from "react";
import { useLanguage } from "./language-provider";

type TextProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  as?: keyof JSX.IntrinsicElements;
  my: string;
  en: string;
  href?: string;
  target?: string;
  rel?: string;
};

export default function Text({ as = "span", my, en, ...props }: TextProps) {
  const { language } = useLanguage();
  const copy = (language === "my" ? my : en).replace(/\\n/g, "\n");
  return createElement(as, { ...props, "data-my": my, "data-en": en }, copy);
}
