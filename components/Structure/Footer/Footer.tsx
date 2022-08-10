import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { styles, Container } from "../../utils";

const Footer = () => (
  <FooterWrapper>
    <div className="footer-container">
      <Link href="/" as="/">
        <img className="logo" src="/favicon.png" alt="@escapemanuele Shopify Store logo" />
      </Link>
    </div>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background-color: ${styles.colors.primaryColor};
  border-radius: 3px;
  color: ${styles.colors.mainWhite};
  margin-top: 3rem;

  .footer-container {
    ${Container};
  }
`;

export default Footer;
