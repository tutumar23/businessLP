import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import { products } from "@/data/products";
import Text from "@/i18n/text";
import ProductCard from "./product-card";

export default function Products() {
  return (
    <section id="products" className="relative bg-linear-to-r from-[#f0f5e8] to-[#e1ebd7] pt-[clamp(32px,3.5vw,56px)] pb-[82px] max-[850px]:pb-16 max-[600px]:pb-12">
      <Container className="max-[700px]:w-[calc(100%_-_32px)]!">
        <Reveal className="mb-9 grid grid-cols-[1.35fr_1fr] items-end gap-x-16 text-left max-[700px]:mb-6 max-[700px]:grid-cols-1 max-[700px]:gap-3">
          <Eyebrow icon="leaf" copy="products.eyebrow" className="col-span-full mb-[14px] max-[700px]:mb-0" />
          <Text as="h2" messageKey="products.title"
            className="max-w-[580px] text-[clamp(28px,3vw,42px)] leading-[1.5] tracking-[-1px] max-[700px]:text-[29px] max-[700px]:leading-[1.6] [html[lang=my]_&]:col-span-full [html[lang=my]_&]:max-w-none [html[lang=my]_&]:text-[clamp(16px,4.6vw,42px)] [html[lang=my]_&]:tracking-[-.4px] [html[lang=my]_&]:whitespace-nowrap" />
          <Text as="p" messageKey="products.description"
            className="mb-1 max-w-[410px] text-sm leading-[1.9] max-[700px]:text-[13px] [html[lang=my]_&]:col-span-full [html[lang=my]_&]:mt-2.5 [html[lang=my]_&]:max-w-[720px]" />
        </Reveal>
        <div className="relative isolate grid gap-4">
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
        <p className="mt-7 flex items-center gap-2.5 text-xs max-[700px]:text-[10px] max-[600px]:mt-[22px] max-[600px]:items-start">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-green max-[600px]:mt-1.5" />
          <Text messageKey="products.availability" />
        </p>
      </Container>
    </section>
  );
}
