import React from "react";
import styled from "styled-components";
import { styles } from ".";

export const ImageBordered = ({ image, alt = "Immagine" }) => (
  <ImageBorderedWrapper>
    <div className="imgContainer">
      <img src={image} alt={alt} />
    </div>
  </ImageBorderedWrapper>
);

const ImageBorderedWrapper = styled.article`
  position: relative;
  display: block;
  box-shadow: ${styles.shadows.lightShadow};
  margin: 3rem 0;

  img {
    width: 100%;
    display: block;
    box-shadow: ${styles.shadows.lightShadow};
    /* object-fit: cover; */
  }

  @media screen and (min-width: ${styles.size.laptop}) {
    margin: 0;
    img {
      max-height: 500px;
    }

    .imgContainer::before {
      max-height: 500px;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid ${styles.colors.mainBlack};
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
      ${styles.transDefault};
    }
  }
`;
