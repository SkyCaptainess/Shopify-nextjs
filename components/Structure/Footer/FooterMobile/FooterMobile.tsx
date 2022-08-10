import React, { useState } from "react";
import styled from "styled-components";

import Drawer from "@material-ui/core/Drawer";
import { styles } from "../../../utils";
import FooterMobileIcons from "./FooterMobileIcons";
import FooterMobileDrawLinks from "./FooterMobileDrawLinks";

const FooterMobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <FooterMobileWrapper>
      <FooterMobileIcons handleDrawerToggle={handleDrawerToggle} />
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <FooterMobileDrawLinks />
      </StyledDrawer>
    </FooterMobileWrapper>
  );
};

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    bottom: 0;
    flex: 1 0 auto;
    display: flex;
    outline: 0;
    z-index: 1200;
    padding-bottom: 10vh;
    position: fixed;
    overflow-y: auto;
    flex-direction: column;
  }
`;

const FooterMobileWrapper = styled.footer`
  background-color: ${styles.colors.primaryColor};
  border-radius: 3px;
  color: ${styles.colors.mainWhite};

  position: fixed;
  bottom: 0;

  z-index: 1200;

  width: 100%;

  .drawerPaper {
    border: none;
    bottom: 0;
    transition-property: top, bottom, width;
    transition-duration: 0.2s, 0.2s, 0.35s;
    transition-timing-function: linear, linear, ease;
    width: ${styles.drawerWidth}px;
    ${styles.boxShadow};
    position: fixed;
    display: block;
    top: 0;
    height: 80vh;
    right: 0;
    left: auto;
    visibility: visible;
    overflow-y: visible;
    border-top: none;
    text-align: left;
    padding-right: 0px;
    padding-left: 0;
    ${styles.transBezier};
  }
`;

export default FooterMobile;
