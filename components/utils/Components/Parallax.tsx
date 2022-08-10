import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { styles } from "..";

export default function Parallax(props) {
  let windowScrollTop;
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  const [transform, setTransform] = useState("translate3d(0,0px,0)");
  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  const { children, style, ...rest } = props;

  return (
    <ParallaxWrapper
      {...rest}
      style={{
        transform,
      }}
    >
      {children}
    </ParallaxWrapper>
  );
}

const ParallaxWrapper = styled.div<{
  image?: string;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  responsive?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${(props) => props.image});
    background-position: center top;
    background-size: cover;
    border: 0;
    height: 90vh;
    margin: 0;
    max-height: 1000px;
    overflow: hidden;
    padding: 0;
    position: relative;

    ${(props) =>
      props.xsmall &&
      css`
        height: 30vh;
      `}

    ${(props) =>
      props.small &&
      css`
        height: 50vh;
      `}

    ${(props) =>
      props.medium &&
      css`
        height: 65vh;
      `}

    ${(props) =>
      props.responsive &&
      css`
        @media (max-width: ${styles.size.tablet}) {
          min-height: 660px;
        }
      `}
`;

Parallax.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  // this will add a min-height of 660px on small screens
  responsive: PropTypes.bool,
};
