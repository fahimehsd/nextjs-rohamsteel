"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/app/api";
import { FooterLinks } from "@/constants";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { NewsState, ProductsState } from "@/types";

const Footer = () => {
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
    <footer className="bg-gray-200 w-full py-4 h-full md:px-80">
      <div className="md:flex md:justify-between">
        <div>
          {FooterLinks.map((item) => (
            <Disclosure key={item.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{item.title}</span>
                    <div className="block md:hidden">
                      <MdKeyboardArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-red-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className="flex flex-col 
               gap-2 px-4 py-4 text-sm text-gray-500"
                  >
                    {item?.posts?.map((post) => (
                      <div key={post.id} className="flex gap-2">
                        <p>{post.title}</p>

                        <a
                          href={post?.href}
                          target="_blank"
                          className="text-red-500"
                        >
                          {post?.desc}
                        </a>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span>محصولات</span>
                  <div className="block md:hidden">
                    <MdKeyboardArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-red-500`}
                    />
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {products.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`}>
                      <div key={item.id}>
                        <p className="text-gray-800">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span>آخرین اخبار</span>
                  <div className="block md:hidden">
                    <MdKeyboardArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-red-500`}
                    />
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-col gap-4 px-4 pt-4 pb-2 text-sm text-gray-500">
                  {news.slice(-2).map((news) => (
                    <Link key={news.id} href={`/news/${news.id}`}>
                      <div
                        key={news.id}
                        className="flexCenter hover:text-red-500"
                      >
                        <img
                          src={news.image}
                          alt={news.title}
                          width={70}
                          height={60}
                        />
                        <p>{news.title}</p>
                      </div>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flexCenter flex-col border-y my-2 py-2">
          <Image src={"/logo1.png"} alt="logo" width={100} height={50} />
          <Image src={"/name.png"} alt="name" width={100} height={50} />
        </div>
      </div>
      <div className="flexCenter pb-2">
        <a href="https://github.com/fahimehsd" target="_blank">
          <AiFillGithub color="gray" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
