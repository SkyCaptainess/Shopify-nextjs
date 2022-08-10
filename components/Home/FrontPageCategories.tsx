import React from "react";
import styled from "styled-components";
import BouncingLoader from "../utils/BouncingLoader";
import FrontCategory from "./FrontCategory";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface FrontPageCategoriesProp {
  categories: Array<NexusGenObjects["Category"]>;
}

const FrontPageCategories: React.FC<FrontPageCategoriesProp> = ({
  categories,
}) => {
  return (
    <FrontCategoriesWrapper>
      {categories.map((category) => (
        <FrontCategory category={category} key={category.id} />
      ))}
    </FrontCategoriesWrapper>
  );
};

const FrontCategoriesWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 1.2rem;

  padding: 0;
`;

export default FrontPageCategories;
