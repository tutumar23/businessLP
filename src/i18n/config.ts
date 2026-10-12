export const languages = ["my", "en"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "my";
export const languageStorageKey = "theiddhi-language";

export const languageLabels: Record<Language, { label: string; name: string }> = {
  my: { label: "မြန်မာ", name: "မြန်မာဘာသာ" },
  en: { label: "EN", name: "English" },
};

export const pageTitles: Record<Language, string> = {
  my: "သိဒ္ဓိပွဲရုံ | Agricultural Wholesale",
  en: "Theiddhi | Agricultural Wholesale",
};
