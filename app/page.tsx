import Image from "next/image";
import Hero1 from "@/public/img/hero1.jpg";
import { Galindo } from "next/font/google";
import SearchBar from "./ui/home/search-bar";


const galindo = Galindo({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin']
 });

export default function Home() {
  return (
    <div id="hero" className="relative">
      <div className={`heroContent absolute z-10 top-56 left-36 text-neutral-50 text-8xl text-shadow ${galindo.className}`}>
        <div className="line1">Kuliner Lokal,</div>
        <div className="line2">Rating Global!</div>
      </div>
      <SearchBar />
      <Image 
        src={Hero1}
        alt="Traditional Restaurant"
        objectFit="cover"
        className="contrast-75"
      />
    </div>
  );
}
