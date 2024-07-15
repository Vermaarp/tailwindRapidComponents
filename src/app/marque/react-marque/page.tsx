import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function reactMarque() {
  return (
    <Marquee className="bg-green-600 py-4 lg:py-8" autoFill>
      <img
        src="Ima"
        alt="logo-3"
        className="px-8 lg:px-12 lg:w-[11rem]"
      />

 
    </Marquee>
  );
}