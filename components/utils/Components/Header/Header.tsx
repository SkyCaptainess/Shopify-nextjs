import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import debounce from "debounce";
import NProgress from "nprogress";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components

import Hidden from "@material-ui/core/Hidden";
import Button from "../Button/Button";

import { ToolbarWrapper, AppBarWrapper } from "./HeaderStyles";

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useLogo, setUseLogo] = useState(false);
  const [headerColor, setHeaderColor] = useState(props.color || "white");

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    if (props.changeBrandOnScroll) {
      window.addEventListener("scroll", headerBrandChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
      if (props.changeBrandOnScroll) {
        window.removeEventListener("scroll", headerBrandChange);
      }
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = debounce(() => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      setHeaderColor(changeColorOnScroll.color);
    } else {
      setHeaderColor(color);
    }
  }, 200);

  const headerBrandChange = debounce(() => {
    const { changeBrandOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeBrandOnScroll.height) {
      setUseLogo(true);
    } else if (windowsScrollTop < changeBrandOnScroll.height) {
      setUseLogo(false);
    }
  }, 200);

  const { rightLinks, leftLinks, mobileLinks, brand, ...rest } = props;

  const brandComponent = (
    <Button color="transparent" href="/" internal className="brandTitle">
      {brand}
    </Button>
  );

  const logoComponent = (
    <Link href="/" as="/">
      <img className="logo" src="/favicon.png" />
    </Link>
  );

  return (
    <AppBarWrapper {...rest} color={headerColor}>
      <Hidden smDown>
        <ToolbarWrapper>
          <div className="flex">{useLogo ? logoComponent : brandComponent}</div>
          {rightLinks}
        </ToolbarWrapper>
      </Hidden>
      <Hidden mdUp>
        <ToolbarWrapper>
          <div className="flex">{logoComponent}</div>
          {mobileLinks}
        </ToolbarWrapper>
      </Hidden>
      {/* <Cart /> */}
    </AppBarWrapper>
  );
}

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "transparent",
    "overylayBlack",
    "white",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  mobileLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "success",
      "warning",
      "danger",
      "transparent",
      "overylayBlack",
      "white",
      "dark",
    ]).isRequired,
  }),
  // this will cause the sidebar to change from brand to logo
  changeBrandOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
  }),
};
