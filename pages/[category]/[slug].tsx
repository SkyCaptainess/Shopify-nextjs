import React from "react";
import SingleProduct from "../../components/Shop/SingleProduct";
import { BouncingLoader } from "../../components/utils";
import { NextSeo } from "next-seo";
import Error from "../_error";
import { createShopifyGraphql } from "../../graphql-shopify/context";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import QUERY_GET_PRODUCT, {
  QueryGetProduct,
} from "../../graphql-shopify/product/queries/QUERY_GET_PRODUCT";
import { manageProduct } from "../../graphql-shopify/product/functions";
import { InferGetStaticPropsType } from "next";
import QUERY_GET_ALL_PRODUCT_NAMES from "../../graphql-shopify/product/queries/QUERY_GET_ALL_PRODUCT_NAMES";

const Item = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) return <BouncingLoader />;

  return (
    <>
      <NextSeo
        title={product.title}
        description={product.description}
        openGraph={{
          type: "website",
          title: product.title,
          description: product.description,
          images: [
            {
              url: product.image?.url,
              width: 800,
              height: 600,
              alt: product.image?.alt,
            },
          ],
        }}
      />
      <SingleProduct product={product} />
    </>
  );
};

export const getStaticPaths = async () => {
  const shopifyGraphql = createShopifyGraphql();

  const productData = await shopifyGraphql.request(QUERY_GET_ALL_PRODUCT_NAMES);

  const paths = productData.products.edges
    .filter(({ node }) => node.collections?.edges?.length > 0)
    .map(({ node }) => {
      const collectionHandle = node.collections.edges[0].node.handle;
      return `/${collectionHandle}/${node.handle}`;
    });

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const graphqlClient = createShopifyGraphql();
  const productData = await graphqlClient.request<QueryGetProduct>(
    QUERY_GET_PRODUCT,
    {
      slug: params.slug,
    }
  );
  const product: NexusGenObjects["Product"] = await manageProduct(
    productData.productByHandle
  );

  return { props: { product } };
}

export default Item;
