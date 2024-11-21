import React from "react";
import Video1 from "../assets/Video/thegoodroad.mp4";
import { Button } from "@/components/ui/button";

function Carousel() {
  return (
    <div className="w-full h-[83vh] max-md:h-[50vh] relative -z-10 ">
      <video className="w-full h-full object-cover" loop muted autoPlay>
        <source src={Video1} />
      </video>
      <div className="absolute top-48 max-md:top-24 max-md:left-16 left-40 text-[#fae6e1] text-center">
        <h2 className="text-3xl">PREMIUM GIFT HAMPERS</h2>
        <p>PERSONALISED WITH LOVE</p>
        <Button className=" bg-white text-red-500 mt-4 hover:bg-rose-500 hover:text-white">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
