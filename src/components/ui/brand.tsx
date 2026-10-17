import LocalizedImage from "@/i18n/localized-image";
import LocalizedElement from "@/i18n/localized-element";
import Text from "@/i18n/text";

export default function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <LocalizedElement as="a" href="#home" labelKey="brand.homeLabel" className="flex shrink-0 items-center gap-[13px] max-[600px]:gap-2 max-[360px]:gap-1.5">
      <LocalizedImage src="/images/logo.png" width={64} height={64} altKey="brand.logoAlt"
        className={footer ? "size-[50px] rounded-full bg-white object-contain" : "size-[65px] rounded-full bg-white object-contain max-[1100px]:size-[54px] max-[600px]:size-[46px] max-[380px]:size-[38px] max-[360px]:size-8"} />
      <span>
        <Text as="strong" messageKey="brand.name"
          className={`block leading-[1.7] [html[lang=en]_&]:leading-[1.15] [html[lang=en]_&]:tracking-[-.8px] ${footer ? "text-[23px] text-white [html[lang=en]_&]:text-[27px]" : "text-[27px] text-forest max-[1100px]:text-[23px] max-[850px]:text-[22px] max-[600px]:text-xl max-[380px]:text-[17px] max-[360px]:text-base [html[lang=en]_&]:text-[30px] [html[lang=en]_&]:max-[1100px]:text-[27px] [html[lang=en]_&]:max-[600px]:text-[25px] [html[lang=en]_&]:max-[380px]:text-[22px]"}`} />
        <Text as="small" messageKey="brand.tagline"
          className={`block font-semibold tracking-[.1px] [html[lang=en]_&]:mt-[5px] [html[lang=en]_&]:font-medium [html[lang=en]_&]:leading-[1.4] [html[lang=en]_&]:tracking-[1.3px] ${footer ? "text-[9px] text-[#d8e6cd] [html[lang=en]_&]:text-[11px]" : "text-[11px] text-forest max-[1100px]:text-[9px] max-[600px]:text-[8px] max-[380px]:text-[7px] max-[360px]:text-[6px] [html[lang=en]_&]:text-xs [html[lang=en]_&]:max-[1100px]:text-[11px] [html[lang=en]_&]:max-[600px]:mt-[3px] [html[lang=en]_&]:max-[600px]:text-[10px] [html[lang=en]_&]:max-[600px]:tracking-[.6px] [html[lang=en]_&]:max-[380px]:text-[9px]"}`} />
      </span>
    </LocalizedElement>
  );
}
