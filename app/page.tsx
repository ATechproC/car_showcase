import CardContainer from "@components/CardContainer";
import Hero from "@components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CardContainer />
    </div>
  );
}
