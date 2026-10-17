"use client";

import { createElement, type HTMLAttributes, type JSX } from "react";
import { useLanguage } from "./language-provider";
import type { TranslationKey, TranslationParams } from "./messages";

type TextProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  as?: keyof JSX.IntrinsicElements;
  messageKey: TranslationKey;
  params?: TranslationParams;
  href?: string;
  target?: string;
  rel?: string;
};

export default function Text({ as = "span", messageKey, params, ...props }: TextProps) {
  const { t } = useLanguage();
  return createElement(as, { ...props, "data-i18n": messageKey }, t(messageKey, params));
}
