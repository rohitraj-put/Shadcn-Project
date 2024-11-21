import React from "react";
import Carousel from "@/layout/Carousel";
import { Slider } from "@/layout/Slider";
import { ProductSlider } from "@/layout/ProductSlider";
import Product from "@/layout/Product";
import Header from "@/layout/Header";

function Home() {
  return (
    <>
      <Carousel />
      <Slider />
      <Product />
      <ProductSlider />
    </>
  );
}

export default Home;
