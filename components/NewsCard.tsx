import { NewsCardProps } from "@/types";
import Link from "next/link";
import React from "react";

const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <div className="flexCenter flex-col gap-4">
      {data.map((news) => (
        <div className="shadow-md flex flex-col p-3">
          <Link href={`/newsDetails/${news.id}`} key={news.id}>
            <p className="font-bold mb-3 text-red-600">{news.title}</p>
            <p>{news?.createdAt}</p>

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
    </div>
  );
};

export default NewsCard;
