import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MobileCall from "@/components/layout/mobile-call";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Values from "@/components/sections/values";
import WholesaleCallout from "@/components/sections/wholesale-callout";
import Traders from "@/components/traders";
import TradingStrip from "@/components/trading-strip";
import Text from "@/i18n/text";

export default function LandingPage() {
  return (
    <>
      <Text as="a" href="#main" messageKey="common.skipToContent" className="fixed top-[-100px] left-4 z-100 bg-white p-3 focus:top-3" />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <TradingStrip />
        <Products />
        <Values />
        <Traders />
        <WholesaleCallout />
        <Contact />
      </main>
      <Footer />
      <MobileCall />
    </>
  );
}
