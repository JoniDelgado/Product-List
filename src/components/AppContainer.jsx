import React, { useState, useEffect } from "react";
import { endpoints } from "../assets/endpoints";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";

const AppContainer = () => {
  const [filters, setFilters] = useState({
    color: null,
    rating: null,
    price: null,
  });
  const [colorsToFilter, setColorsToFilter] = useState([]);
  const [ratingToFilter, setRatingToFilter] = useState(null);
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
    const filteredList = list.filter((product) => {
      if (colorsToFilter.length) {
        return colorsToFilter.find((color) => color === product.color);
      } else return product;
    });

    const filter2 = filteredList.filter((el) => {
      if (ratingToFilter) {
        return el.rating === ratingToFilter;
      } else return el;
    });

    setProductList(filter2);
  }, [colorsToFilter, ratingToFilter]);

  const handleFilterChange = (e, rating, filter) => {
    const { value } = e.target;

    if (filter === "color") {
      const colorInList = colorsToFilter.find((color) => color === value);
      if (!colorInList) {
        setColorsToFilter((color) => [...color, value]);
      } else {
        const filter = colorsToFilter.filter((color) => color !== value);
        setColorsToFilter(filter);
      }
    }

    if (filter === "rating") {
      setRatingToFilter(rating);
    }
  };

  return (
    <>
      <FilterList
        onChange={handleFilterChange}
        list={list}
        ratingToFilter={ratingToFilter}
      />
      <ProductsList productList={productList} />
    </>
  );
};

export default AppContainer;
