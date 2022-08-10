import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { styles, calcItemTotalPrice, formatMoney } from "../utils";
import RemoveFromCart from "./RemoveFromCart";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { ITEM } from "../../constants/routes";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import { truncateString } from "../utils/lib/stringUtils";

const CartPageItems: React.FC<{
  cartItems: Array<NexusGenObjects["CartItem"]>;
}> = ({ cartItems }) => (
  <CartItemWrapper>
    {cartItems.map((cartItem) => (
      <CartPageItem key={cartItem.id} cartItem={cartItem} />
    ))}
  </CartItemWrapper>
);

const CartPageItem: React.FC<{ cartItem: NexusGenObjects["CartItem"] }> = ({
  cartItem,
}) => {
  if (!cartItem) return <p>Product no longer in stock!</p>;

  let maxQuantity = cartItem.quantityAvailable;

  return (
    <li>
      <Link href={ITEM} as={`/${cartItem.categoryHandle}/${cartItem.handle}`}>
        <a>
          <img src={cartItem.image} alt={cartItem.title} />
        </a>
      </Link>
      <div className="cartitem">
        <div className="cartitem-title">
          <Link
            href={ITEM}
            as={`/${cartItem.categoryHandle}/${cartItem.handle}`}
          >
            <a>{cartItem.title}</a>
          </Link>
          <div className="cartitem-title-description">
            {truncateString(cartItem.description, 160)}
          </div>
          <div className="cartitem-title-quantity">
            <UpdateCartQuantity
              cartItemId={cartItem.id}
              quantity={cartItem.quantity}
              maxQuantity={maxQuantity}
            />
            <RemoveFromCart cartItemId={cartItem.id} />
          </div>
          {cartItem.note && <NoteWrapper>{cartItem.note}</NoteWrapper>}
        </div>
        <div className="cartitem-price">
          {formatMoney(calcItemTotalPrice(cartItem))}
        </div>
      </div>
    </li>
  );
};

const CartItemWrapper = styled.ul`
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.4rem;

    img {
      cursor: pointer;
      flex: 1 1 80px;
      max-width: 80px;
      max-height: 80px;
    }

    .cartitem {
      flex: 4;

      padding-left: 0.4rem;

      .cartitem-title {
        font-size: 1.4rem;
        font-weight: bold;

        .cartitem-title-description {
          font-size: 1rem;
          font-weight: 300;
        }

        .cartitem-title-quantity {
          a {
            font-size: 0.8rem;
            font-weight: 500;
            margin-left: 0.8rem;
          }
        }
      }

      .cartitem-price {
        border: 1px solid ${styles.colors.lightGrey};
        border-radius: 5px;
        text-align: center;
        font-weight: 500;
      }
    }
  }

  @media (min-width: ${styles.size.laptop}) {
    li {
      margin-right: 1rem;
      border-bottom: 1px solid grey;
      align-items: stretch;

      img {
        flex-basis: 150px;
        max-width: 150px;
        max-height: 150px;
      }

      .cartitem {
        display: flex;
        flex-direction: row;

        .cartitem-title {
          flex: 3;
          height: auto;

          padding-left: 1.4rem;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .cartitem-title-quantity {
            display: flex;
            flex-direction: row;
            margin-bottom: 0.5rem;

            button {
              margin-left: 2rem;
              font-size: 0.8rem;
              align-self: center;
            }
          }
        }

        .cartitem-price {
          border: 0;
          flex: 1;
          text-align: right;
        }
      }
    }
  }
`;

const NoteWrapper = styled.div`
  border: 1px solid ${styles.colors.lightGrey};
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem;
`;

export default CartPageItems;
