import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const initialValue = [];

const FilterByRating = ({ list, onChange }) => {
  const [filter, setFilter] = useState(initialValue);

  useEffect(() => {
    onChange("rating", filter);
  }, [filter]);

  const stars = useMemo(() => {
    const setStars = new Set();
    for (let el of list) setStars.add(el.rating);
    return Array.from(setStars).sort();
  }, [list]);

  return (
    <StyleStarFilterContainer>
      <h5>Rating</h5>
      {
        <div onClick={(e) => setFilter(initialValue)}>
          <p>Remove Filter</p>
        </div>
      }
      {stars.map((star) => {
        return (
          <div key={star} onClick={(e) => setFilter([star])}>
            <p>{"★".repeat(star).padEnd(5, "☆")}</p>
          </div>
        );
      })}
    </StyleStarFilterContainer>
  );
};

export default FilterByRating;

const StyleStarFilterContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: thin solid black;

  h5 {
    font-size: 1rem;
    font-weight: 800;
    border-bottom: 1px solid black;
  }

  p {
    font-size: 0.9rem;
  }

  div {
    cursor: pointer;
  }
`;
