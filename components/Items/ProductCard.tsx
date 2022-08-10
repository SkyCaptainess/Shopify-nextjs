import React, { useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import { styles, formatMoney, BouncingLoader } from "../utils";
import { ITEM } from "../../constants/routes";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import useProductAvailability from "../../frontend-structure/product/hooks/useProductAvailability";
import { truncateString } from "../utils/lib/stringUtils";

interface ProductCardProp {
  product: NexusGenObjects["Product"];
}

const ProductCard = ({ product }: ProductCardProp) => {
  const data = useProductAvailability(product.handle);

  const cardTitle = useMemo(() => {
    let title = `${product.title}`;
    if (product.description) {
      title += ` - ${product.description}`;
    }
    return title;
  }, [product]);

  const categoryHandle = product.category?.handle
    ? product.category.handle
    : product.categoryHandle;

  return (
    <Link href={ITEM} as={`/${categoryHandle}/${product.handle}`} passHref>
      <ItemWrapper title={cardTitle}>
        <div className="imageContainer">
          <img src={product.image.url} alt={product.image?.alt} />
        </div>
        <div className="footer">
          <h3>{product.title}</h3>
          <div className="info">
            <h6>{formatMoney(product.price)}</h6>
            <ProductInventory availability={data} />
          </div>
          <div>{truncateString(product.description, 120)}</div>
        </div>
      </ItemWrapper>
    </Link>
  );
};

interface ProductInventoryProp {
  availability: NexusGenObjects["ProductAvailability"];
}

const ProductInventory = ({ availability }: ProductInventoryProp) => {
  let content = <BouncingLoader />;

  if (availability) {
    if (!availability.availableForSale) {
      content = <div>Not Available</div>;
    } else if (availability.totalInventory === 0) {
      //Product without inventory
      content = <div />;
    } else if (availability.totalInventory < 4) {
      content = <div>Only {availability.totalInventory} remaining</div>;
    } else {
      content = <div />;
    }
  }

  return <>{content}</>;
};

const ItemWrapper = styled.a`
  flex: 1 1 200px;
  max-width: 250px;
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* box-shadow: ${styles.shadows.lightShadow}; */

  img {
    width: 100%;
    object-fit: cover;
    max-height: 250px;
  }

  .footer {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    
    height: 100%;
    padding: 0.6rem;
    padding-bottom: 0;
    text-align: center;

    h3 {
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 0;
      word-break: break-all;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    text-align: right;
    color: ${styles.colors.mainGrey2};
    font-size: 1rem;

    h6 {
      margin: 0;
      font-size: 1rem;
    }

    div {
      color: ${styles.colors.dangerColor};
    }
  }
`;

export default ProductCard;
