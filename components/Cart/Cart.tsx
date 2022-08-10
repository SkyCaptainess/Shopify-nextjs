/* eslint-disable react/prop-types */
import React from "react";
import { adopt } from "react-adopt";
import Router from "next/router";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Drawer } from "@material-ui/core";
import { styles, Button, calcTotalPrice, formatMoney } from "../utils";
import CartItem from "./CartItem";
import { CART, CHECKOUT } from "../../constants/routes";

const Cart = () => {
  const goToPage = (closeCartFunc, page) => {
    Router.push({
      pathname: page,
    });
    closeCartFunc();
  };

  return (
    <></>
    // <Composed>
    //   {({ localState, toggleCart }) => {
    //     const cart = data?.cart;
    //     const cartOpen = localState.data ? localState.data.cartOpen : false;

    //     return (
    //       <DrawerWrapper
    //         variant="temporary"
    //         anchor="right"
    //         open={cartOpen}
    //         onClose={toggleCart}
    //       >
    //         <header>
    //           <CloseButton onClick={toggleCart} title="Chiudi">
    //             &times;
    //           </CloseButton>
    //           <CartTitleWrapper>
    //             <ShoppingCartIcon />
    //           </CartTitleWrapper>
    //         </header>
    //         {cart && (
    //           <CartBodyWrapper>
    //             <div className="cart-list">
    //               {cart.cartItems.map((cartItem) => (
    //                 <CartItem cartItem={cartItem} key={cartItem.id} />
    //               ))}
    //             </div>
    //             <div className="cart-footer">
    //               {/* <p>
    //                 Totale:
    //                 {formatMoney(calcTotalPrice(me.cart))}
    //               </p> */}

    //               <Button
    //                 color="primary"
    //                 round
    //                 onClick={() => goToPage(toggleCart, CART)}
    //               >
    //                 <Favorite />
    //                 VAI AL CARRELLO
    //               </Button>
    //               {/* <Button
    //                 fullWidth
    //                 color="success"
    //                 disabled={me.cart.length <= 0}
    //                 aria-busy={me.cart.length <= 0}
    //                 onClick={() => goToPage(toggleCart, CHECKOUT)}
    //               >
    //                 Procedi all'acquisto
    //               </Button> */}
    //             </div>
    //           </CartBodyWrapper>
    //         )}
    //       </DrawerWrapper>
    //     );
    //   }}
    // </Composed>
  );
};

const DrawerWrapper = styled(Drawer)`
  .MuiDrawer-paper {
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border: none;
    border-top: none;
    bottom: 0;
    display: block;
    height: 100vh;
    left: auto;
    overflow-y: visible;
    padding-left: 0;
    padding-right: 0;
    position: fixed;
    right: 0;
    text-align: left;
    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
    transition-property: top, bottom, width;
    transition-duration: 0.2s, 0.2s, 0.35s;
    transition-timing-function: linear, linear, ease;
    top: 0%;
    visibility: visible;
    width: 30vw;
  }
`;

const CloseButton = styled.button`
  background: ${styles.colors.mainBlack};
  border: 0;
  color: ${styles.colors.mainWhite};
  cursor: pointer;
  font-size: 3rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  z-index: 2;
  ${styles.transDefault};
  &:hover {
    background: ${styles.colors.mainWhite};
    border: 1px solid ${styles.colors.mainBlack};
    ${styles.boxColors.primaryBoxShadow};
    color: ${styles.colors.mainBlack};
  }
`;

const CartTitleWrapper = styled.div`
  background: ${styles.colors.mainBlack};
  display: inline-block;
  padding: 1rem;
  margin: 0;

  svg {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
  }
`;

const CartBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 0.8rem;

  .cart-list {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: auto;

    ${styles.ScrollbarCss};
  }

  .cart-footer {
    flex: 0;
    flex-basis: 250px;
    border-top: 10px double ${styles.colors.mainBlack};
    /* margin-top: 2rem; */
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 500;
    p {
      margin: 0;
    }
  }
`;

export default Cart;
