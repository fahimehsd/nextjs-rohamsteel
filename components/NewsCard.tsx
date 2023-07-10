import { NewsCardProps } from "@/types";
import Link from "next/link";
import React from "react";

const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <div className="flexCenter flex-col gap-4 ">
      {data.map((news) => (
        <div className="shadow-md flexStart flex-col p-3 hover:shadow-red-500 duration-300 w-full h-full">
          <Link href={`/newsDetails/${news.slug}`} key={news.id}>
            <div className="flexBetween">
              <p className="font-bold mb-3 text-red-600">{news.title}</p>
              <p>{news?.createdAt}</p>
            </div>
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
