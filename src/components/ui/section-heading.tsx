import Text from "@/i18n/text";
import Eyebrow from "./eyebrow";
import type { TranslationKey } from "@/i18n/messages";
import type { IconName } from "./icon";
import Reveal from "./reveal";

export default function SectionHeading({ title, description, eyebrow, icon, id }: {
  title: TranslationKey;
  description?: TranslationKey;
  eyebrow?: TranslationKey;
  icon?: IconName;
  id?: string;
}) {
  return (
    <Reveal className="mx-auto mb-[34px] max-w-[750px] text-center max-[600px]:mb-[27px]">
      {eyebrow && <Eyebrow copy={eyebrow} icon={icon} className="justify-center" />}
      <Text as="h2" id={id} className="max-[600px]:text-[25px] max-[600px]:leading-[1.8]" messageKey={title} />
      {description && <Text as="p" className="mt-3 text-sm max-[600px]:mt-2.5 max-[600px]:text-xs max-[600px]:leading-8" messageKey={description} />}
    </Reveal>
  );
}
