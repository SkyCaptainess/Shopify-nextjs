import React from "react";
import styled from "styled-components";
import {
  styles,
  MainRaisedWrapper,
  ContainerWrapper,
  Header,
  Parallax,
} from "../../utils";
import HeaderLinks from "../Header/HeaderLinks";
import HeaderMobileLinks from "../Header/HeaderMobileLinks";
import Meta from "../Meta";
import FooterContainer from "../Footer/FooterContainer";

const PageLayout = (props) => (
  <StyledPage>
    <Header
      brand="Escapemanuele Store"
      rightLinks={<HeaderLinks />}
      mobileLinks={<HeaderMobileLinks />}
      fixed
      color="overylayBlack"
      changeColorOnScroll={{
        height: 200,
        color: "white",
      }}
      changeBrandOnScroll={{
        height: 160,
      }}
    />
    <Meta />
    <div>
      <Parallax xsmall image="/images/profile-bg.jpg" />
      <MainRaisedWrapper>
        <ContainerWrapper>{props.children}</ContainerWrapper>
      </MainRaisedWrapper>
    </div>
    <FooterContainer />
  </StyledPage>
);

const StyledPage = styled.div`
  background: white;
  box-sizing: border-box;
  color: ${styles.colors.mainBlack};

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 100px;
    line-height: 2;
  }
`;

export default PageLayout;
