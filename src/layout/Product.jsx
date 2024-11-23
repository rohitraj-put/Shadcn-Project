import React from "react";
import Data from "@/data/Data";
export default function Product() {
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
      <div className="relative w-full min-h-screen flex flex-wrap gap-4 items-center cursor-pointer justify-center my-8 p-4">
        {Data.map((item, index) => (
          <div
            className="max-w-[290px]  bg-white shadow-lg rounded-xl"
            key={index}
          >
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-white hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <img
                    src={item.img}
                    alt="Just a flower"
                    className="w-full object-cover aspect-[3/2]"
                  />
                </div>
                <div className="flex-auto justify-evenly p-4">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-auto cursor-pointer text-gray-800 hover:text-purple-500 truncate ">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                      </h2>
                      <div className="flex items-center bg-green-400 text-gray-800 text-xs px-2 py-1 ml-3 rounded-lg">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-gray-800 font-semibold mt-2">
                    $240.00
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-between mt-2">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-rose-400 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-rose-500">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-rose-400 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-rose-500">
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
