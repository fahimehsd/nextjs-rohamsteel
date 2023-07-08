"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import More from "@/components/More";
import News from "@/components/News";
import Products from "@/components/Products";
import Tags from "@/components/Tags";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 flexCenter flex-col md:px-80">
      <div className="w-full">
        <Tags />
      </div>
      <main>
        <Hero />
        <About />
        <News />
        <div className="w-full h-10 my-10 bg-gray-200"></div>
        <Products />
        <div className="w-full h-10 my-10 bg-gray-200"></div>
        <More />
      </main>
    </div>
  );
};

export default Home;
