import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import Link from "next/link";
import { ButtonWrapper, ButtonAWrapper } from "./ButtonStyle";

const RegularButton = (props) => {
  const { children, className, href, internal, type, ...rest } = props;

  return type ? (
    <ButtonWrapper type={type} {...rest} className={className}>
      {children}
    </ButtonWrapper>
  ) : internal ? (
    <Link href={href}>
      <ButtonAWrapper {...rest} className={className}>
        {children}
      </ButtonAWrapper>
    </Link>
  ) : href ? (
    <ButtonAWrapper {...rest} href={href} className={className}>
      {children}
    </ButtonAWrapper>
  ) : (
    <ButtonAWrapper {...rest} className={className}>
      {children}
    </ButtonAWrapper>
  );
};

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "instagram",
    "github",
    "whatsapp",
    "transparent",
    "transparentBorded",
  ]),
  autoFocus: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  simple: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  internal: PropTypes.bool,
  target: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  widthMobile: PropTypes.string,
  onClick: PropTypes.func,
};

RegularButton.defaultProps = {
  color: "primary",
  href: "",
  size: "lg",
  simple: false,
  fullWidth: false,
  width: null,
  widthMobile: null,
  disabled: false,
  justIcon: false,
  children: null,
  className: "",
  link: false,
  internal: false,
};

export default RegularButton;
