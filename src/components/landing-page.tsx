"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode, } from "react";
import Image from "next/image";
import { products, type ProductId } from "@/data/products";
import { AnimatedLink } from "@/components/animated-action";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/i18n/language-provider";
import Text from "@/i18n/text";
const SiteContext = createContext<ReturnType<typeof useSiteState> | null>(null);
function useSite() {
    const context = useContext(SiteContext);
    if (!context)
        throw new Error("Site components need the SiteContext provider.");
    return context;
}
function useSiteState() {
    const { language } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [productId, setProductId] = useState<ProductId | null>(null);
    const [year, setYear] = useState(2026);
    const headerRef = useRef<HTMLElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);
    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(open => !open);
    const product = products.find(item => item.id === productId);
    const enquiry = product
        ? language === "my"
            ? product.name.my + " လက်ကားမှာယူမှုအတွက် ဆက်သွယ်ရန်"
            : "Enquiring about: " + product.name.en
        : "";
    /* eslint-disable react-hooks/set-state-in-effect -- Read the current year after hydration so server and browser rendering match. */
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 15);
        const onResize = () => { if (window.innerWidth > 850)
            setMenuOpen(false); };
        const onOutsideClick = (event: MouseEvent) => {
            if (!headerRef.current?.contains(event.target as Node))
                setMenuOpen(false);
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                const button = headerRef.current?.querySelector<HTMLButtonElement>(".menu-toggle");
                if (button?.getAttribute("aria-expanded") === "true")
                    button.focus();
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        document.addEventListener("click", onOutsideClick);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("click", onOutsideClick);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);
    useEffect(() => {
        const page = pageRef.current;
        if (!page || !("IntersectionObserver" in window))
            return;
        const revealObserver = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            }
        }, { threshold: 0.08 });
        page.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
        page.classList.add("js-ready");
        const sectionObserver = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting)
                    setActiveSection(entry.target.id);
            }
        }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
        page.querySelectorAll("main section[id]").forEach(element => sectionObserver.observe(element));
        return () => {
            revealObserver.disconnect();
            sectionObserver.disconnect();
            page.classList.remove("js-ready");
        };
    }, []);
    return { menuOpen, toggleMenu, closeMenu, headerRef, pageRef,
        scrolled, activeSection, setProductId, enquiry, year };
}
/* eslint-disable react-hooks/refs -- These ref objects are passed to context and ref props; rendering never reads their .current values. */
export default function LandingPage() {
    const site = useSiteState();
    return (<SiteContext.Provider value={site}>
      <div ref={site.pageRef}>
        <Text as="a" className="skip-link" href="#main" my="အကြောင်းအရာသို့ သွားရန်" en="Skip to content"/>
        <IconLibrary />
        <Header />
        <main id="main">
          <Hero />
          <Products />
          <Values />
          <About />
          <WholesaleCallout />
          <Contact />
        </main>
        <Footer />
        <a className="mobile-call" href="tel:+959123456789" aria-label="Call 09123456789">
          <svg><use href="#phone"/></svg>
        </a>
      </div>
    </SiteContext.Provider>);
}
/* eslint-enable react-hooks/refs */
function Container({ children, className = "" }: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={`page-container mx-auto max-w-[1240px] w-[calc(100%_-_80px)] max-[1101px]:w-[calc(100%_-_48px)] max-[601px]:w-[calc(100%_-_36px)] max-[361px]:w-[calc(100%_-_28px)] ${className}`}>{children}</div>;
}
function ProductCard({ product }: {
    product: (typeof products)[number];
}) {
    const { setProductId } = useSite();
    return (<article className="product-card reveal">
      <div className={product.photoClass} role="img" aria-label={product.imageAlt}>
        <Text className="product-tag" {...product.tag}/>
      </div>
      <div className="product-copy">
        <Text as="h3" {...product.name}/>
        <Text className="english-name" {...product.subtitle}/>
        <Text as="p" {...product.description}/>
        <a href="#contact" data-product={product.id} onClick={() => setProductId(product.id)}>
          <Text my="လက်ကားဈေး မေးမြန်းရန်" en="Enquire for your shop"/>
          <svg><use href="#arrow"/></svg>
        </a>
      </div>
    </article>);
}
function IconLibrary() {
    return (<svg className="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
    <symbol id="leaf" viewBox="0 0 24 24">
    <path d="M20 3c-9 0-15 3-15 9a6 6 0 0 0 6 6c6 0 9-6 9-15Z"/>
    <path d="M4 21 16 9"/>
    </symbol>
    <symbol id="arrow" viewBox="0 0 24 24">
    <path d="M4 12h16m-6-6 6 6-6 6"/>
    </symbol>
    <symbol id="phone" viewBox="0 0 24 24">
    <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c0 3-2 4-4 4C10 20 4 14 3 7c0-2 1-4 4-4Z"/>
    </symbol>
    <symbol id="pin" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="2.5"/>
    </symbol>
    <symbol id="truck" viewBox="0 0 24 24">
    <path d="M2 5h12v13H2zm12 5h4l4 4v4h-8"/>
    <circle cx="6" cy="18" r="2"/>
    <circle cx="18" cy="18" r="2"/>
    </symbol>
    <symbol id="check" viewBox="0 0 24 24">
    <path d="m5 12 4 4L19 6"/>
    </symbol>
    <symbol id="basket" viewBox="0 0 24 24">
    <path d="m4 9 2 11h12l2-11H4Zm4 0 4-7 4 7M9 12v5m6-5v5M2 9h20"/>
    </symbol>
    <symbol id="sun" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>
    </symbol>
    <symbol id="external" viewBox="0 0 24 24">
    <path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/>
    </symbol>
    </defs>
    </svg>);
}
function Header() {
    const { menuOpen, toggleMenu, closeMenu, headerRef, scrolled, activeSection } = useSite();
    return (<header className={`site-header${scrolled ? " scrolled" : ""}`} ref={headerRef}>
    <Container className="header-inner">
    <a className="brand" href="#home" aria-label="သိဒ္ဓိပွဲရုံ home">
    <Image src="/assets/logo.png" width="64" height="64" alt="သိဒ္ဓိပွဲရုံ စိုက်ပျိုးရေး အမှတ်တံဆိပ်"/>
    <span>
    <Text as="strong" my="သိဒ္ဓိပွဲရုံ" en="Theiddhi"/>
    <Text as="small" my="ကုန်စိမ်း လက်ကားရောင်းဝယ်ရေး" en="AGRICULTURAL WHOLESALE"/>
    </span>
    </a>
    <nav id="navigation" aria-label="Main navigation" className={menuOpen ? "open" : ""}>
    <Text as="a" my="မူလစာမျက်နှာ" en="Home" href="#home" className={activeSection === "home" ? "active" : ""} aria-current={activeSection === "home" ? "location" : undefined} onClick={closeMenu}/>
    <Text as="a" my="ကုန်ပစ္စည်းများ" en="Our produce" href="#products" className={activeSection === "products" ? "active" : ""} aria-current={activeSection === "products" ? "location" : undefined} onClick={closeMenu}/>
    <Text as="a" my="ကျွန်ုပ်တို့အကြောင်း" en="Our story" href="#about" className={activeSection === "about" ? "active" : ""} aria-current={activeSection === "about" ? "location" : undefined} onClick={closeMenu}/>
    <Text as="a" my="ဆက်သွယ်ရန်" en="Contact" href="#contact" className={activeSection === "contact" ? "active" : ""} aria-current={activeSection === "contact" ? "location" : undefined} onClick={closeMenu}/>
    </nav>
    <div className="header-actions flex items-center gap-[14px] max-[851px]:ml-auto max-[601px]:gap-[9px] max-[381px]:gap-[7px] max-[361px]:gap-[6px]">
    <LanguageSwitcher />
    <button className="menu-toggle" aria-controls="navigation" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={toggleMenu}>
    <span>

    </span>
    <span>

    </span>
    <span>

    </span>
    </button>
    </div>
    </Container>
    </header>);
}
function Hero() {
    return (<section id="home" className="hero">
    <Image className="hero-image" fill sizes="100vw" src="/assets/hero.jpg" alt="လယ်ယာစိုက်ခင်းနှင့် လတ်ဆတ်သော အာလူး၊ ကြက်သွန်ဖြူ" fetchPriority="high"/>
    <div className="hero-shade">

    </div>
    <Container className="hero-content">
    <p className="eyebrow light">
    <span>

    </span>
    <Text as="span" my="လက်ကားကုန်သည်များနှင့် လက်လီဆိုင်များအတွက်" en="FOR WHOLESALERS & RETAILERS"/>
    </p>
    <h1>
    <Text as="span" my="သိဒ္ဓိပွဲရုံ" en="Good produce."/>
    <Text as="span" my="ကုန်စိမ်းလက်ကား\nရောင်းဝယ်ရေး" en="Rooted in quality." className="hero-subtitle"/>
    </h1>
    <Text as="p" my="လက်ကားကုန်သည်များနှင့် လက်လီအရောင်းဆိုင်များအတွက် အာလူး၊ ကြက်သွန်ဖြူ၊ ချင်းနှင့် ရာသီပေါ်ကုန်စိမ်းများကို တစ်နေရာတည်းတွင် စုံလင်စွာ ရွေးချယ်မှာယူနိုင်ပါသည်။" en="Potatoes, garlic, ginger, and seasonal vegetables for fellow wholesalers and retail shops. Find the produce your business needs in one place." className="hero-description"/>
    <div className="hero-buttons mt-7 flex items-center gap-[14px] max-[601px]:mt-[25px] max-[601px]:flex-wrap max-[601px]:gap-[10px]">
    <AnimatedLink className="button primary" href="#products">
    <svg>
    <use href="#leaf"/>
    </svg>
    <Text as="span" my="ကုန်စိမ်းများ ကြည့်ရှုရန်" en="Explore our produce"/>
    <svg>
    <use href="#arrow"/>
    </svg>
    </AnimatedLink>
    <AnimatedLink className="button glass" href="tel:+959123456789">
    <svg>
    <use href="#phone"/>
    </svg>
    <Text as="span" my="ဆက်သွယ်ရန်" en="Call us"/>
    </AnimatedLink>
    </div>
    <div className="hero-details">
    <span>
    <svg>
    <use href="#pin"/>
    </svg>
    <Text as="span" my="အောင်ပန်း၊ ရှမ်းပြည်နယ်" en="Aungban, Shan State"/>
    </span>
    <span>
    <svg>
    <use href="#basket"/>
    </svg>
    <Text as="span" my="လက်ကား ရောင်းဝယ်ရေး" en="Wholesale produce"/>
    </span>
    </div>
    </Container>
    <svg className="hero-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
    <path fill="#e8efd8" d="M0 20C240 90 400 0 700 20s480 80 740 0v70H0Z"/>
    <path fill="#fafbf4" d="M0 33C240 96 400 15 700 32s480 65 740 0v70H0Z"/>
    </svg>
    </section>);
}
function Products() {
    return (<section id="products" className="products section-pad">
    <Container>
    <div className="section-heading reveal">
    <p className="eyebrow">
    <svg>
    <use href="#leaf"/>
    </svg>
    <Text as="span" my="သင့်ဆိုင်အတွက် ကုန်စိမ်းရွေးချယ်စရာ" en="PRODUCE FOR YOUR BUSINESS"/>
    </p>
    <Text as="h2" my="လက်ကားမှာယူနိုင်သော ကုန်စိမ်းများ" en="Fresh produce for your next order."/>
    <Text as="p" my="ပြန်လည်ရောင်းချရန် လိုအပ်သော ကုန်စိမ်းအမျိုးအစား၊ ပမာဏနှင့် လက်ရှိလက်ကားဈေးနှုန်းများကို ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။" en="Find produce for resale. Contact us about quantities, current availability, and wholesale prices."/>
    </div>
    <div className="product-grid grid grid-cols-4 gap-[18px] max-[1101px]:gap-3 max-[851px]:grid-cols-2 max-[851px]:gap-[18px] max-[601px]:grid-cols-2 max-[601px]:gap-[13px]">
    {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </div>
    <p className="availability-note">
    <span className="status-dot">

    </span>
    <Text as="span" my="လက်ရှိကုန်စိမ်း ရရှိနိုင်မှု၊ မှာယူလိုသည့် ပမာဏနှင့် လက်ကားဈေးနှုန်းများအတွက် ဖုန်းဆက်မေးမြန်းပါ။" en="Call for current stock, order quantities, and wholesale pricing."/>
    </p>
    </Container>
    </section>);
}
function Values() {
    return (<section className="values-section">
    <Container className="values-grid grid grid-cols-4 max-[851px]:grid-cols-2 max-[851px]:gap-y-[25px] max-[601px]:gap-y-6">
    <div className="value reveal">
    <span className="value-icon">
    <svg>
    <use href="#leaf"/>
    </svg>
    </span>
    <Text as="h3" my="လတ်ဆတ်သော ကုန်စိမ်းများ" en="Fresh produce"/>
    <Text as="p" my="သင့်အရောင်းဆိုင်အတွက် နေ့စဉ်လိုအပ်သော ကုန်စိမ်းများ" en="Everyday produce for your shop’s shelves."/>
    </div>
    <div className="value reveal">
    <span className="value-icon">
    <svg>
    <use href="#basket"/>
    </svg>
    </span>
    <Text as="h3" my="ကုန်သည်များအတွက် လက်တွဲဖော်" en="For wholesalers & retailers"/>
    <Text as="p" my="လက်ကားကုန်သည်များနှင့် လက်လီဆိုင်များအတွက်" en="Wholesale enquiries for produce businesses."/>
    </div>
    <div className="value reveal">
    <span className="value-icon">
    <svg>
    <use href="#sun"/>
    </svg>
    </span>
    <Text as="h3" my="ရာသီပေါ်ကုန်စိမ်း စုံလင်မှု" en="Seasonal selection"/>
    <Text as="p" my="ရာသီအလိုက် ရွေးချယ်စရာ ကုန်စိမ်းအမျိုးမျိုး" en="A selection that follows the seasons."/>
    </div>
    <div className="value reveal">
    <span className="value-icon">
    <svg>
    <use href="#pin"/>
    </svg>
    </span>
    <Text as="h3" my="အောင်ပန်းမှ ကြိုဆိုပါတယ်" en="Find us in Aungban"/>
    <Text as="p" my="ပွဲရုံသို့ လာရောက်စုံစမ်းနိုင်ပါသည်" en="Visit us with directions from our map."/>
    </div>
    </Container>
    </section>);
}
function About() {
    return (<section id="about" className="about section-pad">
    <Container className="about-grid grid grid-cols-2 items-center gap-[85px] max-[1101px]:gap-[50px] max-[851px]:gap-[34px] max-[601px]:grid-cols-1 max-[601px]:gap-[31px]">
    <div className="about-visual reveal">
    <div className="about-photo" role="img" aria-label="Produce with a green agricultural landscape">

    </div>
    <div className="about-logo">
    <Image src="/assets/logo.png" alt="သိဒ္ဓိပွဲရုံ emblem" width="100" height="100"/>
    <Text as="span" my="သင့်လုပ်ငန်းအတွက် ကုန်စိမ်းလက်တွဲဖော်" en="Your partner in produce wholesale"/>
    </div>
    <span className="corner-leaf">
    <svg>
    <use href="#leaf"/>
    </svg>
    </span>
    </div>
    <div className="about-copy reveal">
    <p className="eyebrow">
    <span>

    </span>
    <Text as="span" my="ကျွန်ုပ်တို့အကြောင်း" en="OUR ROOTS"/>
    </p>
    <Text as="h2" my="သိဒ္ဓိပွဲရုံ\nကုန်စိမ်းရောင်းဝယ်ရေး" en="A local partner.\nFor your produce business."/>
    <Text as="p" my="ရှမ်းပြည်နယ်၊ အောင်ပန်းမြို့ရှိ သိဒ္ဓိပွဲရုံသည် လက်ကားကုန်သည်များနှင့် လက်လီအရောင်းဆိုင်များအတွက် ကုန်စိမ်းလက်ကား ရောင်းဝယ်ရေး လက်တွဲဖော်ဖြစ်ပါသည်။ အာလူး၊ ကြက်သွန်ဖြူ၊ ချင်းနှင့် ရာသီပေါ်ကုန်စိမ်းများကို စုံစမ်းမှာယူနိုင်ပါသည်။" en="Based in Aungban, Shan State, Theiddhi serves fellow wholesalers and retail shops with potatoes, garlic, ginger, and seasonal vegetables."/>
    <Text as="p" my="သင့်ဆိုင်အတွက် ပုံမှန်ဝယ်ယူရန်ဖြစ်စေ၊ အရေအတွက်များများ မှာယူရန်ဖြစ်စေ လိုအပ်သော ကုန်စိမ်းအမျိုးအစားနှင့် ပမာဏကို ပြောပြပေးပါ။ လက်ရှိရရှိနိုင်မှုနှင့် ဈေးနှုန်းများကို အတူဆွေးနွေးနိုင်ပါသည်။" en="Whether you are planning regular purchases or a larger order for resale, tell us which produce and quantities you need. Let’s discuss current availability and pricing."/>
    <a href="#contact" className="text-link">
    <Text as="span" my="သင့်လုပ်ငန်းအတွက် အတူလက်တွဲကြစို့" en="Let’s grow together"/>
    <svg>
    <use href="#arrow"/>
    </svg>
    </a>
    </div>
    </Container>
    </section>);
}
function WholesaleCallout() {
    return (<section className="harvest-strip">
    <Container className="harvest-inner reveal">
    <span className="harvest-icon">
    <svg>
    <use href="#basket"/>
    </svg>
    </span>
    <div>
    <Text as="h2" my="သင့်ဆိုင်အတွက် ကုန်စိမ်းမှာယူဖို့ အတူဆွေးနွေးကြစို့" en="Let’s plan your next wholesale order."/>
    <Text as="p" my="လိုအပ်သော ကုန်စိမ်းနှင့် ပမာဏကို ပြောပြပြီး လက်ကားဈေးနှုန်းများ မေးမြန်းနိုင်ပါသည်။" en="Tell us what your business needs and ask for current wholesale prices."/>
    </div>
    <AnimatedLink href="tel:+959123456789" className="button cream transform-none!" animation="interaction" tone="forest">
    <svg>
    <use href="#phone"/>
    </svg>
    <span>
    {"09 123 456 789"}
    </span>
    </AnimatedLink>
    </Container>
    </section>);
}
function Contact() {
    const { enquiry } = useSite();
    return (<section id="contact" className="contact section-pad">
    <Container>
    <div className="section-heading reveal">
    <p className="eyebrow">
    <svg>
    <use href="#pin"/>
    </svg>
    <Text as="span" my="အတူလက်တွဲရန် ဆက်သွယ်ပါ" en="LET’S CONNECT"/>
    </p>
    <Text as="h2" my="တည်နေရာနှင့် ဆက်သွယ်ရန်" en="Talk to us about your business."/>
    <Text as="p" my="လက်ကားမှာယူမှုအတွက် ဖုန်းဆက်ဆွေးနွေးနိုင်သလို ပွဲရုံသို့လည်း လာရောက်စုံစမ်းနိုင်ပါသည်။" en="Call us to discuss your wholesale order, or visit our premises in Aungban."/>
    </div>
    <div className="contact-grid grid grid-cols-[.9fr_1.2fr] max-[851px]:grid-cols-2 max-[601px]:grid-cols-1 reveal">
    <div className="contact-info">
    <Text as="h3" my="သိဒ္ဓိပွဲရုံ" en="Theiddhi Wholesale"/>
    <div className="contact-row">
    <span className="contact-icon">
    <svg>
    <use href="#pin"/>
    </svg>
    </span>
    <div>
    <Text as="small" my="တည်နေရာ" en="LOCATION"/>
    <Text as="p" my="အောင်ပန်းမြို့၊ ရှမ်းပြည်နယ်၊ မြန်မာ" en="Aungban, Shan State, Myanmar"/>
    </div>
    </div>
    <div className="contact-row">
    <span className="contact-icon">
    <svg>
    <use href="#phone"/>
    </svg>
    </span>
    <div>
    <Text as="small" my="ဖုန်းနံပါတ်" en="PHONE NUMBER"/>
    <a className="phone-number" href="tel:+959123456789">
    {"09 123 456 789"}
    </a>
    </div>
    </div>
    <p className="enquiry-context" hidden={!enquiry} aria-live="polite">{enquiry}</p>
    <div className="contact-buttons mt-[26px] flex gap-3 max-[851px]:gap-2">
    <AnimatedLink className="button primary transform-none!" href="tel:+959123456789">
    <svg>
    <use href="#phone"/>
    </svg>
    <Text as="span" my="ဖုန်းဆက်ဆွေးနွေးရန်" en="Call us"/>
    </AnimatedLink>
    </div>
    <a className="text-link map-link" href="https://www.google.com/maps/search/?api=1&query=20.68278357223358%2C96.63067319484438" target="_blank" rel="noopener noreferrer">
    <Text as="span" my="Google Maps တွင် လမ်းညွှန်ကြည့်ရန်" en="Get directions on Google Maps"/>
    <svg>
    <use href="#external"/>
    </svg>
    </a>
    </div>
    <div className="map-wrap">
    <iframe title="သိဒ္ဓိပွဲရုံ Google Maps location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.069662311796!2d96.63067319484438!3d20.68278357223358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cebb007656a10d%3A0x3f37c8318be7238f!2z4YCe4YCt4YCS4YC54YCT4YCt4YCV4YC94YCy4YCb4YCv4YC2!5e1!3m2!1sen!2sjp!4v1791789929686!5m2!1sen!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin">

    </iframe>
    </div>
    </div>
    </Container>
    </section>);
}
function Footer() {
    const { year } = useSite();
    return (<footer>
    <Container className="footer-top">
    <a className="brand footer-brand" href="#home">
    <Image src="/assets/logo.png" width="56" height="56" alt="သိဒ္ဓိပွဲရုံ logo"/>
    <span>
    <Text as="strong" my="သိဒ္ဓိပွဲရုံ" en="Theiddhi"/>
    <Text as="small" my="ကုန်စိမ်း လက်ကားရောင်းဝယ်ရေး" en="AGRICULTURAL WHOLESALE"/>
    </span>
    </a>
    <nav aria-label="Footer navigation">
    <Text as="a" my="ကုန်ပစ္စည်းများ" en="Produce" href="#products"/>
    <Text as="a" my="ကျွန်ုပ်တို့အကြောင်း" en="Our story" href="#about"/>
    <Text as="a" my="ဆက်သွယ်ရန်" en="Contact" href="#contact"/>
    </nav>
    <a className="footer-location" href="#contact">
    <svg>
    <use href="#pin"/>
    </svg>
    <Text as="span" my="အောင်ပန်း၊ ရှမ်းပြည်နယ်" en="Aungban, Shan State"/>
    </a>
    </Container>
    <Container className="footer-bottom">
    <span>
    {"© "}
    <span id="year">{year}</span>
    <Text as="span" my="သိဒ္ဓိပွဲရုံ။ မူပိုင်ခွင့်အားလုံး ရယူထားသည်။" en="Theiddhi Wholesale. All rights reserved."/>
    </span>
    <span className="footer-signoff">
    <svg>
    <use href="#leaf"/>
    </svg>
    <Text as="span" my="သင့်လုပ်ငန်းအတွက် ကုန်စိမ်းလက်တွဲဖော်" en="Together in the produce trade."/>
    </span>
    </Container>
    </footer>);
}
