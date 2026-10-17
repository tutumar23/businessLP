import CurrentYear from "@/components/ui/current-year";
import Brand from "@/components/ui/brand";
import Container from "@/components/ui/container";
import Icon from "@/components/ui/icon";
import { navigation } from "@/data/site";
import Text from "@/i18n/text";
import LocalizedElement from "@/i18n/localized-element";

export default function Footer() {
  return (
    <footer className="bg-deep pt-[30px] pb-4 text-[#e6eedc]">
      <Container className="flex items-center justify-between gap-[30px] max-[1100px]:gap-5 max-[850px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-[22px] max-[600px]:text-center">
        <div className="max-[600px]:mr-auto"><Brand footer /></div>
        <LocalizedElement as="nav" labelKey="footer.navigationLabel" className="flex gap-[25px] text-[11px] max-[1100px]:gap-[15px] max-[850px]:ml-auto max-[600px]:m-0 max-[600px]:w-full max-[600px]:justify-center max-[600px]:gap-[23px]">
          {navigation.filter(item => ["about", "products", "contact"].includes(item.id)).map(({ id, label }) => (
            <Text as="a" key={id} messageKey={id === "products" ? "footer.produce" : label} href={`#${id}`} className="hover:text-white" />
          ))}
        </LocalizedElement>
        <a href="#contact" className="flex items-center gap-1.5 text-[11px] hover:text-white max-[850px]:w-full max-[850px]:justify-end max-[600px]:justify-center max-[600px]:text-[10px]">
          <Icon name="pin" className="size-[17px]!" /><Text messageKey="common.location" />
        </a>
      </Container>
      <Container className="mt-[25px] flex items-center justify-between border-t border-[#ffffff17] pt-[17px] text-[10px] text-[#adc1ad] max-[600px]:mt-[22px] max-[600px]:flex-col max-[600px]:gap-[9px] max-[600px]:text-center max-[600px]:text-[9px]">
        <span>© <CurrentYear initialYear={new Date().getFullYear()} /> <Text messageKey="footer.copyright" /></span>
        <span className="flex items-center gap-1.5"><Icon name="leaf" className="size-[15px]!" /><Text messageKey="footer.signoff" /></span>
      </Container>
    </footer>
  );
}
