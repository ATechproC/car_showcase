
// import { Hero } from "@components";

"use client";

import CardContainer from "@components/CardContainer";
import Hero from "@components/Hero";
import Top from "@components/Top";

export default async function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <CardContainer />
    </div>
  );
}
