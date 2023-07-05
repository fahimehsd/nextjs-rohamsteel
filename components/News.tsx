"use client";
import { BASE_URL } from "@/app/api";
import { NewsState } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState<NewsState[]>([]);
  const router = useRouter();
  const getNews = () => {
    axios.get(BASE_URL).then((res) => setNews(res.data.news));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="p-2 m-2 bg-white shadow-md">
      <p className="font-bold text-xl text-red-500 p-3 border-b border-red-500 mb-4">
        آخرین اخبار
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {news.slice(-5).map((news) => (
          <div className="shadow-md flex flex-col p-3">
            <Link href={`/newsDetails/${news.id}`} key={news.id}>
              <p className="font-bold mb-3 text-red-600">{news.title}</p>

              <div className="flex items-start gap-3">
                <img
                  src={news.image}
                  alt={news.title}
                  width={80}
                  height={30}
                  className="border border-red-500"
                />
                <p className="text-gray-500 text-sm">
                  {news.desc.substring(0, 100)}..
                </p>
              </div>
            </Link>
          </div>
        ))}
        <button
          onClick={() => router.push("/news")}
          className="bg-red-500 p-2 text-white font-bold rounded-md"
        >
          ادامه اخبار شرکت...
        </button>
      </div>
    </div>
  );
};

export default News;
