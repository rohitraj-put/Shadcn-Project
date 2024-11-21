import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
  const imageUrls = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_1x._CB597740150_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/BAU/Hero/Oct/V1/Modern-wall-clocks-PC-3000x1200._CB542833767_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent className="mt-1 h-[350px]">
        {imageUrls.map((url, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1 relative">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  {/* Display the image */}
                  <img
                    src={url}
                    alt={`Carousel Item ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="w-12 h-12 text-white absolute top-10 left-10 bg-rose-400 text-center pt-1 rounded-full font-bold text-3xl">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
