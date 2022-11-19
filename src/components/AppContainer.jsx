import React, { useState, useEffect } from "react";
import { endpoints } from "../assets/endpoints";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";

const AppContainer = () => {
  const [filters, setFilters] = useState({
    color: [],
    rating: null,
    price: {
      from: 0,
      to: 0,
    },
  });

  const [list, setList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getFromEndPoints = async () => {
      try {
        const res = await fetch(endpoints.PRODUCTS);
        const products = await res.json();
        setList(products);
        setProductList(products);
      } catch (err) {
        console.log(err);
      }
    };
    getFromEndPoints();
  }, []);

  const handleFilterChange = () => {};

  console.log(handleFilterChange);

  return (
    <>
      <FilterList onChange={handleFilterChange} list={list} filters={filters} />
      <ProductsList productList={productList} />
    </>
  );
};

export default AppContainer;
