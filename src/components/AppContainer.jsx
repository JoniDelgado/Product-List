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

  const filterToApply = (filter, prod) =>
    filter.length ? filters[filter].includes(prod[filter]) : null;

  const funcion = (filter, prod) => {
    const a = prod.filter((el) => {
      return filterToApply(filter, el);
    });

    console.log(a);
  };
  const algo = useMemo(() => {
    const a = Object.keys(filters);

    let matches = productList;

    for (let key of a) {
      matches = funcion(key, productList);
    }

    return matches;
  }, [filters]);

  // console.log(algo);

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
