import React from "react";
import styled from "styled-components";
import FilterByColor from "./FilterByColor";
import FilterByRating from "./FilterByRating";

const FilterList = ({ onChange, list, ratingToFilter }) => {
  return (
    <StyleAsideContain>
      <FilterByRating
        onChange={onChange}
        list={list}
        ratingToFilter={ratingToFilter}
      />
      <FilterByColor onChange={onChange} list={list} />
    </StyleAsideContain>
  );
};

export default FilterList;

const StyleAsideContain = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
