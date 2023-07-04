"use client";
import { BASE_URL } from "@/app/api";
import { MoreState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
const More = () => {
  const [more, setMore] = useState<MoreState[]>([]);

  const getMore = () => {
    axios.get(BASE_URL).then((res) => setMore(res.data.more));
  };

  useEffect(() => {
    getMore();
  }, []);

  return (
    <div className="p-2">
      <p className="font-bold text-xl">مطالب بیشتر</p>
      <div className="flexCenter flex-col">
        {more.slice(-3).map((more) => (
          <Disclosure key={more.id}>
            {({ open }) => (
              <div className="p-5">
                <img src={more.image} alt={more.title} />
                <p className="mt-2 text-center">{more.title}</p>
                <Disclosure.Button className="flex justify-center items-center w-full bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 border-b border-red-500">
                  <p className="text-red-500">بیشتر بخوانید</p>
                  <MdKeyboardArrowDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-red-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className="flex flex-col 
                gap-2 px-4 py-4 text-sm text-gray-500"
                >
                  <p>{more.desc}</p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default More;
