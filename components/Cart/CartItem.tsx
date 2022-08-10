import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import RemoveFromCart from "./RemoveFromCart";
import { styles, formatMoney } from "../utils";
import { ITEM } from "../../constants/routes";

const CartItem = ({ cartItem }) => {
  if (!cartItem) {
    return <p>Questo elemento è stato rimosso!</p>;
  }

  return (
    <CartItemWrapper>
      {/* <Link href={ITEM} as={`/${item.category.slug}/${item.slug}`}>
        <a>
          <img src={item.image} alt={item.title} />
        </a>
      </Link> */}
      <div className="cart-item-details">
        <h3>{cartItem.title}</h3>
        <p>
          {/* {formatMoney(item.price * cartItem.quantity)} */}
          {" - "}
          <em>
            {cartItem.quantity} &times;
            {formatMoney(cartItem.price)}
          </em>
        </p>
      </div>
      <RemoveFromCart cartItemId={cartItem.id} />
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      shortDescription: PropTypes.string,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

const CartItemWrapper = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${styles.colors.mainGrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
    width: 4rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

export default CartItem;
