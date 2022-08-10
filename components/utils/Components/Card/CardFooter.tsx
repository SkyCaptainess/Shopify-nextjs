import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../index";

export default function CardFooter(props) {
  const { children, ...rest } = props;

  return <CardFooterWrapper {...rest}>{children}</CardFooterWrapper>;
}

const CardFooterWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: 0;
  border-radius: 6px;
  justify-content: center !important;
  padding: 0.5rem 1.875rem;
  padding-top: 0rem;

  .cardFooterLink {
    cursor: pointer;
    ${styles.transFunction("all", "0.4s", "ease-in")};

    &:hover {
      color: #000;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  @media (min-width: ${styles.size.tablet}) {
    padding: 0.9375rem 1.875rem;
  }
`;

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
