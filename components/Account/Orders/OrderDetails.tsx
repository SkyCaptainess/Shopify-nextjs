import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import { styles, formatMoney, BouncingLoader } from "../../utils";
import { ITEM } from "../../../constants/routes";
import useOrder from "../../../frontend-structure/order/hooks/useOrder";

const OrderDetails = ({ orderId }) => {
  const [data, loading] = useOrder(orderId);

  if (loading) return <BouncingLoader />;
  const { order } = data;

  return (
    <OrderDetailsWrapper>
      <Hidden smDown>
        <div className="items-list items-header">
          <div />
          <div>Prodotto</div>
          <div>Quantità</div>
          <div>Totale</div>
        </div>
      </Hidden>
      {order.orderItems.map((lineItem) => (
        <div key={lineItem.title}>
          <Hidden smDown>
            <div className="items-list">
              <Link
                href={`/${lineItem.categoryHandle}/${lineItem.productHandle}`}
              >
                <a>
                  <img src={lineItem.image} alt={lineItem.title} />
                </a>
              </Link>
              <div className="item-title">{lineItem.title}</div>
              <div>{lineItem.quantity}</div>
              <div>{formatMoney(lineItem.total)}</div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className="items-mobile-list">
              <Link
                href={`/${lineItem.categoryHandle}/${lineItem.productHandle}`}
              >
                <img src={lineItem.image} alt={lineItem.title} />
              </Link>
              <div className="item-info">
                <div>
                  Quantità:
                  {lineItem.quantity}
                </div>
                <div>
                  Totale:
                  {formatMoney(lineItem.total)}
                </div>
              </div>
            </div>
          </Hidden>
        </div>
      ))}
    </OrderDetailsWrapper>
  );
};

const OrderDetailsWrapper = styled.div`
  ${styles.transDefault};
  border: 1px solid black;
  padding: 1rem;

  .items-list {
    display: grid;
    grid-template-columns: 80px 2fr repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 1rem;
    border-bottom: 1px dotted ${styles.colors.lightGrey};

    img {
      width: 50px;
      cursor: pointer;
    }
  }

  .items-mobile-list {
    display: flex;

    img {
      width: 50px;
      margin-right: 1rem;
    }

    .item-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .item-title {
    font-weight: 600;
  }

  .items-header {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default OrderDetails;
