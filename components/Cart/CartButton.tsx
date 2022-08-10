import React from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Link from "next/link";
import { CART } from "../../constants/routes";
import QUERY_GET_CART from "../../frontend-structure/checkout/queries/QUERY_GET_CART";
import useCart from "../../frontend-structure/checkout/hooks/useCart";

const CartButton = (props) => {
  const [data, loading] = useCart();
  // const { data, loading } = useQuery(QUERY_GET_CART);

  const getCartItems = (cartItems) =>
    cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  return (
    <Link href={CART}>
      <a className="navLink">
        <ShoppingCartIcon />
        {data?.cart?.cartItems && (
          <Dot>{getCartItems(data.cart.cartItems)}</Dot>
        )}
      </a>
    </Link>
  );
};

const Dot = styled.div`
  background: red;
  color: white;
  border-radius: 50%;
  min-width: 1rem;
  font-weight: 100;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`;

export default CartButton;
