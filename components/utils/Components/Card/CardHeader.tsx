import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { styles } from "../../index";

export default function CardHeader(props) {
  const { className, children, ...rest } = props;

  return (
    <CardHeaderWrapper className={className} {...rest}>
      {children}
    </CardHeaderWrapper>
  );
}

const CardHeaderWrapper = styled.div<{ plain?: boolean }>`
    border: 0;
    border-radius: 3px;
    margin-bottom: 0;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -30px;
    padding: 0.5rem;
    text-align: center;
    width: auto;

    h4 {
      margin: 0;
    }

    @media (min-width: ${styles.size.tablet}) {
      padding: 1rem 15px;
    }
    
    ${(props) =>
      props.plain &&
      css`
        margin-left: 0px;
        margin-right: 0px;
      `}

    ${(props) =>
      props.color === "warning" &&
      css`
        color: #fff;
        background: linear-gradient(60deg, #ffa726, #fb8c00);
        box-shadow: ${styles.shadows.warningBoxShadow};
      `}

    ${(props) =>
      props.color === "success" &&
      css`
        color: #fff;
        background: linear-gradient(60deg, #66bb6a, #43a047);
        box-shadow: ${styles.shadows.successBoxShadow};
      `};

    ${(props) =>
      props.color === "danger" &&
      css`
        color: #fff;
        background: linear-gradient(60deg, #ef5350, #e53935);
        box-shadow: ${styles.shadows.dangerBoxShadow};
      `};

    ${(props) =>
      props.color === "info" &&
      css`
        color: #fff;
        background: linear-gradient(60deg, #26c6da, #00acc1);
        box-shadow: ${styles.shadows.infoBoxShadow};
      `}

    ${(props) =>
      props.color === "primary" &&
      css`
        color: #fff;
        background: linear-gradient(
            148deg,
            rgba(15, 15, 15, 0.04) 0%,
            rgba(15, 15, 15, 0.04) 35%,
            rgba(113, 113, 113, 0.04) 35%,
            rgba(113, 113, 113, 0.04) 42%,
            rgba(210, 210, 210, 0.04) 42%,
            rgba(210, 210, 210, 0.04) 100%
          ),
          linear-gradient(
            70deg,
            rgba(15, 15, 15, 0.04) 0%,
            rgba(15, 15, 15, 0.04) 25%,
            rgba(113, 113, 113, 0.04) 25%,
            rgba(113, 113, 113, 0.04) 30%,
            rgba(210, 210, 210, 0.04) 30%,
            rgba(210, 210, 210, 0.04) 100%
          ),
          linear-gradient(
            65deg,
            rgba(15, 15, 15, 0.04) 0%,
            rgba(15, 15, 15, 0.04) 13%,
            rgba(113, 113, 113, 0.04) 13%,
            rgba(113, 113, 113, 0.04) 27%,
            rgba(210, 210, 210, 0.04) 27%,
            rgba(210, 210, 210, 0.04) 100%
          ),
          linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0));
        box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),
          0 4px 20px 0px rgba(0, 0, 0, 0.12),
          0 7px 8px -5px rgba(156, 39, 176, 0.2);
      `};
`;

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool,
  children: PropTypes.node,
};
