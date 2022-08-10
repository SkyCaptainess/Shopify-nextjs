import React from "react";
import styled from "styled-components";
import OrderSingleItem from "./OrderSingleItem";
import { styles } from "../../utils";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

interface ListOrderProps {
  orders: Array<NexusGenObjects["Order"]>;
}

const OrdersList: React.FC<ListOrderProps> = ({ orders = [] }) => {
  return (
    <div>
      {orders && orders.length > 0 ? (
        <OrdersListWrapper>
          <li className="orderlist_header">
            <div>Data</div>
            <div>Totale</div>
            <div>Stato Ordine</div>
          </li>
          <hr />
          {orders.map((order) => (
            <OrderSingleItem key={order.id} order={order} />
          ))}
        </OrdersListWrapper>
      ) : (
        <p>Nessun ordine presente</p>
      )}
    </div>
  );
};

const OrdersListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;

  .orderlist_header {
    display: none;
  }

  @media (min-width: ${styles.size.tablet}) {
    .orderlist_header {
      display: grid;
      grid-template-columns: repeat(3, 1fr) 80px;
      justify-items: center;

      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;

export default OrdersList;
