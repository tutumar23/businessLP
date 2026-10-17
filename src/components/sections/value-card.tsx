import Text from "@/i18n/text";
import Icon, { type IconName } from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import type { TranslationKey } from "@/i18n/messages";

export type ValueCardProps = { icon: IconName; title: TranslationKey; description: TranslationKey };

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Reveal className="px-[21px] py-1 text-center not-first:border-l not-first:border-[#d1dec6] max-[850px]:nth-3:border-l-0 max-[600px]:px-2.5 max-[600px]:py-0">
      <span className="mx-auto mb-3 flex size-[55px] items-center justify-center rounded-full bg-[#fff9] text-forest max-[600px]:mb-[9px] max-[600px]:size-12">
        <Icon name={icon} className="size-[27px]! max-[600px]:size-6!" />
      </span>
      <Text as="h3" className="text-[15px] leading-[1.9] max-[850px]:text-base max-[600px]:text-[13px]" messageKey={title} />
      <Text as="p" className="mt-[5px] text-[11px] max-[850px]:text-xs max-[600px]:text-[10px]" messageKey={description} />
    </Reveal>
  );
}
