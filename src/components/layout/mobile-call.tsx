import LocalizedElement from "@/i18n/localized-element";
import Icon from "@/components/ui/icon";
import { contact } from "@/data/site";

export default function MobileCall() {
  return <LocalizedElement as="a" href={`tel:${contact.phone}`} labelKey="common.callLabel" params={{ phone: contact.phoneLabel }} className="fixed right-[18px] bottom-5 z-40 hidden size-[50px] items-center justify-center rounded-full border-2 border-white bg-forest text-white shadow-[0_5px_20px_#063d2850] transition-transform hover:scale-[1.06] max-[600px]:flex"><Icon name="phone" /></LocalizedElement>;
}
