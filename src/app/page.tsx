import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Dashboard" />
      <section className="w-full grid grid-cols-1 gap-3 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            discription={d.discription}
          />
        ))}
      </section>
      <section>
        <CardContent>
          <p>Overview</p>
        </CardContent>
      </section>
    </div>
  );
}
