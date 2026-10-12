"use client";

import { languages, languageLabels } from "@/i18n/config";
import { useLanguage } from "@/i18n/language-provider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative isolate grid min-w-[124px] shrink-0 grid-cols-2 items-center gap-0 rounded-xl border border-[#dce5d5] bg-[#eef2e7] p-1 max-[1101px]:min-w-[112px] max-[601px]:min-w-[100px] max-[601px]:rounded-[10px] max-[601px]:p-[3px] max-[381px]:min-w-[94px]" role="group"
      aria-label={language === "my" ? "ဘာသာစကား ရွေးချယ်ရန်" : "Choose language"}
      data-active-language={language}>
      <span aria-hidden="true"
        className={`pointer-events-none absolute inset-y-1 left-1 -z-10 w-[calc((100%_-_8px)/2)] rounded-lg bg-white shadow-[0_1px_4px_#173e2d14] transition-transform duration-250 ease-in-out motion-reduce:transition-none max-[601px]:inset-y-[3px] max-[601px]:left-[3px] max-[601px]:w-[calc((100%_-_6px)/2)] max-[601px]:rounded-[7px] ${language === "en" ? "translate-x-full" : "translate-x-0"}`} />
      {languages.map(option => (
        <button key={option} data-language={option} lang={option} type="button"
          className="flex min-h-[38px] min-w-11 items-center justify-center rounded-lg border-0 bg-transparent px-2.5 py-1 font-sans text-xs leading-[1.7] font-semibold text-[#687564] transition-colors duration-200 hover:text-forest aria-pressed:text-forest focus-visible:outline-offset-1 motion-reduce:transition-none max-[1101px]:px-[7px] max-[601px]:min-h-9 max-[601px]:px-1.5 max-[601px]:text-[11px] max-[381px]:px-1"
          aria-label={languageLabels[option].name} aria-pressed={language === option}
          onClick={() => setLanguage(option)}>
          {languageLabels[option].label}
        </button>
      ))}
    </div>
  );
}
