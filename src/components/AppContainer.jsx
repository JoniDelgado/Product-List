import React, { useState, useEffect, useMemo } from "react";
import { endpoints } from "../assets/endpoints";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";

const AppContainer = () => {
  const [filters, setFilters] = useState({
    color: [],
    rating: [],
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

  const filteredProductList = useMemo(() => {
    const filtersName = Object.keys(filters);

    let newList;

    for (let filter of filtersName) {
      newList = productList.filter((el) =>
        filters[filter].length ? filters[filter].includes(el[filter]) : true
      );
    }

    return newList;
  }, [filters]);

  console.log(filteredProductList);

  return (
    <>
      <FilterList
        onChange={(filterType, filter) =>
          setFilters({ ...filters, [filterType]: filter })
        }
        list={list}
      />
      <ProductsList productList={productList} />
    </>
  );
};

export default AppContainer;
