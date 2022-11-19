import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const FilterByRating = ({ list, onChange }) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    onChange("rating", filter);
  }, [filter]);

  const rating = useMemo(() => {
    const setRating = new Set();
    for (let el of list) {
      setRating.add(el.rating);
    }
    return Array.from(setRating).sort();
  }, [list]);

  return (
    <StyleStarFilterContainer>
      <h5>Rating</h5>
      {filter && (
        <div onClick={() => setFilter(null)}>
          <p>Remove Filter</p>
        </div>
      )}
      {rating.map((star) => {
        return (
          <div key={star} onClick={() => setFilter(star)}>
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
