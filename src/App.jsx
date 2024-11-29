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
import ScrollTop from "./layout/ScrollTop";
import Category from "./layout/Category";
import ProductFullDetails from "./page/ProductFullDetails";
import PNF from "./page/PNF";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/productsDetails/:proId"
          element={<ProductFullDetails />}
        />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="*" element={<PNF />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
