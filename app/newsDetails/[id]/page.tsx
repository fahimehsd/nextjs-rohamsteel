"use client";
import { NewsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Tags from "@/components/Tags";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";
import NewsAside from "@/components/NewsAside";
import CommentsAside from "@/components/CommentsAside";
import MembershipAside from "@/components/MembershipAside";
import { BASE_URL } from "@/app/api";
import { useParams } from "next/navigation";

const News = () => {
  const [news, setNews] = useState<NewsState[]>([]);
  const { id } = useParams();

  const getNews = () => {
    axios.get(BASE_URL).then((res) => setNews(res.data.news));
  };
  useEffect(() => {
    getNews();
  }, []);

  const theNews = news.find((news) => id == news.id);

  const date = new Date().toLocaleDateString("fa-IR");
  return (
    <div className="bg-gray-100 flexCenter md:items-start md:px-80 md:pt-5 md:gap-5 p-2">
      <main className="md:w-2/3">
        <div className="w-full">
          <Tags />
        </div>
        <p className=" float-left mt-2 ">{date}</p>
        <div className="flexBetween w-full p-2 mb-4">
          <p className="text-xl md:text-4xl font-bold py-2">{theNews?.title}</p>
        </div>
        <div className="w-full h-full p-4 flexCenter border-2 mb-2 border-red-500">
          <img
            src={theNews?.image}
            alt={theNews?.title}
            className="w-full h-full hover:scale-105 duration-300"
          />
        </div>

        <div className="bg-white w-full p-5 shadow-md my-5">
          <p className=" first-letter:pr-4 leading-relaxed">{theNews?.desc}</p>
        </div>
      </main>
      <aside className="hidden md:flex md:flex-col md:gap-3 md:w-1/3">
        <NewsAside />
        <CommentsAside />
        <MembershipAside />
      </aside>
    </div>
  );
};

export default News;
