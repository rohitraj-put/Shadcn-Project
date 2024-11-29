import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Offers() {
  const ArrayData = [
    "https://fps.cdnpk.net/images/ai/image-generator/how-to/image-generator-freepik-4.webp?w=1080&h=1920&q=90",
    "https://fps.cdnpk.net/images/ai/image-generator/how-to/image-generator-freepik-4.webp?w=1080&h=1920&q=90",
    "https://fps.cdnpk.net/images/ai/image-generator/how-to/image-generator-freepik-4.webp?w=1080&h=1920&q=90",
    "https://fps.cdnpk.net/images/ai/image-generator/how-to/image-generator-freepik-4.webp?w=1080&h=1920&q=90",
    "https://fps.cdnpk.net/images/ai/image-generator/how-to/image-generator-freepik-4.webp?w=1080&h=1920&q=90",
  ];
  return (
    <section className=" text-gray-100 mt-8">
      <div className=" flex flex-col mx-auto lg:flex-row items-center">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5  text-gray-900">
          <div className="flex space-x-2 sm:space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-2xl font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-2xl font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-2xl font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5 ">
          <div className="flex items-center justify-center md:p-8 lg:p-12">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {ArrayData.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="">
                      <img
                        src={item}
                        alt={index + 1}
                        className="rounded-xl w-[450px] h-[450px] object-cover"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gray-200 text-gray-800" />
              <CarouselNext className="bg-gray-200 text-gray-800" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
