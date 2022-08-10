import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { styles, formatMoney, calcTotalPrice } from "../utils";

const TotalSummary = ({ me, children }) => {
  const { cart } = me;
  const totalPrice = calcTotalPrice(cart);

  return (
    <CartPaymentWrapper>
      <h3>Ordine</h3>
      <TotalLine title="Articles:" price={formatMoney(totalPrice)} />
      <TotalLine title="Shipments" titleBold priceSuccess price="GRATIS" />
      <hr />
      <TotalLine
        title="Total"
        titleBold
        priceSuccess
        price={formatMoney(totalPrice)}
      />
      {children}
    </CartPaymentWrapper>
  );
};

TotalSummary.propTypes = {
  me: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const TotalLine = ({ title, price, titleBold, priceSuccess }) => (
  <TotalLineWrapper titleBold={titleBold} priceSuccess={priceSuccess}>
    <p className="line-title">{title}</p>
    <p className="line-price">{price}</p>
  </TotalLineWrapper>
);

const CartPaymentWrapper = styled.div`
  width: 100%;
  border: 1px solid ${styles.colors.darkGrey};
  padding: 1rem;
  box-shadow: ${styles.shadows.lightShadow};

  h3 {
    font-size: 1.5rem;
  }

  @media (min-width: ${styles.size.laptop}) {
    padding: 0.5rem;
    order: 1;
  }
`;

TotalLine.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  titleBold: PropTypes.bool,
  priceSuccess: PropTypes.bool,
};

TotalLine.defaultProps = {
  titleBold: false,
  priceSuccess: false,
};

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

export default TotalSummary;
