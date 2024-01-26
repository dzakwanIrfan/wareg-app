import Image from "next/image";
import Hero1 from "@/public/img/hero1.jpg";

export default function Home() {
  return (
    <div id="hero" className="">
      <div className="heroContent"></div>
      <div className="heroShadow w-full h-dvh"></div>
      <Image 
        src={Hero1}
        alt="Traditional Restaurant"
        objectFit="cover"
      />
    </div>
  );
}
