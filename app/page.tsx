
// import { Hero } from "@components";

import Hero from "@components/Hero";
import SearchBar from "@components/SearchBar";

export default async function Home() {


  return (
    <div className='overflow-hidden'>
      <Hero />
      <SearchBar />
    </div>
  );
}
