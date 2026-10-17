"use client";

import { createElement, type ComponentPropsWithoutRef } from "react";
import { useLanguage } from "./language-provider";
import type { TranslationKey, TranslationParams } from "./messages";

type Tag = "a" | "nav" | "div" | "iframe";

type LocalizedElementProps<T extends Tag> = Omit<ComponentPropsWithoutRef<T>, "aria-label" | "title"> & {
  as: T;
  labelKey?: TranslationKey;
  titleKey?: TranslationKey;
  params?: TranslationParams;
};

// Translate accessible attributes while allowing the surrounding layout to stay server-rendered.
export default function LocalizedElement<T extends Tag>({ as, labelKey, titleKey, params, ...props }: LocalizedElementProps<T>) {
  const { t } = useLanguage();
  return createElement(as, {
    ...props,
    ...(labelKey ? { "aria-label": t(labelKey, params) } : {}),
    ...(titleKey ? { title: t(titleKey, params) } : {}),
  });
}
