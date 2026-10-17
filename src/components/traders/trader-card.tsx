import type { Trader } from "@/data/traders";
import Text from "@/i18n/text";
import TraderAvatar from "./trader-avatar";

export default function TraderCard({ trader, index = 0 }: { trader: Trader; index?: number }) {
  return (
    <figure className="m-0 min-w-0 rounded-[14px] border border-[#cbded6] bg-white p-[30px] transition-colors duration-250 [@media(hover:hover)]:hover:border-green max-[850px]:p-[22px] max-[600px]:p-[26px]">
      <blockquote className="m-0 mb-7 text-[19px] font-medium leading-[1.65] text-[#28372f] wrap-anywhere before:content-['“'] after:content-['”'] max-[850px]:text-base max-[600px]:mb-6 max-[600px]:text-lg">
        <Text messageKey={trader.quote} />
      </blockquote>
      <figcaption className="flex items-start gap-[14px] text-start max-[850px]:gap-2.5">
        <TraderAvatar variant={trader.avatar} tone={index} />
        <span>
          <Text className="block text-[13px] leading-[1.7] text-green max-[850px]:text-xs max-[600px]:text-[13px]" messageKey={trader.role} />
          <Text className="block text-xs font-medium leading-[1.6] text-[#28372f] max-[850px]:text-[11px] max-[600px]:text-xs" messageKey={trader.name} />
          <Text className="mt-[3px] block text-[10.5px] leading-[1.8] text-black" messageKey={trader.city} />
        </span>
      </figcaption>
    </figure>
  );
}
