import React, { useState } from "react";
import styled from "styled-components";

const FilterByPrice = ({ filters, onChange }) => {
  const [priceForm, setPriceForm] = useState({
    from: 0,
    to: 0,
  });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceForm({ ...priceForm, [name]: Number(value) });
  };

  return (
    <StyleFilterByPrice>
      <h5>Price</h5>
      <input
        type="number"
        name="from"
        min="0"
        value={priceForm.from}
        onChange={(e) => handlePriceChange(e)}
      />
      <input
        type="number"
        name="to"
        min="0"
        value={priceForm.to}
        onChange={(e) => handlePriceChange(e)}
      />
      <button onClick={(e) => onChange(e, priceForm, "price")}>Filtrar</button>
    </StyleFilterByPrice>
  );
};

export default FilterByPrice;

const StyleFilterByPrice = styled.div`
  border: thin solid black;
`;
