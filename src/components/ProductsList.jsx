import React from "react";
import styled from "styled-components";

const ProductsList = ({ productList }) => {
  return (
    <ProductSection>
      {productList.map((product) => {
        return (
          <ProductArticle key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>
              {"★".repeat(product.rating).padEnd(5, "☆")} y color{" "}
              {product.color}
            </p>
            <p>
              {product.price.toLocaleString("es-Es", {
                style: "currency",
                currency: "EUR",
              })}
            </p>
          </ProductArticle>
        );
      })}
    </ProductSection>
  );
};

export default ProductsList;

const ProductSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 1rem;
`;

const ProductArticle = styled.article`
  width: 300px;
  max-height: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
  border: thin solid black;

  & img {
    width: 100%;
  }
`;
