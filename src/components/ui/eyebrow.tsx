import Text from "@/i18n/text";
import Icon, { type IconName } from "./icon";

import type { TranslationKey } from "@/i18n/messages";

export default function Eyebrow({ copy, icon, light = false, className = "" }: {
  copy: TranslationKey;
  icon?: IconName;
  light?: boolean;
  className?: string;
}) {
  return (
    <p className={`mb-[15px] flex items-center gap-2.5 text-xs font-semibold tracking-[1px] max-[600px]:mb-2.5 max-[600px]:text-[10px] max-[600px]:tracking-[.6px] ${light ? "text-[#d6ecb8]" : "text-green"} ${className}`}>
      {icon ? <Icon name={icon} className="size-5!" /> : <span aria-hidden="true" className="h-0.5 w-[26px] bg-current" />}
      <Text messageKey={copy} />
    </p>
  );
}
