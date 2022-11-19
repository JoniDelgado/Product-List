import React, { useState } from "react";
import styled from "styled-components";

const FilterByColor = ({ list, onChange }) => {
  const [filter, setFilter] = useState([]);
  const colorsList = new Set();
  for (let colorFromList of list) {
    colorsList.add(colorFromList.color);
  }
  const colorsArray = Array.from(colorsList).sort();

  return (
    <ColorFilterContainer>
      <h5>Colors</h5>
      <ColorsContainer>
        {colorsArray.map((color) => {
          return (
            <div key={color}>
              <input
                type="checkbox"
                name="color"
                id={color}
                value={color}
                onChange={(e) => onChange(e, null, "color")}
              />
              <label htmlFor={color}>{color}</label>
            </div>
          );
        })}
      </ColorsContainer>
    </ColorFilterContainer>
  );
};

export default FilterByColor;

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ColorFilterContainer = styled.div`
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

  input {
    cursor: pointer;
  }
`;
