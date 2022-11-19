import React from "react";
import styled from "styled-components";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";

const FilterList = ({ onChange, list, filters }) => {
  return (
    <StyleAsideContain>
      {/*       <FilterByPrice list={list} onChange={onChange} filters={filters} />
      <FilterByRating onChange={onChange} list={list} filters={filters} /> */}
      <FilterByColor onChange={onChange} list={list} />
    </StyleAsideContain>
  );
};

export default FilterList;

const StyleAsideContain = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
