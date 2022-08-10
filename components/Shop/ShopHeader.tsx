import React from "react";
import styled from "styled-components";
import { styles, ImageBordered } from "../utils";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface ShopHeaderProp {
  category: NexusGenObjects["Category"];
}

const ShopHeader: React.FC<ShopHeaderProp> = ({ category }) => (
  <ShopHeaderWrapper>
    <div className="description">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
    </div>
    <div className="image">
      <ImageBordered image={category.image} />
    </div>
  </ShopHeaderWrapper>
);

const ShopHeaderWrapper = styled.div`
  padding: 1.5rem;

  .description {
    text-align: center;
    h1 {
      font-size: 2.5rem;
      animation: ${styles.animations.slideIn} 1.1s both;
    }
  }

  .image {
    display: none;
  }

  @media (min-width: ${styles.size.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    word-break: break-all;

    .image {
      display: block;
    }
  }
`;

export default ShopHeader;
