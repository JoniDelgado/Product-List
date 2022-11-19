import React from "react";
import styled from "styled-components";

const FilterByRating = ({ list, onChange, filters }) => {
  const setStars = new Set();
  for (let el of list) setStars.add(el.rating);
  const stars = Array.from(setStars).sort();

  return (
    <StyleStarFilterContainer>
      <h5>Rating</h5>
      {filters.rating && (
        <div onClick={(e) => onChange(e, null, "rating")}>
          <p>Remove Filter</p>
        </div>
      )}
      {stars.map((star) => {
        return (
          <div key={star} onClick={(e) => onChange(e, star, "rating")}>
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
