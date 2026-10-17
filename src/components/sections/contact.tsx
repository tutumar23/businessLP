import { AnimatedLink } from "@/components/animated-action";
import Container from "@/components/ui/container";
import ContactDetail from "@/components/ui/contact-detail";
import Icon from "@/components/ui/icon";
import TextLink from "@/components/ui/text-link";
import SectionHeading from "@/components/ui/section-heading";
import { contact } from "@/data/site";
import Text from "@/i18n/text";
import LocalizedElement from "@/i18n/localized-element";

export default function Contact() {
  return (<section id="contact" className="bg-[#fffef9] py-[82px] max-[850px]:py-16 max-[600px]:py-12">
    <Container>
      <SectionHeading
        eyebrow="contact.eyebrow" icon="pin"
        title="contact.title"
        description="contact.description" />
      <div className="grid grid-cols-[.9fr_1.2fr] overflow-hidden rounded-2xl border border-[#e3e8db] bg-white shadow-[0_8px_32px_#26462305] max-[850px]:grid-cols-2 max-[600px]:grid-cols-1">
        <div className="px-10 py-[35px] max-[1100px]:p-7 max-[850px]:px-[22px] max-[850px]:py-[26px] max-[600px]:p-[26px] max-[360px]:p-[22px]">
          <Text as="h3" className="mb-[22px] text-2xl text-forest max-[850px]:mb-[19px] max-[850px]:text-[22px]" messageKey="contact.businessName" />
          <ContactDetail icon="pin" label="contact.locationLabel">
            <Text as="p" className="mt-1 text-[13px] max-[850px]:text-xs" messageKey="contact.address" />
          </ContactDetail>
          <ContactDetail icon="phone" label="contact.phoneLabel">
            <a className="mt-[3px] block text-[19px] font-semibold leading-[1.8] hover:text-green" href={`tel:${contact.phone}`}>
              {contact.phoneLabel}
            </a>
          </ContactDetail>
          <div className="mt-[26px] flex gap-3 max-[850px]:gap-2">
            <AnimatedLink className="min-h-[50px] min-w-[210px] flex-[0_1_auto] px-[18px] py-3 hover:translate-y-0 max-[850px]:px-2.5 max-[850px]:text-xs max-[600px]:flex-1 max-[600px]:text-[13px]" href={`tel:${contact.phone}`}>
              <Icon name="phone" />
              <Text as="span" messageKey="contact.callUs" />
            </AnimatedLink>
          </div>
          <TextLink icon="external" className="mt-[17px] text-[11px]" href={contact.directions} target="_blank" rel="noopener noreferrer">
            <Text as="span" messageKey="contact.directions" />
          </TextLink>
        </div>
        <div className="relative min-h-[420px] bg-sage max-[600px]:min-h-[320px] max-[600px]:border-t max-[600px]:border-line">
          <LocalizedElement as="iframe" titleKey="contact.mapTitle" src={contact.mapEmbed} width="600" height="450" className="absolute inset-0 block size-full border-0" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
          </LocalizedElement>
        </div>
      </div>
    </Container>
  </section>);
}
