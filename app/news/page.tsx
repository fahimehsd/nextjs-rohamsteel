"use client";
import { NewsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import Tags from "@/components/Tags";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";

const News = () => {
  const [news, setNews] = useState<NewsState[]>([]);

  const getNews = () => {
    axios.get(BASE_URL).then((res) => setNews(res.data.news));
  };
  useEffect(() => {
    getNews();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const date = new Date().toLocaleDateString("fa-IR");
  return (
    <div className="bg-slate-100 flexCenter flex-col py-4">
      <div className="w-full mx-2">
        <Tags />
      </div>
      <div className="flexBetween w-full p-2 mb-4">
        <p className="font-bold text-xl">
          اخبار شرکت <span className="text-red-500">رهام</span> پارس
        </p>
        <p>{date}</p>
      </div>
      <div>
        <div className="bg-white w-full px-2 py-4">
          <NewsCard data={currentPosts} />
        </div>
        <div className="w-full">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={news.length}
            paginateFront={paginateFront}
            paginateBack={paginateBack}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
