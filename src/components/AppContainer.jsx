import React, { useState, useEffect, useMemo } from "react";
import { endpoints } from "../assets/endpoints";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";

const AppContainer = () => {
  const [filters, setFilters] = useState({
    rating: [],
    color: [],
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

  const matches = useMemo(() => {
    const filterToApply = Object.values(filters).filter(
      (el) => typeof el === "function"
    );

    let matches = productList;

    for (let filters of filterToApply) {
      matches = matches.filter((el) => filters(el));
    }

    return matches;
  }, [filters]);

  return (
    <>
      <FilterList
        onChange={(filterType, filter) =>
          setFilters({ ...filters, [filterType]: filter })
        }
        list={list}
        filters={filters}
      />
      <ProductsList matches={matches} />
    </>
  );
};

export default AppContainer;
