"use client";
import { HeaderLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { AiTwotonePhone, AiOutlineMail, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const [searched, setSearched] = useState("");
  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);
  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      router.push("/search" + "?" + createQueryString("searched", searched));
    }
  };

  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  // const body = document.getElementById("root");
  // body?.addEventListener("scroll", changeHeader);

  return header ? (
    <header className="md:px-80 bg-gray-50 fixed p-2 duration-300 z-10 w-full">
      <div className="flexBetween gap-2">
        <Image
          src={"/logo.png"}
          width={220}
          height={200}
          className="w-44"
          alt="شرکت صنایع فولادی رهام پارس"
        />
        <div>
          <div className="flex gap-2 items-center bg-gray-200 rounded-md p-1">
            <AiOutlineSearch size={25} className="text-red-500" />
            <input
              type="text"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
              onKeyUp={(e) => searchHandler(e)}
              placeholder="جست و جو کنید.."
              className="w-full bg-gray-200 rounded-md outline-none text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header className="flex flex-col gap-3 duration-300">
      <div className="flexCenter bg-red-500 md:justify-between md:text-lg md:px-80 md:py-2">
        <p className="hidden md:block">شرکت صنایع فولاد رهام پارس</p>
        <div>
          <ul className="flexCenter flex-col gap-1 md:flex-row md:gap-5 ">
            <div className="flex gap-3">
              <li className="flexCenter">
                <AiTwotonePhone />
                <a href="tel:02188677045">۰۲۱-۸۸۶۷۷۰۴۵</a>
              </li>
              <li className="flexCenter">
                <AiTwotonePhone />
                <a href="tel:02188677046">۰۲۱-۸۸۶۷۷۰۴۶</a>
              </li>
            </div>
            <li className="flexCenter">
              <AiOutlineMail />
              <a href="mailto:info@RohamSteel.com">info@RohamSteel.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-2 md:px-80 md:py-2">
        <div className="flexBetween gap-2">
          <Image
            src={"/logo.png"}
            width={220}
            height={200}
            className="md:w-44"
            alt="شرکت صنایع فولادی رهام پارس"
          />
          <div>
            <div className="flex gap-2 items-center bg-gray-200 rounded-md p-1">
              <AiOutlineSearch size={25} className="text-red-500" />
              <input
                type="text"
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
                onKeyUp={(e) => searchHandler(e)}
                placeholder="جست و جو کنید.."
                className="w-full bg-gray-200 rounded-md outline-none text-sm"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500">
            هدف شرکت صنایع فولاد رهام پارس، تولید سالانه ۲/۱ میلیون تن آهن
            اسفنجی با تأکید بر حفاظت از محیط زیست است.
          </p>
        </div>
      </div>
      <div className="p-2 md:p-0 ">
        <hr className="border-gray-300 hidden md:block" />
        <ul className="flex flex-wrap gap-3 text-sm md:px-80  md:pt-3">
          {HeaderLinks.map((link) => (
            <li
              key={link.id}
              className="border-b p-2 border-gray-300 hover:border-red-500 focus:border-red-500"
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
