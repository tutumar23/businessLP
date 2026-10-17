import { AnimatedLink } from "@/components/animated-action";
import Container from "@/components/ui/container";
import Icon from "@/components/ui/icon";
import { contact } from "@/data/site";
import Text from "@/i18n/text";

export default function WholesaleCallout() {
  return (<section className="relative overflow-hidden bg-forest text-white after:pointer-events-none after:absolute after:top-[-100px] after:right-[-100px] after:size-[370px] after:rounded-full after:border after:border-[#ffffff12] after:content-['']">
    <Container className="relative z-1 flex items-center gap-[25px] py-9 max-[850px]:flex-wrap max-[850px]:gap-[18px] max-[600px]:gap-[15px] max-[600px]:py-[29px]">
      <span className="flex size-[66px] shrink-0 items-center justify-center rounded-full border border-[#ffffff18] bg-[#ffffff12] max-[850px]:size-[50px]">
        <Icon name="basket" className="size-8!" />
      </span>
      <div className="max-[850px]:flex-1 max-[600px]:min-w-[calc(100%_-_70px)]">
        <Text as="h2" className="text-[23px] leading-[1.8] tracking-normal max-[1100px]:text-xl max-[850px]:text-[19px] max-[600px]:text-lg" messageKey="wholesale.title" />
        <Text as="p" className="mt-[3px] text-[13px] text-[#d5e5c9] max-[600px]:mt-[7px] max-[600px]:text-[11px]" messageKey="wholesale.description" />
      </div>
      <AnimatedLink href={`tel:${contact.phone}`} variant="cream" className="ml-auto hover:translate-y-0 max-[850px]:ml-[68px] max-[600px]:ml-[65px] max-[600px]:min-h-12" animation="interaction" tone="forest">
        <Icon name="phone" />
        <span>
          {contact.phoneLabel}
        </span>
      </AnimatedLink>
    </Container>
  </section>);
}
