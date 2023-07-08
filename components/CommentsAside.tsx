"use client";
import { NewsState } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { BASE_URL } from "@/app/api";
import Link from "next/link";

const comments = [
  {
    id: 1,
    name: "user-1",
    comment: "متن کامنت",
    date: "۱۴۰۲/۰۱/۱۰"
  },
  {
    id: 2,
    name: "user-2",
    comment: "متن کامنت",
    date: "۱۴۰۲/۰۲/۱۰"
  },
  {
    id: 3,
    name: "user-3",
    comment: "متن کامنت",
    date: "۱۴۰۲/۰۳/۱۳"
  },
  {
    id: 4,
    name: "user-4",
    comment: "متن کامنت",
    date: "۱۴۰۲/۰۴/۰۲"
  }
];

const CommentsAside = () => {
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
      <p className="border-b p-3 text-red-600 font-bold">آخرین نظرات</p>
      <div className="px-2 py-4 flex flex-col gap-3">
        {comments.slice(-3).map((cm) => (
          <div className="flex gap-2 hover:text-red-600 duration-300">
            <div className="pt-2">
              <GoDotFill size={10} className="text-red-600" />
            </div>
            <p>{cm.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsAside;
