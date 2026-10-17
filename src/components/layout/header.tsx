"use client";

import LanguageSwitcher from "@/components/language-switcher";
import Brand from "@/components/ui/brand";
import Container from "@/components/ui/container";
import { navigation } from "@/data/site";
import { useSiteNavigation } from "@/hooks/use-site-navigation";
import Text from "@/i18n/text";
import { useLanguage } from "@/i18n/language-provider";

export default function Header() {
  const { t } = useLanguage();
  const { headerRef, menuButtonRef, menuOpen, scrolled, activeSection, closeMenu, toggleMenu } = useSiteNavigation();
  return (
    <header ref={headerRef} className={`sticky top-0 z-50 border-b border-[#dce5d555] bg-[#fbfcf7f5] backdrop-blur-[16px] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_#173e2d0d]" : ""}`}>
      <Container className="flex min-h-[100px] items-center justify-between gap-6 max-[1100px]:min-h-[90px] max-[1100px]:gap-4 max-[850px]:min-h-[82px] max-[600px]:min-h-[76px] max-[600px]:gap-2 max-[360px]:gap-1">
        <Brand />
        <nav id="navigation" aria-label={t("navigation.label")} data-open={menuOpen}
          className="ml-auto flex items-center gap-[clamp(12px,1.6vw,24px)] max-[850px]:absolute max-[850px]:inset-x-0 max-[850px]:top-full max-[850px]:m-0 max-[850px]:hidden max-[850px]:border-b max-[850px]:border-line max-[850px]:bg-cream max-[850px]:px-6 max-[850px]:pt-2.5 max-[850px]:pb-[18px] max-[850px]:shadow-[0_12px_15px_#173e2d0d] max-[850px]:data-[open=true]:flex max-[850px]:data-[open=true]:flex-col max-[850px]:data-[open=true]:items-stretch max-[850px]:data-[open=true]:gap-0">
          {navigation.map(({ id, label }) => (
            <Text as="a" key={id} messageKey={label} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} onClick={closeMenu}
              className="relative py-[14px] text-[13px] font-semibold whitespace-nowrap transition-colors hover:text-green aria-[current=location]:text-green after:absolute after:inset-x-0 after:bottom-[5px] after:h-0.5 after:scale-x-0 after:bg-green after:transition-transform after:duration-250 after:content-[''] hover:after:scale-x-100 aria-[current=location]:after:scale-x-100 max-[1100px]:text-[11px] max-[850px]:border-b max-[850px]:border-[#dde5d777] max-[850px]:px-[5px] max-[850px]:py-3 max-[850px]:text-sm max-[850px]:after:hidden" />
          ))}
        </nav>
        <div className="flex items-center gap-[14px] max-[850px]:ml-auto max-[600px]:gap-[9px] max-[380px]:gap-[7px] max-[360px]:gap-[6px]">
          <LanguageSwitcher />
          <button ref={menuButtonRef} aria-controls="navigation" type="button" aria-expanded={menuOpen} aria-label={t(menuOpen ? "navigation.closeMenu" : "navigation.openMenu")} onClick={toggleMenu}
            className="group hidden size-[43px] flex-col justify-center gap-[5px] rounded-lg border border-line bg-transparent p-2.5 max-[850px]:flex max-[600px]:size-[38px] max-[600px]:p-2">
            <span className="block h-0.5 w-[21px] bg-forest transition-transform duration-250 group-aria-expanded:translate-y-[7px] group-aria-expanded:rotate-45" />
            <span className="block h-0.5 w-[21px] bg-forest transition-opacity duration-200 group-aria-expanded:opacity-0" />
            <span className="block h-0.5 w-[21px] bg-forest transition-transform duration-250 group-aria-expanded:-translate-y-[7px] group-aria-expanded:-rotate-45" />
          </button>
        </div>
      </Container>
    </header>
  );
}
