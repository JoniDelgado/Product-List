import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const FilterByColor = ({ list, onChange }) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    onChange("color", filter);
  }, [filter]);

  const colors = useMemo(() => {
    const colors = new Set();
    for (let color of list) {
      colors.add(color.color);
    }
    return Array.from(colors);
  }, [list]);

  const handleChange = (color, isChecked) => {
    if (isChecked) {
      setFilter([...filter, color]);
    } else {
      const filterColor = filter.filter((el) => el !== color);
      setFilter(filterColor);
    }
  };

  return (
    <ColorFilterContainer>
      <h5>Colors</h5>
      <ColorsContainer>
        {colors.map((color) => {
          return (
            <div key={color}>
              <input
                type="checkbox"
                name="color"
                id={color}
                value={color}
                onChange={(e) => handleChange(color, e.target.checked)}
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
