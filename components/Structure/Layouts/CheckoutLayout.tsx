import React from "react";
import styled from "styled-components";
import {
  styles,
  MainRaisedWrapper,
  ContainerWrapper,
  Parallax,
  Header,
} from "../../utils";

import Meta from "../Meta";

const CheckoutLayout = (props) => (
  <StyledPage>
    <Header brand="Escapemanuele Store" color="white" />
    <Meta />
    <div>
      <Parallax xsmall image={require("public/images/profile-bg.jpg")} />
      <MainRaisedWrapper>
        <ContainerWrapper>{props.children}</ContainerWrapper>
      </MainRaisedWrapper>
    </div>
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

export default CheckoutLayout;
