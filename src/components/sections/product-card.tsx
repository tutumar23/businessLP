"use client";

import type { CSSProperties } from "react";
import type { Product } from "@/data/products";
import { useLanguage } from "@/i18n/language-provider";
import Text from "@/i18n/text";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { language, t } = useLanguage();
  const seasonal = product.id === "seasonal";
  const offsets = { "--card-offset": `${index * 6}px`, "--desktop-offset": `${index * 8}px` } as CSSProperties;

  return (
    <article id={`product-panel-${product.id}`} aria-labelledby={`produce-${product.id}`} style={offsets}
      className={`group/product sticky top-[calc(104px_+_var(--card-offset))] grid min-w-0 grid-cols-[.95fr_1.05fr] overflow-x-hidden overflow-y-auto rounded-[28px] border p-3 shadow-[0_2px_4px_#163e2703,0_16px_40px_-20px_#163e2724] scroll-mt-[124px] [scrollbar-width:thin] max-[1023px]:max-h-[calc(100svh_-_104px_-_var(--card-offset)_-_12px)] min-[1024px]:top-[calc(120px_+_var(--desktop-offset))] min-[1024px]:h-[460px] min-[1024px]:min-h-[440px] min-[1024px]:grid-cols-[.88fr_1.12fr] min-[701px]:even:grid-cols-[1.05fr_.95fr] min-[1024px]:even:grid-cols-[1.12fr_.88fr] max-[700px]:top-[calc(94px_+_var(--card-offset))] max-[700px]:max-h-[calc(100svh_-_94px_-_var(--card-offset)_-_12px)] max-[700px]:grid-cols-1 max-[700px]:rounded-[22px] max-[700px]:p-2 max-[600px]:top-[calc(84px_+_var(--card-offset))] max-[600px]:max-h-[calc(100svh_-_84px_-_var(--card-offset)_-_12px)] [@media(min-width:1024px)_and_(max-height:650px)]:top-[108px] [@media(min-width:1024px)_and_(max-height:650px)]:h-auto [@media(min-width:1024px)_and_(max-height:650px)]:min-h-[380px] ${seasonal ? "border-[#d4dfc8] bg-linear-[135deg,#fbfdf7,#edf3e4]" : "border-line bg-linear-[135deg,#fff,#fcfdf8]"}`}>
      <div role="img" aria-label={t(product.imageAlt)}
        style={{ backgroundImage: `url('${product.image}')`, backgroundPosition: product.imagePosition, backgroundSize: product.imageSize }}
        className="min-h-[380px] rounded-[18px] bg-no-repeat min-[701px]:group-even/product:col-start-2 min-[701px]:group-even/product:row-start-1 min-[1024px]:min-h-[220px] min-[1024px]:self-stretch max-[1023px]:min-h-[360px] max-[700px]:h-[clamp(140px,25svh,210px)] max-[700px]:min-h-0 max-[700px]:rounded-[15px]" />
      <div className="flex min-w-0 flex-col items-start justify-center px-9 py-7 min-[701px]:group-even/product:col-start-1 min-[701px]:group-even/product:row-start-1 max-[1023px]:p-7 max-[700px]:px-4 max-[700px]:pt-[22px] max-[700px]:pb-[18px] [@media(min-width:1024px)_and_(max-height:650px)]:px-8 [@media(min-width:1024px)_and_(max-height:650px)]:py-6">
        <Text as="h3" id={`produce-${product.id}`} messageKey={product.name}
          className={`text-[clamp(30px,2.8vw,40px)] font-semibold leading-[1.55] tracking-[-.8px] text-forest max-[1023px]:text-[32px] max-[700px]:text-[29px] [@media(min-width:1024px)_and_(max-height:650px)]:text-[32px] ${seasonal ? "[html[lang=my]_&]:whitespace-nowrap [html[lang=my]_&]:text-[clamp(24px,2.6vw,34px)] [html[lang=my]_&]:max-[700px]:text-[clamp(19px,6vw,25px)] [html[lang=my]_&]:max-[700px]:tracking-[-.5px]" : ""}`} />
        {language === "en" && <Text className="mt-1 block text-sm leading-[1.8] text-[#7a876c] max-[700px]:text-xs" messageKey={product.subtitle} />}
        <Text as="p" className="mt-4 max-w-[44ch] text-sm leading-8 text-[#687564] max-[700px]:mt-[14px] max-[700px]:text-[13px] [@media(min-width:1024px)_and_(max-height:650px)]:mt-2.5 [@media(min-width:1024px)_and_(max-height:650px)]:text-[13px]" messageKey={product.description} />
      </div>
    </article>
  );
}
