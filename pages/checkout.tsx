import React from "react";
import Head from "next/head";
import CheckoutLayout from "../components/Structure/Layouts/CheckoutLayout";
import { Checkout } from "../components/Checkout";

const CheckoutPage = () => (
  <>
    <Head>
      <title>Pagamento | La Mosca Nera</title>
    </Head>
    <Checkout />
  </>
);

CheckoutPage.layout = CheckoutLayout;

export default CheckoutPage;
