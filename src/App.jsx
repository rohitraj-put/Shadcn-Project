import React from "react";
import "./App.css";
import Head from "./layout/Head";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Carousel from "./layout/Carousel";
import { Slider } from "./layout/Slider";
import { ProductSlider } from "./layout/ProductSlider";
import { Route, Routes, useLocation } from "react-router-dom";
import { SignIn } from "./page/SignIn";
import Home from "./page/Home";
import { Footer } from "./layout/Footer";
import Dashboard from "./page/Dashboard";
import Breadcrumbs from "./layout/Breadcrumb";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <Head /> */}
      {/* <Header /> */}
      <Navbar />
      {/* <Carousel />
      <Slider />
      <ProductSlider /> */}
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
