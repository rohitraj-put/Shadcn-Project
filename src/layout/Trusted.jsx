import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Trusted() {
  const Trust = [
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_15.png?height=200&v=1702046328&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_2_d4c56503-2532-4875-b3aa-ccae079313f5.png?height=200&v=1701631057&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Inshorts_Logo_Black.png?height=200&v=1701630674&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_16.png?height=200&v=1702046378&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_9.png?height=200&v=1702046109&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_8.png?height=200&v=1702046105&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_19.png?height=200&v=1702046623&width=375",
    "https://www.thegoodroad.in/cdn/shop/files/Untitled_design_18.png?height=200&v=1702046545&width=375",
    "https://cdn.shopify.com/s/files/1/0474/5809/1161/files/JLL.png?v=1721504024&height=200&v=1702046545&width=375",
    "https://cdn.shopify.com/s/files/1/0474/5809/1161/files/Aditya_Birla.png?v=1721504023&height=200&v=1702046545&width=375",
    "https://cdn.shopify.com/s/files/1/0474/5809/1161/files/Teleperformance_1c8f5b59-4d7b-4a3b-a973-9774713278b6.png?v=1721504023&height=200&v=1702046545&width=375",
  ];
  return (
    <Carousel className="w-[90%] mx-auto">
      <div className="py-12">
        <h2 className="text-3xl font-bold tracking-tight  text-center  uppercase text-rose-500">
          Trusted By
        </h2>
        <p className="font-bold uppercase text-center">
          Explore our custom bridesmaid gift hampers today and make the journey.
        </p>
      </div>

      <CarouselContent className="-ml-1">
        {Trust.map((item, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card>
                <img src={item} alt={index + 1} className="aspect-auto" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
