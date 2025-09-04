
// import { Hero } from "@components";

"use client";

import Hero from "@components/Hero";
import SearchBar from "@components/SearchBar";
import ShowCars from "@components/ShowCars";

export default async function Home() { 
    
  return (
    <div className='overflow-hidden'>
      <Hero />
      <SearchBar />
      <ShowCars />
    </div>
  );
}
