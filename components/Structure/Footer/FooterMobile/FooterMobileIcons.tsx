import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import CartButton from "../../../Cart/CartButton";
import { ListWrapper, ListItemWrapper } from "./FooterMobileIconsStyle";
import * as ROUTES from "../../../../constants/routes";
import useCustomer from "../../../../frontend-structure/user/hooks/useCustomer";

const FooterMobileIcons = ({ handleDrawerToggle }) => {
  const router = useRouter();
  const [_, hasUser] = useCustomer();

  return (
    <ListWrapper>
      <ListItemWrapper active={router.pathname === ROUTES.HOME}>
        <Link href={ROUTES.HOME}>
          <a className="navLink">
            <Home />
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={router.pathname === ROUTES.CART}>
        <CartButton isLink />
      </ListItemWrapper>
      <ListItemWrapper active={router.pathname === ROUTES.ACCOUNT}>
        {hasUser ? (
          <Link href={ROUTES.ACCOUNT}>
            <a className="navLink">
              <AccountCircle />
            </a>
          </Link>
        ) : (
          <Link href={ROUTES.LOGIN}>
            <a className="navLink">
              <AccountCircle />
            </a>
          </Link>
        )}
      </ListItemWrapper>
      <ListItemWrapper>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
      </ListItemWrapper>
    </ListWrapper>
  );
};

FooterMobileIcons.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default FooterMobileIcons;
