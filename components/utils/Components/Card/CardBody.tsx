import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { styles } from "../../index";

// core components

export default function CardBody(props) {
  const { children, ...rest } = props;

  return <CardBodyWrapper {...rest}>{children}</CardBodyWrapper>;
}

const CardBodyWrapper = styled.div`
  padding: 0.5rem 1rem;
  flex: 1 1 auto;

  @media (min-width: ${styles.size.tablet}) {
    padding: 0.9375rem 1.875rem;
  }
`;
CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
