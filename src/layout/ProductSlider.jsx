import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductSlider() {
  const CardData = [
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/S_P_2314_e5a252f8-d297-4f6b-8fdb-ecca1b00752d.jpg?v=1702073808&width=1080",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/S_P_1381.jpg?v=1702074036&width=1080",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/S_P_4913.jpg?v=1702073863&width=1080",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/ARY_3826.jpg?v=1702045484&width=990",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/da33a15d-d6ed-4d90-8f51-00ca886aa50f.jpg?v=1702045310&width=990",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/IMG_9075.jpg?v=1702045356&width=990",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/IMG_5035.jpg?v=1702045348&width=990",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/S_P_2314_e5a252f8-d297-4f6b-8fdb-ecca1b00752d.jpg?v=1702073808&width=1080",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/ARY_3691.jpg?v=1702044804&width=940",
      contant: "Birthday Presents",
    },
    {
      imgsrc:
        "https://www.thegoodroad.in/cdn/shop/files/IMG_4971_jpg.jpg?v=1702044268&width=940",
      contant: "Birthday Presents",
    },
  ];
  return (
    <>
      <div className="font-bold tracking-tight text-center">
        <h2 className=" uppercase text-rose-500 text-3xl ">
          Corporate Gifting
        </h2>
        <p className="uppercase">
          Standout Curated Gift Boxes. Stress-Free Experience.
        </p>
      </div>
      <Carousel className="w-[90%] m-auto my-16">
        <CarouselContent className="-ml-1">
          {CardData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 "
            >
              <div className="p-1 ">
                <Card>
                  <img
                    src={item.imgsrc}
                    alt={index + 1}
                    className=" aspect-[2/3] object-cover"
                  />
                </Card>
                <CardContent className="text-lg font-bold absolute bottom-0 w-full text-white uppercase">
                  {item.contant}
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
