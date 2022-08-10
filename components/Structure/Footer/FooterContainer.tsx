import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile/FooterMobile";

const FooterContainer = () => (
  <FooterContainerWrapper>
    <div className="default-footer">
      <Footer />
    </div>
    <div className="mobile-footer">
      <FooterMobile />
    </div>
  </FooterContainerWrapper>
);

const FooterContainerWrapper = styled.div`
  .default-footer {
    display: none;
  }

  .mobile-footer {
    display: block;
  }

  @media (min-width: ${styles.size.tablet}) {
    .default-footer {
      display: block;
    }

    .mobile-footer {
      display: none;
    }
  }
`;

export default FooterContainer;
