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

  useEffect(() => {
    const { color, rating, price } = filters;
  }, [filters]);

  const handleFilterChange = (e, filterData, filterType) => {
    const { value } = e.target;

    if (filterType === "color") {
      const colorsToFilter = filters.color.find((color) => color === value);
      if (!colorsToFilter) {
        setFilters({ ...filters, color: [...filters.color, value] });
      } else {
        const removeColor = filters.color.filter((color) => color !== value);
        setFilters({ ...filters, color: removeColor });
      }
    }

    if (filterType === "rating") {
      if (!filterData) setFilters({ ...filters, rating: filterData });
      else setFilters({ ...filters, rating: filterData });
    }

    if (filterType === "price") {
      setFilters({ ...filters, price: filterData });
    }
  };

  return (
    <>
      <FilterList onChange={handleFilterChange} list={list} filters={filters} />
      <ProductsList productList={productList} />
    </>
  );
};

export default AppContainer;
