import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import {
  customIndicators,
  customArrowPrev,
  customArrowNext,
} from "./CarouselStyles";

interface CarouselType {
  infiniteLoop?: boolean;
  white?: any;
  background?: any;
  children?: any;
}

const CarouselComponent = ({
  infiniteLoop = false,
  white,
  background,
  children,
}: CarouselType) => {
  let additionalProps: AdditionalPropsType = {};

  if (white) {
    additionalProps.renderIndicator = customIndicators;
    additionalProps.renderArrowPrev = customArrowPrev;
    additionalProps.renderArrowNext = customArrowNext;
  }

  return (
    <StyledCarousel
      background={background}
      showStatus={false}
      infiniteLoop={infiniteLoop}
      showThumbs={false}
      {...additionalProps}
    >
      {children}
    </StyledCarousel>
  );
};

interface AdditionalPropsType {
  renderIndicator?: any;
  renderArrowPrev?: any;
  renderArrowNext?: any;
}

const StyledCarousel = styled(Carousel)<{ background: string }>`
  .slide {
    background: ${(props) => props.background || "#fff"};
  }
`;

export default CarouselComponent;
