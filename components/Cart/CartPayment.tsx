import React from "react";
import styled, { css } from "styled-components";
import { styles, Button, calcTotalPrice, formatMoney } from "../utils";
import { CHECKOUT } from "../../constants/routes";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import { string } from "prop-types";

interface CartPaymentProp {
  cartItems: Array<NexusGenObjects["CartItem"]>;
}

const CartPayment = ({ cartItems }: CartPaymentProp) => (
  <CartPaymentWrapper>
    <h3>Total</h3>
    <TotalLine
      title="Total for article:"
      price={formatMoney(calcTotalPrice(cartItems))}
    />
    <hr />
    <TotalLine title="Shipment" titleBold priceSuccess price="GRATIS" />
    {cartItems.length && (
      <Button fullWidth size="lg" color="success" href={CHECKOUT} internal>
        Continue to checkout
      </Button>
    )}
  </CartPaymentWrapper>
);

interface TotalLineProp {
  title: string;
  price: string;
  titleBold?: boolean;
  priceSuccess?: boolean;
}

const TotalLine = ({
  title,
  price,
  titleBold = false,
  priceSuccess = false,
}: TotalLineProp) => (
  <TotalLineWrapper titleBold={titleBold} priceSuccess={priceSuccess}>
    <p className="line-title">{title}</p>
    <p className="line-price">{price}</p>
  </TotalLineWrapper>
);

const CartPaymentWrapper = styled.div`
  width: 100%;

  h3 {
    font-size: 1.5rem;
  }

  a {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${styles.size.laptop}) {
    border: 1px solid ${styles.colors.lightGrey};
    border-radius: 5px;
    ${styles.boxColors.primaryBoxShadow};
    padding: 0.5rem;
    order: 1;
  }
`;

const TotalLineWrapper = styled.div<{
  titleBold: boolean;
  priceSuccess: boolean;
}>`
  display: flex;
  justify-content: space-between;

  .line-title {
    ${(props) =>
      props.titleBold &&
      css`
        font-weight: bold;
      `}
  }

  .line-price {
    ${(props) =>
      props.priceSuccess &&
      css`
        color: ${styles.colors.successColor};
      `}
  }
`;

export default CartPayment;
