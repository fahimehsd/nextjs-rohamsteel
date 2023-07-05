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
    <div className="bg-slate-100 flexCenter flex-col">
      <aside>
        <Tags />
      </aside>
      <main>
        <Hero />
        <About />
        <News />
        <div className="w-full h-10 my-10 bg-slate-200"></div>
        <Products />
        <div className="w-full h-10 my-10 bg-slate-200"></div>
        <More />
      </main>
    </div>
  );
};

export default Home;
