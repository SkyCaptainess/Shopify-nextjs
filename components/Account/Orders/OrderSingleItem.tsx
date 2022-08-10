import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/ArrowRight";
import {
  Button,
  formatMoney,
  formatOrderStatus,
  formatDate,
  styles,
} from "../../utils";
import OrderDetails from "./OrderDetails";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

interface SingleOrderProp {
  order: NexusGenObjects["Order"];
}

const OrderSingleItem = ({ order }: SingleOrderProp) => {
  const [showDetails, setShowDetails] = useState(false);

  const { id, processedAt, amount, fulfillment } = order;

  return (
    <>
      <Hidden smDown>
        <OrderItemWrapper>
          <div>{formatDate(processedAt)}</div>
          <div>{formatMoney(amount)}</div>
          <div>{formatOrderStatus(fulfillment)}</div>
          <Button
            color="primary"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "X" : "Dettagli"}
          </Button>
        </OrderItemWrapper>
      </Hidden>
      <Hidden mdUp>
        <OrderItemMobileWrapper onClick={() => setShowDetails(!showDetails)}>
          <div className="orderInfo">
            <div>{formatDate(processedAt)}</div>
            <div>{formatMoney(amount)}</div>
          </div>
          <div>{formatOrderStatus(fulfillment)}</div>
          <ArrowRight className={showDetails ? "arrowDown" : ""} />
        </OrderItemMobileWrapper>
      </Hidden>
      {showDetails && <OrderDetails orderId={id} />}
    </>
  );
};

const OrderItemWrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 80px;
  justify-items: center;
  align-items: center;
`;

const OrderItemMobileWrapper = styled.li`
  border-bottom: 1px solid ${styles.colors.lightGrey};
  ${styles.transDefault};

  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    font-size: 2rem;
    ${styles.transDefault};
  }

  svg.arrowDown {
    transform: rotate(90deg);
  }
`;

export default OrderSingleItem;
