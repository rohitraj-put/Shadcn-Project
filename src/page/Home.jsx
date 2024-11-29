import React from "react";
import Carousel from "@/layout/Carousel";
import { Slider } from "@/layout/Slider";
import { ProductSlider } from "@/layout/ProductSlider";
import Product from "@/layout/Product";
import Header from "@/layout/Header";
import { Trusted } from "@/layout/Trusted";
import Image from "@/layout/Image";
import Offers from "@/layout/Offers";
import ProductDetails from "@/layout/ProductDetails";

function Home() {
  return (
    <>
      <Carousel />
      <Trusted />
      <ProductDetails />
      <ProductSlider />
      <Image />
      <Offers />
    </>
  );
}

export default Home;
