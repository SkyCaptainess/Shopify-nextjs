import React from "react";
import { FaTruck, FaMapMarkedAlt } from "react-icons/fa";
import OrdersPage from "./Orders/OrdersPage";
import AddressesPage from "./Addresses/AddressesPage";

export default [
  {
    icon: <FaTruck />,
    title: "Orders",
    description: "Show past orders",
    link: "orders",
    component: <OrdersPage />,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Shipping addresses",
    description: "Edit your shipping addresses",
    link: "addresses",
    component: <AddressesPage />,
  },
];
