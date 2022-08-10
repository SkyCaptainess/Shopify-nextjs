import React from "react";
import styled from "styled-components";
import ItemsList from "../Items/ItemsList";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface ShopItemsProp {
  products: Array<NexusGenObjects["Product"]>;
}

const ShopItems: React.FC<ShopItemsProp> = ({ products }) => (
  <ShopItemsWrapper>
    <ItemsList products={products} />
  </ShopItemsWrapper>
);

const ShopItemsWrapper = styled.div`
  padding-top: 3rem;
`;

export default ShopItems;
