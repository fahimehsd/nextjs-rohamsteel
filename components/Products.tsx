"use client";
import { BASE_URL } from "@/app/api";
import { ProductsState } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState<ProductsState[]>([]);

  const router = useRouter();

  const getProducts = () => {
    axios.get(BASE_URL).then((res) => setProducts(res.data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-2 ">
      <p className="font-bold text-xl">جدیدترین محصولات</p>
      <div className="mt-5 flex flex-col gap-5">
        {products.slice(-3).map((item) => (
          <div className="border border-red-500 p-2 shadow-md">
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
        <button
          onClick={() => router.push("/products")}
          className="bg-red-500 p-2 text-white font-bold rounded-md"
        >
          محصولات بیشتر..
        </button>
      </div>
    </div>
  );
};

export default Products;
