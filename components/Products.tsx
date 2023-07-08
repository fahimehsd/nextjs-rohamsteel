"use client";
import { BASE_URL } from "@/app/api";
import { ProductsState } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState<ProductsState[]>([]);
  const date = new Date().toLocaleDateString("fa-IR");
  const router = useRouter();

  const getProducts = () => {
    axios.get(BASE_URL).then((res) => setProducts(res.data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full flexCenter flex-col">
      <div className="p-2 m-2 bg-white shadow-md w-full ">
        <p className="block font-bold text-xl md:text-red-500 md:border-b md:border-red-500 md:p-3 md:mb-4">
          جدیدترین محصولات
        </p>
        <div className="mt-5 flex flex-col gap-5">
          <ProductsCard data={products.slice(-3)} />
          <button
            onClick={() => router.push("/products")}
            className="bg-red-500 p-2 text-white font-bold rounded-md"
          >
            محصولات بیشتر..
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
