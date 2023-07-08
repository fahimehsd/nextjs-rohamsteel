"use client";
import About from "@/components/About";
import CommentsAside from "@/components/CommentsAside";
import Hero from "@/components/Hero";
import MembershipAside from "@/components/MembershipAside";
import More from "@/components/More";
import News from "@/components/News";
import NewsAside from "@/components/NewsAside";
import Products from "@/components/Products";
import Tags from "@/components/Tags";

const Home = () => {
  return (
    <div className="bg-gray-100 flexCenter md:items-start md:px-80 md:pt-5 md:gap-5">
      <main className="flexCenter flex-col w-full md:w-2/3 md:gap-5">
        <Tags />
        <Hero />
        <About />
        <News />
        <div className="w-full h-10 my-10 bg-gray-200"></div>
        <Products />
        <div className="w-full h-10 my-10 bg-gray-200"></div>
        <More />
      </main>
      <aside className="hidden md:flex md:flex-col md:gap-3 md:w-1/3">
        <NewsAside />
        <CommentsAside />
        <MembershipAside />
      </aside>
    </div>
  );
};

export default Home;
