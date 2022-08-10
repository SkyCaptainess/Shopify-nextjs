import React from "react";
import { styles, PageTitle, Carousel } from "../../utils";
import styled from "styled-components";
import { bool } from "prop-types";

const HowItWorksOnline = () => {
  return (
    <HowItWorksWrapper>
      <PageTitle>How does the ecommerce work?</PageTitle>
      <Carousel white={true} /*className="presentation-mode"*/>
        <CarouselItem
          image="/images/shop.png"
          title="Buy what you need"
          subtitle="Eeeeverything that you need!"
          animation={styles.animations.rotate}
          animationDuration="4s infinite"
        />
        {/* <CarouselItem
          image="/images/package.png"
          title="Inviami i tuoi capi in laboratorio"
          subtitle="Metti i vestiti in un pacco e prenota il ritiro da parte del corriere"
          animation={styles.animations.pulse}
        /> */}
        <CarouselItem
          image="/images/sarta.png"
          title="I will work on your order"
          animation={styles.animations.pulse}
        />
        <CarouselItem
          image="/images/consegna-gratuita.png"
          title="You will receive the package as soon as possible!"
        />
      </Carousel>
    </HowItWorksWrapper>
  );
};

interface CarouselItemType {
  image: any;
  title: string;
  subtitle?: string;
  animation?: any;
  animationDuration?: string;
}

const CarouselItem = ({
  image,
  title,
  subtitle,
  animation,
  animationDuration,
}: CarouselItemType) => (
  <CarouselItemWrapper
    animation={animation}
    animationDuration={animationDuration}
  >
    <div className="image">
      <img src={image} alt={title} />
    </div>
    <div className="content">
      {title && <div className="itemcontent content-title">{title}</div>}
      {subtitle && (
        <div className="itemcontent content-subtitle">{subtitle}</div>
      )}
    </div>
  </CarouselItemWrapper>
);

const HowItWorksWrapper = styled.div`
  .slide {
  }
`;

const CarouselItemWrapper = styled.div<{
  animation?: any;
  animationDuration?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;

  .image {
    flex: 1;

    border-bottom: 1rem;
    padding-bottom: 1rem;
    text-align: center;

    img {
      animation: ${(props) => props.animation}
        ${(props) =>
          props.animationDuration ? props.animationDuration : "3s infinite"};
      width: 10rem;
    }
  }

  .content {
    flex: 1;

    display: flex;
    flex-direction: column;

    .itemcontent {
      background: ${styles.colors.primaryColor};
      border: 1px solid ${styles.colors.mainBlack};
      border-radius: 5px;
      color: ${styles.colors.mainWhite};
      margin-bottom: 1.3rem;
      padding: 1rem;
      text-align: center;
    }

    .content-title {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1;
    }
  }

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;

    width: 80%;

    .content {
      .itemcontent {
        padding: 2rem;
      }
    }
  }
`;

export default HowItWorksOnline;
