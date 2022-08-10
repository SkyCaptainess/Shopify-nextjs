import React from "react";
import Head from "next/head";

import { PageTitle } from "../../utils";
import AddressesList from "./AddressesList";

const AddressesPage = () => (
  <>
    <Head>
      <title>Addresses | Shopify Store</title>
    </Head>
    <PageTitle>My addresses</PageTitle>
    <AddressesList />
  </>
);

export default AddressesPage;
