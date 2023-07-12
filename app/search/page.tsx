"use client";
import { NewsState, ProductsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import Tags from "@/components/Tags";
import NewsAside from "@/components/NewsAside";
import CommentsAside from "@/components/CommentsAside";
import MembershipAside from "@/components/MembershipAside";
import Link from "next/link";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searched = searchParams.get("searched");
  const date = new Date().toLocaleDateString("fa-IR");

  const [news, setNews] = useState<NewsState[]>([]);
  const [products, setProducts] = useState<ProductsState[]>([]);

  const getData = () => {
    axios.get(BASE_URL).then((res) => {
      setNews(res.data.news);
    });
    axios.get(BASE_URL).then((res) => {
      setProducts(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 flexCenter md:items-start md:px-80 md:pt-5 md:gap-5 p-2">
        <main>
          <div className="w-full">
            <Tags />
          </div>
          <div className="flexBetween gap-5 w-full p-2 mb-4">
            <p className="text-xl md:text-4xl font-bold py-2">
              نتیجه جست و جو برای{" "}
              <span className="text-red-500">{searched}</span>
            </p>
            <p>{date}</p>
          </div>
          <div>
            <div className="bg-white w-full px-2 py-4 flex flex-col shadow-md">
              {searched !== null &&
              news.filter((news) =>
                (news.title || news.desc).includes(searched)
              ).length > 0 ? (
                <div className="flex flex-col gap-5">
                  {news
                    .filter((news) =>
                      (news.title || news.desc).includes(searched)
                    )
                    .map((data) => (
                      <Link
                        href={`/newsDetails/${data.slug}`}
                        className="flexStart border"
                      >
                        <div>
                          <img
                            src={data?.image}
                            alt="Image"
                            className="md:w-40 md:h-20 w-36"
                          />
                        </div>
                        <p className="p-2 hover:text-red-500">{data.title}</p>
                      </Link>
                    ))}
                </div>
              ) : (
                <div>
                  <p>برای {searched} هیچ مطلبی یافت نشد.</p>
                </div>
              )}
            </div>
          </div>
        </main>
        <aside className="hidden md:flex md:flex-col md:gap-3 md:w-1/3">
          <NewsAside />
          <CommentsAside />
          <MembershipAside />
        </aside>
      </div>
    </div>
  );
};

export default Search;
