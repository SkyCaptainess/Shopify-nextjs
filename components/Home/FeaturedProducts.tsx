import React from "react";
import Title from "../Structure/Title";
import ItemsList from "../Items/ItemsList";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface FeaturedProductsProp {
  products: Array<NexusGenObjects["Product"]>;
}

const FeaturedProducts: React.FC<FeaturedProductsProp> = ({ products }) => {
  return (
    <div>
      <Title title="top" subtitle="products" />
      {products && <ItemsList products={products} />}
    </div>
  );
};

export default FeaturedProducts;
