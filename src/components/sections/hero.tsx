import Image from "next/image";
import LocalizedImage from "@/i18n/localized-image";
import { AnimatedLink } from "@/components/animated-action";
import Container from "@/components/ui/container";
import Icon from "@/components/ui/icon";
import Eyebrow from "@/components/ui/eyebrow";
import { contact } from "@/data/site";
import Text from "@/i18n/text";

export default function Hero() {
  return (<section id="home" className="relative isolate flex min-h-[635px] items-center overflow-hidden bg-[#234b2c] min-[1500px]:min-h-[720px] max-[1100px]:min-h-[610px] max-[850px]:min-h-[590px] max-[600px]:min-h-[660px] max-[600px]:items-start">
    <LocalizedImage className="absolute -z-3 size-full object-cover object-[center_57%] animate-hero-settle min-[1500px]:object-[center_58%] max-[600px]:object-[68%_center]" fill sizes="100vw" src="/images/hero.jpg" altKey="hero.imageAlt" fetchPriority="high" />
    <div className="absolute inset-0 -z-2 bg-[linear-gradient(90deg,#072315c2,#0723158c_35%,#0723151f_65%,#07231508),linear-gradient(0deg,#18372644,transparent_80%)] max-[850px]:bg-[linear-gradient(90deg,#092d20cc,#092d2085_50%,#092d2035)] max-[600px]:bg-[linear-gradient(90deg,#0a2d20bf,#0a2d2060),linear-gradient(0deg,#0b2c2055,transparent)]">
    </div>
    <Container className="pt-16 pb-[88px] animate-hero-enter min-[1500px]:pt-20 min-[1500px]:pb-[100px] max-[600px]:pt-[54px] max-[600px]:pb-[86px]">
      <Eyebrow light copy="hero.eyebrow" className="mb-[18px] max-[600px]:mb-[21px] max-[600px]:gap-[7px] max-[600px]:tracking-[.3px]" />
      <h1 className="max-w-[640px] text-[clamp(42px,5.2vw,72px)] leading-[1.55] tracking-[-1.5px] text-white [text-shadow:0_2px_20px_#0002] max-[850px]:text-[56px] max-[600px]:text-[46px] max-[600px]:leading-[1.6] max-[600px]:tracking-[-.7px] max-[360px]:text-[40px]">
        <Text as="span" className="block" messageKey="hero.title" />
        <Text as="span" messageKey="hero.subtitle" className="block whitespace-pre-line text-[clamp(29px,3.1vw,43px)] leading-[1.7] tracking-[-.5px] max-[850px]:text-[35px] max-[600px]:max-w-[340px] max-[600px]:text-[30px] max-[600px]:leading-[1.85] max-[360px]:text-[27px]" />
      </h1>
      <Text as="p" messageKey="hero.description" className="mt-[18px] max-w-[490px] text-[15px] leading-[2.05] text-[#eff2e7] max-[850px]:max-w-[440px] max-[600px]:mt-[19px] max-[600px]:max-w-[355px] max-[600px]:text-[13px] max-[600px]:leading-[2.1]" />
      <div className="mt-7 flex items-center gap-[14px] max-[600px]:mt-[25px] max-[600px]:flex-wrap max-[600px]:gap-[10px]">
        <AnimatedLink className="max-[600px]:min-h-[50px] max-[600px]:gap-[7px] max-[600px]:px-[14px] max-[600px]:py-3 max-[600px]:text-xs max-[360px]:px-3 max-[360px]:text-[11px]" href="#products">
          <Icon name="leaf" />
          <Text as="span" messageKey="hero.explore" />
          <Icon name="arrow" />
        </AnimatedLink>
        <AnimatedLink variant="glass" className="max-[600px]:min-h-[50px] max-[600px]:gap-[7px] max-[600px]:px-[14px] max-[600px]:py-3 max-[600px]:text-xs" href={`tel:${contact.phone}`}>
          <Icon name="phone" />
          <Text as="span" messageKey="hero.callUs" />
        </AnimatedLink>
      </div>
      <div className="mt-[29px] flex gap-[26px] text-[11px] text-[#f5f5eb] max-[600px]:mt-[27px] max-[600px]:flex-wrap max-[600px]:gap-[14px] max-[600px]:text-[10px] [&>span]:flex [&>span]:items-center [&>span]:gap-2">
        <span>
          <Icon name="pin" className="size-5! text-[#d7ecba] max-[600px]:size-[17px]!" />
          <Text as="span" messageKey="common.location" />
        </span>
        <span>
          <Icon name="basket" className="size-5! text-[#d7ecba] max-[600px]:size-[17px]!" />
          <Text as="span" messageKey="hero.wholesale" />
        </span>
      </div>
    </Container>
    <Image src="/svg/hero-wave.svg" alt="" aria-hidden="true" width={1440} height={70} className="absolute bottom-[-1px] left-0 h-[47px] w-full max-[600px]:h-8" />
  </section>);
}
