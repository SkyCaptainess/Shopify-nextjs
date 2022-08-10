import React from "react";
import styled from "styled-components";
import Head from "next/head";

import CartPageItems from "../components/Cart/CartPageItems";
import { styles, calcTotalItems, BouncingLoader } from "../components/utils";
import CartPayment from "../components/Cart/CartPayment";
import { PageTitle } from "../components/utils";
import useCart from "../frontend-structure/checkout/hooks/useCart";

const CartPage: React.FC = () => {
  const [data, loading] = useCart();

  return (
    <>
      <Head>
        <title>Cart | @escapemanuele shop</title>
      </Head>
      {(() => {
        if (!data) {
          return <BouncingLoader />;
        }

        if (
          !data.cart ||
          !data.cart.cartItems ||
          data.cart.cartItems.length === 0
        ) {
          return <EmptyCart />;
        }

        return (
          <>
            <PageTitle>
              Cart (
              {data?.cart?.cartItems
                ? calcTotalItems(data?.cart.cartItems)
                : "0 items"}
              )
            </PageTitle>
            <CartPageWrapper>
              {data.cart.cartItems && (
                <>
                  <CartPayment cartItems={data.cart.cartItems} />
                  <CartPageItems cartItems={data.cart.cartItems} />
                </>
              )}
            </CartPageWrapper>
          </>
        );
      })()}
    </>
  );
};

const EmptyCart = () => <EmptyWrapper>Il tuo carrello è vuoto!</EmptyWrapper>;

const EmptyWrapper = styled.div`
  border: 1px solid ${styles.colors.lightGrey};
  ${styles.boxColors.primaryBoxShadow};
  font-weight: 700;
  padding: 2rem;
  text-align: center;

  @media (min-width: ${styles.size.tablet}) {
    margin-top: 3rem;
  }
`;

const CartPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${styles.size.laptop}) {
    grid-template-columns: 3fr 1fr;
  }
`;

export default CartPage;
