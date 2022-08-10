import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface ItemsListProp {
  products: Array<NexusGenObjects["Product"]>;
}

const ItemsList: React.FC<ItemsListProp> = ({ products = [] }) => (
  <ItemsListWrapper>
    {products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </ItemsListWrapper>
);

const ItemsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin-bottom: 1.4rem;
`;

export default ItemsList;
