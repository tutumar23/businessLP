import { dictionaries } from "./messages";

export const languages = ["my", "en"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "my";
export const languageStorageKey = "theiddhi-language";

export const languageLabels = {
  my: { label: dictionaries.my.languageSwitcher.optionLabel, name: dictionaries.my.languageSwitcher.optionName },
  en: { label: dictionaries.en.languageSwitcher.optionLabel, name: dictionaries.en.languageSwitcher.optionName },
} satisfies Record<Language, { label: string; name: string }>;

export const pageTitles: Record<Language, string> = {
  my: dictionaries.my.metadata.title,
  en: dictionaries.en.metadata.title,
};

export const pageDescriptions: Record<Language, string> = {
  my: dictionaries.my.metadata.description,
  en: dictionaries.en.metadata.description,
};
