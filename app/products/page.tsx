"use client";
import Tags from "@/components/Tags";
import { ProductsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import ProductsCard from "@/components/ProductsCard";

const Products = () => {
  const [products, setProducts] = useState<ProductsState[]>([]);

  const getProducts = () => {
    axios.get(BASE_URL).then((res) => setProducts(res.data.products));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const date = new Date().toLocaleDateString("fa-IR");

  return (
    <div className="bg-gray-100 flexCenter flex-col py-4">
      <div className="w-full mx-2">
        <Tags />
      </div>
      <div className="flexBetween w-full p-2 mb-4">
        <p className="font-bold text-xl">
          محصولات شرکت <span className="text-red-500">رهام</span> پارس
        </p>
        <p>{date}</p>
      </div>
      <div className="bg-white w-full mx-2 px-2 py-4">
        <ProductsCard data={currentPosts} />
      </div>
      <div className="w-full">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginateFront={paginateFront}
          paginateBack={paginateBack}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Products;
