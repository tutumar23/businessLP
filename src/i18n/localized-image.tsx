"use client";

import Image, { type ImageProps } from "next/image";
import { useLanguage } from "./language-provider";
import type { TranslationKey } from "./messages";

export default function LocalizedImage({ altKey, ...props }: Omit<ImageProps, "alt"> & { altKey: TranslationKey }) {
  const { t } = useLanguage();
  return <Image {...props} alt={t(altKey)} />;
}
