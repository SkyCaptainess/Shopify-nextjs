import React from "react";
import Head from "next/head";
import { createShopifyGraphql } from "../graphql-shopify/context";
import Error from "./_error";
import ShopHeader from "../components/Shop/ShopHeader";
import ShopItems from "../components/Shop/ShopItems";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { manageCollection } from "../graphql-shopify/category/functions";
import QUERY_GET_COLLECTION, {
  QueryGetCollectionProp,
} from "../graphql-shopify/category/queries/QUERY_GET_COLLECTION";
import QUERY_GET_ALL_COLLECTIONS_NAMES, {
  QueryAllCollectionNamesType,
} from "../graphql-shopify/category/queries/QUERY_GET_ALL_COLLECTIONS_NAMES";

const Shop = ({ category }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{category.title} | La Mosca Nera</title>
      </Head>
      <ShopHeader category={category} />
      <ShopItems products={category.products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const shopifyGraphql = createShopifyGraphql();
  const collectionsData = await shopifyGraphql.request<
    QueryAllCollectionNamesType
  >(QUERY_GET_ALL_COLLECTIONS_NAMES);

  const paths = collectionsData.collections.edges.map(
    ({ node }) => `/${node.handle}`
  );

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const graphqlClient = createShopifyGraphql();
  const collectionData = await graphqlClient.request<QueryGetCollectionProp>(
    QUERY_GET_COLLECTION,
    {
      slug: params.category,
    }
  );
  const category = await manageCollection(collectionData.collectionByHandle);

  return { props: { category } };
}

export default Shop;
