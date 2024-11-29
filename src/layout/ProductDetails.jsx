import React from "react";
import Data from "@/data/Data";
import Product from "./Product";

function ProductDetails() {
  return (
    <>
      <div className="font-bold tracking-tight text-center py-8">
        <h2 className=" uppercase text-rose-500 text-3xl ">
          Customer also purchesed
        </h2>
        <p className="uppercase">
          Standout Curated Gift Boxes. Stress-Free Experience.
        </p>
      </div>
      <div className="w-full min-h-screen flex flex-wrap gap-4 items-center cursor-pointer justify-center my-8">
        {Data.map((item, index) => (
          <Product item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
