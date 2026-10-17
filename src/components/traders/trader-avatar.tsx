import Icon from "@/components/ui/icon";

export default function TraderAvatar({ variant, tone = 0 }: { variant: "woman" | "man"; tone?: number }) {
  const colors = ["bg-[#eaf0df] text-forest", "bg-[#eee7db] text-[#766046]", "bg-[#e1ecea] text-[#326861]"];
  return <span aria-hidden="true" className={`grid size-[46px] shrink-0 place-items-center rounded-full max-[850px]:size-[38px] max-[600px]:size-[46px] ${colors[tone % colors.length]}`}><Icon name={`avatar-${variant}`} className="size-[30px]!" /></span>;
}
