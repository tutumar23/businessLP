import Container from "@/components/ui/container";
import ValueCard, { type ValueCardProps } from "./value-card";

const values: ValueCardProps[] = [
  { icon: "leaf", title: "values.fresh.title", description: "values.fresh.description" },
  { icon: "basket", title: "values.traders.title", description: "values.traders.description" },
  { icon: "sun", title: "values.seasonal.title", description: "values.seasonal.description" },
  { icon: "pin", title: "values.location.title", description: "values.location.description" },
];

export default function Values() {
  return (
    <section className="border-y border-[#dee8d5] bg-sage py-[37px] max-[600px]:py-7">
      <Container className="grid grid-cols-4 max-[850px]:grid-cols-2 max-[850px]:gap-y-[25px] max-[600px]:gap-y-6">
        {values.map(value => <ValueCard key={value.icon} {...value} />)}
      </Container>
    </section>
  );
}
