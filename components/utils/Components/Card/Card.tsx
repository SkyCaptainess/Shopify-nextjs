import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export default function Card(props) {
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    cardPlain: plain,
    cardCarousel: carousel,
    [className]: className !== undefined,
  });

  return (
    <CardWrapper className={cardClasses} {...rest}>
      {children}
    </CardWrapper>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  cardHidden: PropTypes.bool,
  children: PropTypes.node,
};

const CardWrapper = styled.div<{ cardHidden?: boolean }>`
  background: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  margin-bottom: 30px;
  margin-top: 30px;
  min-width: 0;
  position: relative;
  transition: all 300ms linear;
  width: 100%;
  word-wrap: break-word;

  .cardPlain {
    background: transparent;
    box-shadow: none;
  }

  .cardCarousel {
    overflow: hidden;
  }

  ${(props) =>
    props.cardHidden &&
    css`
      transform: translate3d(0, -60px, 0);
      opacity: 0;
    `}
`;
