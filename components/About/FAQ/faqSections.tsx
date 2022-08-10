import React from "react";
import { FaTruck, FaMapMarkedAlt } from "react-icons/fa";

export default [
  {
    icon: null,
    iconClass: "fas fa-cut",
    title: "Repairs",
    link: "Repairs",
  },
  {
    icon: <FaTruck />,
    title: "Shipping",
    link: "Shipping",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Payments",
    link: "Payment",
  },
];

export const QUESTIONS = [
  {
    type: "Repairs",
    title: "Questions about things",
    questions: [
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping is free in the United States, $30 flat rate per order elsewhere. For deliveries outside of the US, additional import duties may be applied upon receipt of your order.",
      },
      {
        question: "Why ...?",
        answer: "Because I eat a lot of carrots",
      },
    ],
  },
  {
    type: "Shipping",
    title: "Questions about shipping",
    questions: [
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping is free in the United States, $30 flat rate per order elsewhere. For deliveries outside of the US, additional import duties may be applied upon receipt of your order.",
      },
      {
        question: "Why ...?",
        answer: "Because I eat a lot of carrots",
      },
    ],
  },
  {
    type: "Payment",
    title: "Questions about payments",
    questions: [
      {
        question: "What currency are your prices listed in?",
        answer: "All of our prices are in Euro (EUR).",
      },
      {
        question: "Why ...?",
        answer: "Because I eat a lot of carrots",
      },
    ],
  },
];
