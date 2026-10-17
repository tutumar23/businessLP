import en from "@/locales/en.json";
import my from "@/locales/my.json";
import type { Language } from "./config";

type DictionaryShape<T> = {
  [Key in keyof T]: T[Key] extends string ? string : DictionaryShape<T[Key]>;
};

type LeafKeys<T> = {
  [Key in keyof T & string]: T[Key] extends string ? Key : `${Key}.${LeafKeys<T[Key]>}`;
}[keyof T & string];

export type TranslationKey = LeafKeys<typeof en>;
export type TranslationParams = Readonly<Record<string, string | number>>;
export type Translate = (key: TranslationKey, params?: TranslationParams) => string;

// Both languages must provide the same nested keys as the English dictionary.
export const dictionaries: Record<Language, DictionaryShape<typeof en>> = { en, my };

export function translate(language: Language, key: TranslationKey, params: TranslationParams = {}): string {
  let message: unknown = dictionaries[language];
  for (const segment of key.split(".")) {
    if (!message || typeof message !== "object" || !(segment in message)) {
      throw new Error(`Missing translation: ${language}.${key}`);
    }
    message = (message as Record<string, unknown>)[segment];
  }
  if (typeof message !== "string") throw new Error(`Translation must be text: ${language}.${key}`);
  return message.replace(/\{(\w+)\}/g, (placeholder, name: string) =>
    params[name] === undefined ? placeholder : String(params[name]),
  );
}
