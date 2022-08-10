import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Router from "next/router";
import AddToCart from "../Cart/AddToCart";
import { styles, Button, BouncingLoader } from "../utils";
import SingleProductInventory from "./SingleProductInventory";
import SingleProductNote from "./SingleProductNote";
import SingleProductImages from "./SingleProductImages";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import useProductAvailability from "../../frontend-structure/product/hooks/useProductAvailability";

const RelatedItems = dynamic(() => import("../Items/RelatedItems"));

interface ItemProp {
  product: NexusGenObjects["Product"];
}

const SingleProduct: React.FC<ItemProp> = ({ product }) => {
  const [note, setNote] = useState("");
  const data = useProductAvailability(product.handle);

  const {
    id: productId,
    title,
    description,
    image,
    additionalImages,
    // hasInventory,
    // related
  } = product;

  return (
    <>
      <Head>
        <title>{title} | Shopify Store</title>
      </Head>

      <Button
        color="primary"
        round
        onClick={() => Router.back()}
        className="addButton"
      >
        Indietro
      </Button>
      <SingleItemWrapper>
        <div className="singlepage">
          <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
            <ProductAvailability
              data={data}
              productId={productId}
              note={note}
            />
            {data && data.availableForSale && (
              <SingleProductNote note={note} setNote={setNote} />
            )}
          </div>
          <SingleProductImages
            image={image}
            additionalImages={additionalImages}
          />
        </div>
        {/* <RelatedItems related={related} /> */}
      </SingleItemWrapper>

      <SingleItemWrapperMobile>
        <h1>{title}</h1>
        <SingleProductImages
          image={image}
          additionalImages={additionalImages}
        />
        <p>{description}</p>
        <ProductAvailability data={data} productId={productId} note={note} />
        {data && data.availableForSale && (
          <SingleProductNote note={note} setNote={setNote} />
        )}
        {/* <RelatedItems related={related} /> */}
      </SingleItemWrapperMobile>
    </>
  );
};

const ProductAvailability = ({ data, productId, note }) => {
  if (!data) return <BouncingLoader />;

  return (
    <>
      <SingleProductInventory
        availableForSale={data.availableForSale}
        quantity={data.totalInventory}
      />
      {data.availableForSale && (
        <AddToCart
          id={productId}
          maxQuantity={data.availableForSale ? data.totalInventory : null}
          note={note}
        />
      )}
    </>
  );
};

const SingleItemWrapper = styled.div`
  display: none;
  padding-top: 3rem;

  @media (min-width: ${styles.size.tablet}) {
    display: block;
  }

  .singlepage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
    align-items: center;

    .details {
      align-self: flex-start;
    }
  }
`;

const SingleItemWrapperMobile = styled.div`
  margin: 2rem auto;
  text-align: center;

  .image {
    box-shadow: ${styles.shadows.lightShadow};
    height: 150px;
    margin: 0 auto;
    width: 150px;
  }

  .details {
    text-align: center;
  }

  @media (min-width: ${styles.size.tablet}) {
    display: none;
  }
`;

export default SingleProduct;
