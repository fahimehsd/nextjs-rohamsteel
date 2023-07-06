import { ProductsCardProps } from "@/types";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ data }: ProductsCardProps) => {
  return (
    <div className="flexCenter flex-col gap-4">
      {data.map((item) => (
        <div className="border w-full h-full border-red-500 p-2 shadow-md">
          <Link href={`/products/${item.id}`}>
            <div className="flex gap-3">
              <img src={item.image} alt={item.name} width={60} height={60} />
              <p className="font-bold text-red-600">{item.name}</p>
            </div>
          </Link>
          <div className="flex items-center justify-end">
            <p>قیمت هر کیلو:</p>
            <p>{item.price} تومان</p>
          </div>
          <button className="float-left bg-red-600 p-2 mt-2 rounded-sm text-white">
            ثبت سفارش
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
