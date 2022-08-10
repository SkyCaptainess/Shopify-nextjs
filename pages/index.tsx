import React from "react";
import {
  Parallax,
  ContainerWrapper,
  MainRaisedWrapper,
} from "../components/utils";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import FrontPageCategories from "../components/Home/FrontPageCategories";
import NoContainerLayout from "../components/Structure/Layouts/NoContainerLayout";
import { manageProducts } from "../graphql-shopify/product/functions";
import { createShopifyGraphql } from "../graphql-shopify/context";
import QUERY_GET_PRODUCTS, {
  GetAllProductsQueryType,
} from "../graphql-shopify/product/queries/QUERY_GET_PRODUCTS";
import { InferGetStaticPropsType } from "next";
import QUERY_GET_COLLECTIONS, {
  QueryGetCollectionsType,
} from "../graphql-shopify/category/queries/QUERY_GET_COLLECTIONS";
import { categoriesFromPrisma } from "../graphql-shopify/category/functions";
import { Collection } from "../generated/shopify.model";
import { NexusGenObjects } from "../generated/nexus-typegen";
import { manageCollectionConnection } from "../graphql-shopify/category/functions/manage-collection";

const Home = ({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Parallax image="/images/fantasy-land.jpg">
        <ContainerWrapper></ContainerWrapper>
      </Parallax>
      <MainRaisedWrapper>
        <ContainerWrapper>
          {categories && categories.length && (
            <FrontPageCategories categories={categories} />
          )}
          {products && <FeaturedProducts products={products} />}
        </ContainerWrapper>
      </MainRaisedWrapper>
    </>
  );
};

export async function getStaticProps() {
  const graphqlClient = createShopifyGraphql();

  let featuredProducts: Array<NexusGenObjects["Product"]> = [];
  const productsData = await graphqlClient.request<GetAllProductsQueryType>(
    QUERY_GET_PRODUCTS,
    {
      query: "tag:featured",
    }
  );
  featuredProducts = await manageProducts(productsData.products);

  const collectionsData = await graphqlClient.request<QueryGetCollectionsType>(
    QUERY_GET_COLLECTIONS,
    { first: 250 }
  );

  let frontCategories: Array<NexusGenObjects["Category"]> = await manageCollectionConnection(
    collectionsData.collections
  );

  return {
    props: {
      products: featuredProducts,
      categories: frontCategories,
    },
  };
}

Home.Layout = NoContainerLayout;

export default Home;
