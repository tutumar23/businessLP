import Image from "next/image";
import Icon from "@/components/ui/icon";
import { wholesaleBusinesses } from "@/data/trading-businesses";
import Text from "@/i18n/text";

function BusinessGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="m-0 flex w-max shrink-0 list-none items-center gap-0 py-2.5 max-[600px]:py-1 motion-reduce:w-auto motion-reduce:min-w-0 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:gap-2.5 motion-reduce:px-5 motion-reduce:py-3 motion-reduce:aria-hidden:hidden">
      {Array.from({ length: 3 }, () => wholesaleBusinesses).flat().map((business, index) => (
        <li key={`${business}-${index}`} aria-hidden={index >= wholesaleBusinesses.length || undefined}
          className="flex shrink-0 items-center px-7 py-1.5 text-[17px] font-medium leading-[1.9] whitespace-nowrap text-ink after:ml-14 after:block after:h-[18px] after:w-px after:bg-line after:content-[''] max-[850px]:px-[18px] max-[850px]:text-[15px] max-[850px]:after:ml-9 motion-reduce:text-sm motion-reduce:whitespace-normal motion-reduce:aria-hidden:hidden">
          <Text messageKey={business} />
        </li>
      ))}
    </ul>
  );
}

export default function TradingStrip() {
  return (
    <section aria-labelledby="trading-strip-heading" className="relative isolate mb-[clamp(24px,3vw,40px)] w-full overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
        <Image src="/svg/market-potato.svg" alt="" width={166} height={125} className="absolute top-[-6px] right-[calc(11%_+_100px)] h-[125px] w-[166px] -rotate-18 opacity-20 max-[850px]:right-[calc(5%_+_90px)] max-[850px]:opacity-10" />
        <Image src="/svg/market-garlic.svg" alt="" width={104} height={125} className="absolute right-[11%] bottom-[-8px] h-[125px] w-[104px] rotate-12 opacity-20 max-[850px]:right-[5%] max-[850px]:bottom-[-12px] max-[850px]:opacity-10" />
      </div>
      <div className="grid w-full grid-cols-[260px_minmax(0,1fr)] items-center py-[30px] pl-[max(76px,calc((100%_-_1240px)/2_+_36px))] max-[1101px]:pl-[60px] max-[850px]:grid-cols-[224px_minmax(0,1fr)] max-[850px]:pl-[52px] max-[600px]:grid-cols-[minmax(0,1fr)] max-[600px]:gap-[18px] max-[600px]:px-0 max-[600px]:py-6">
        <div className="flex items-center gap-[14px] border-r border-line pr-6 max-[850px]:gap-[11px] max-[850px]:pr-4 max-[600px]:border-0 max-[600px]:px-9">
          <span className="grid size-[46px] shrink-0 place-items-center rounded-[14px] border border-line bg-white text-forest max-[850px]:size-[42px] max-[850px]:rounded-[13px] max-[600px]:size-[38px] max-[600px]:rounded-xl"><Icon name="store" className="size-[23px]! max-[600px]:size-[21px]!" /></span>
          <Text as="h2" id="trading-strip-heading" className="text-[15px] font-semibold leading-[1.9] tracking-normal text-forest max-[850px]:text-[13px] max-[600px]:text-sm" messageKey="trading.title" />
        </div>
        <div className="min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_40px,#000_calc(100%_-_40px),transparent)] max-[600px]:[mask-image:linear-gradient(90deg,transparent,#000_20px,#000_calc(100%_-_24px),transparent)] motion-reduce:mask-none">
          <div className="flex w-max animate-trading-scroll motion-reduce:w-auto motion-reduce:animate-none">
            <BusinessGroup /><BusinessGroup duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
