"use client";
import { BASE_URL } from "@/app/api";
import { MoreState, NewsState, ProductsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Tags = () => {
  const [news, setNews] = useState<NewsState[]>([]);
  const [products, setProducts] = useState<ProductsState[]>([]);
  const [more, setMore] = useState<MoreState[]>([]);

  const getData = () => {
    axios.get(BASE_URL).then((res) => setNews(res.data.news));
  };

  useEffect(() => {
    getData();
  }, []);

  const titles = news
    .map((news) => news.title)
    .toString()
    .split(" ");

  var words = [];

  for (let i = 0; i < 10; i++) {
    var randomWords =
      titles[Math.floor(Math.random() * titles.length)].toString();

    if (randomWords.split("").length >= 5) {
      words.push(randomWords);
    }
  }
  const merged = words.flat(1);

  return (
    <div className="bg-white my-10 border shadow-md flex flex-col">
      <p className="text-red-600 font-bold p-2 border-b mb-2">برچسب های خبری</p>
      <div className="flexStart flex-wrap gap-2 p-2">
        {merged.map((item) => (
          <div className="bg-gray-100 p-1 rounded-md border border-gray-300 text-gray-500 font-bold text-sm">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
