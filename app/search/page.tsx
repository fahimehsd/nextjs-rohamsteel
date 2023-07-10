"use client";
import { NewsState, ProductsState } from "@/types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";

const Search = () => {
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

  return <div>Search</div>;
};

export default Search;
