import type { ReactNode } from "react";
import Text from "@/i18n/text";
import type { TranslationKey } from "@/i18n/messages";
import Icon, { type IconName } from "./icon";

export default function ContactDetail({ icon, label, children }: { icon: IconName; label: TranslationKey; children: ReactNode }) {
  return (
    <div className="mt-5 flex items-start gap-[14px] max-[600px]:mt-[18px]">
      <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg bg-[#edf3e5] text-forest"><Icon name={icon} className="size-5!" /></span>
      <div>
        <Text as="small" className="block text-[10px] font-semibold tracking-[1px] text-[#818b79]" messageKey={label} />
        {children}
      </div>
    </div>
  );
}
