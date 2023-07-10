"use client";
import { NewsState } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { BASE_URL } from "@/app/api";
import Link from "next/link";

const NewsAside = () => {
  const [news, setNews] = useState<NewsState[]>([]);
  const router = useRouter();
  const getNews = () => {
    axios.get(BASE_URL).then((res) => setNews(res.data.news));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="bg-white shadow-md border">
      <p className="border-b p-3 text-red-600 font-bold">آخرین مطالب</p>
      <div className="px-2 py-4 flex flex-col gap-3">
        {news.slice(-10).map((news) => (
          <Link
            href={`/newsDetails/${news.slug}`}
            className="flex gap-2 hover:text-red-600 duration-300"
          >
            <div className="pt-2">
              <GoDotFill size={10} className="text-red-600" />
            </div>
            <p>{news.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsAside;
