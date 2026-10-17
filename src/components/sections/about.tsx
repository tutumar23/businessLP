import LocalizedImage from "@/i18n/localized-image";
import LocalizedElement from "@/i18n/localized-element";
import Container from "@/components/ui/container";
import Icon from "@/components/ui/icon";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import TextLink from "@/components/ui/text-link";
import Text from "@/i18n/text";

export default function About() {
  return (<section id="about" className="bg-white py-[82px] max-[850px]:py-16 max-[600px]:py-12">
    <Container className="grid grid-cols-2 items-center gap-[85px] p-9 max-[1100px]:gap-[50px] max-[850px]:gap-[34px] max-[850px]:p-7 max-[600px]:grid-cols-1 max-[600px]:gap-[31px] max-[600px]:px-[18px] max-[600px]:py-6">
      <Reveal className="relative pb-[30px] max-[600px]:mt-[7px] max-[600px]:pb-[26px] max-[600px]:pl-2">
        <LocalizedElement as="div" className="h-[380px] rounded-[16px_70px_16px_16px] bg-[url('/images/hero.jpg')] bg-cover bg-position-[85%_center] shadow-[0_15px_30px_#0b3c2010] max-[850px]:h-[360px] max-[600px]:h-[320px] max-[600px]:rounded-tr-[55px] max-[600px]:bg-position-[80%_center]" role="img" labelKey="about.imageAlt">
        </LocalizedElement>
        <div className="absolute right-[-20px] bottom-0 flex max-w-[95%] items-center gap-[17px] rounded-xl border border-[#e7ecd9] bg-white py-[15px] pr-[25px] pl-[15px] shadow-[0_10px_35px_#26462310] max-[850px]:right-[-8px] max-[850px]:gap-2 max-[850px]:p-3 max-[600px]:right-[6px] max-[600px]:gap-3 max-[600px]:px-[18px]">
          <LocalizedImage src="/images/logo.png" altKey="about.logoAlt" width={100} height={100} className="size-[74px] object-contain max-[850px]:size-[55px] max-[600px]:size-[60px]" />
          <Text as="span" className="max-w-[210px] text-xs leading-8 font-semibold text-balance text-forest max-[850px]:text-[10px] max-[600px]:max-w-[185px] max-[600px]:text-[11px] max-[380px]:max-w-[160px]" messageKey="about.partner" />
        </div>
        <span className="absolute top-[-20px] left-[-24px] flex size-[65px] items-center justify-center rounded-full bg-[#e1eccf] max-[600px]:top-[-15px] max-[600px]:left-[-4px] max-[600px]:size-[50px]">
          <Icon name="leaf" className="size-8! -rotate-10 text-green max-[600px]:size-[25px]!" />
        </span>
      </Reveal>
      <Reveal className="min-w-0">
        <Eyebrow copy="about.eyebrow" />
        <Text as="h2" className="whitespace-pre-line leading-[1.8] text-forest max-[850px]:text-[27px] max-[600px]:text-[28px]" messageKey="about.title" />
        <Text as="p" className="mt-[18px] text-sm leading-[2.1] max-[850px]:text-xs max-[600px]:mt-4 max-[600px]:text-[13px]" messageKey="about.description" />
        <Text as="p" className="mt-[18px] text-sm leading-[2.1] max-[850px]:text-xs max-[600px]:mt-4 max-[600px]:text-[13px]" messageKey="about.orderDescription" />
        <TextLink href="#contact">
          <Text as="span" messageKey="about.action" />
        </TextLink>
      </Reveal>
    </Container>
  </section>);
}
