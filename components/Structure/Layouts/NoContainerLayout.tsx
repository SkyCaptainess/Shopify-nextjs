import React from "react";
import { Header } from "../../utils";

import HeaderLinks from "../Header/HeaderLinks";
import HeaderMobileLinks from "../Header/HeaderMobileLinks";

import Meta from "../Meta";
import FooterContainer from "../Footer/FooterContainer";

const NoContainerLayout = (props) => (
  <>
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
        height: 200,
      }}
    />
    <Meta />
    {/* <CssBaseline />  */}
    {props.children}
    <FooterContainer />
  </>
);

export default NoContainerLayout;
