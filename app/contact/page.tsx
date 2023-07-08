"use client";
import React from "react";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="bg-gray-100 flexCenter md:items-start md:px-80 md:pt-5 md:gap-5 p-2">
      <main>
        <p className="text-2xl sm:text-4xl font-bold mb-4">
          با <span className="text-red-500"> رهام </span> پارس در تماس باشید
        </p>
        <div className="bg-white w-full p-4 flex flex-col sm:flex-row items-center justify-evenly border-b  border-red-500 shadow-md mb-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <p className="font-bold">درگاه های تماس با ما :</p>

              <a
                href="tel:02188677045"
                className="pr-5 flex items-center gap-2"
              >
                <AiFillPhone className="text-red-500" />
                ۰۲۱-۸۸۶۷۷۰۴۵
              </a>
              <a
                href="tel:02188677046"
                className="pr-5 flex items-center gap-2"
              >
                <AiFillPhone className="text-red-500" />
                ۰۲۱-۸۸۶۷۷۰۴۶
              </a>
              <a
                href="mailto:info@RohamSteel.com"
                className="pr-5 flex items-center gap-2"
              >
                <AiOutlineMail className="text-red-500" />
                info@RohamSteel.com
              </a>
            </div>
          </div>
          <div className="rounded-sm flex flex-col items-center p-3 my-10 sm:p-10 bg-black-100 shadow-lg">
            <p>فرم درخواست همکاری</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label htmlFor="fname">
                  نام <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("fname", { min: 3 })}
                  className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname">
                  نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("lname", { min: 3 })}
                  className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">
                  شماره تماس <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register("phone", {
                    required: true,
                    pattern:
                      /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/i
                  })}
                  className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">
                  ایمیل <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="resume">رزومه</label>
                <input
                  type="file"
                  {...register("resume")}
                  className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-red-500 w-1/2 p-2 mt-5 text-white rounded-sm focus:w-full duration-300"
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white w-full p-4 flex flex-col sm:flex-row justify-evenly items-center min-h-screen shadow-md mb-5">
          <div className="flex flex-col gap-10">
            <p className="text-2xl sm:text-4xl font-bold">
              آدرس شرکت <span className="text-red-500">رهام</span> پارس
            </p>
            <p>
              تهران، خیابان ولیعصر بالاتر از میرداماد خیابان دستگردی پلاک ۳۶۴
              طبقه ۳ واحد ۷
            </p>
          </div>
          <div>
            <BsFillPinMapFill size={300} className="text-red-600" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
