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

  const router = useRouter();

  const getProducts = () => {
    axios.get(BASE_URL).then((res) => setProducts(res.data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-2 m-2 bg-white shadow-md">
      <p className="font-bold text-xl">جدیدترین محصولات</p>
      <div className="mt-5 flex flex-col gap-5">
        <ProductsCard data={products} />
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
