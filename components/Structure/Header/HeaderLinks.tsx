import React from "react";
import Link from "next/link";

// @material-ui/core components
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { useRouter } from "next/router";
import { Button, Dropdown } from "../../utils";

import LoginButton from "../../Signin/LoginButton";
import SignOutButton from "../../Signin/SignOutButton";
import CartButton from "../../Cart/CartButton";
import * as ROUTES from "../../../constants/routes";
import { FPS, GRAPH, RTS } from "../../../constants/categories";

import { ListWrapper, ListItemWrapper } from "./HeaderLinksStyle";
import useCustomer from "../../../frontend-structure/user/hooks/useCustomer";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

function HeaderLinks() {
  const router = useRouter();

  const [user] = useCustomer();

  const isActiveLink = (slug) => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper active={isActiveLink(FPS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={FPS.SLUG}>
          <a className="navLink">
            <Tooltip
              id="repair-tooltip"
              title="Ripara i tuoi abiti"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${FPS.ICONCLASS}`} />
                {FPS.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(GRAPH.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={GRAPH.SLUG}>
          <a className="navLink">
            <Tooltip
              id="alterations-tooltip"
              title="Alter and change it!"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${GRAPH.ICONCLASS}`} />
                {GRAPH.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(RTS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={RTS.SLUG}>
          <a className="navLink">
            <Tooltip
              id="shop-tooltip"
              title="Visit the Shop"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${RTS.ICONCLASS}`} />
                {RTS.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper>
        <Dropdown
          caret
          noLiPadding
          navDropdown
          buttonText="Info"
          buttonProps={{
            className: "navLink",
            color: "transparent",
          }}
          buttonIcon={HelpOutlineIcon}
          dropdownList={[
            <Link href={ROUTES.HOWITWORKS}>
              <a className="dropdownLink">How</a>
            </Link>,
            <Link href={ROUTES.FAQ}>
              <a className="dropdownLink">FAQ</a>
            </Link>,
            <Link href={ROUTES.CONTACTS}>
              <a className="dropdownLink">Contacts</a>
            </Link>,
          ]}
        />
      </ListItemWrapper>
      <ListItemWrapper>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Instagram :)"
          placement="bottom"
        >
          <span>
            <Button
              color="transparent"
              href="https://www.instagram.com/"
              target="_blank"
              className="navLink"
            >
              <i className="socialIcons fab fa-instagram" />
            </Button>
          </span>
        </Tooltip>
      </ListItemWrapper>
      <ListItemWrapper>
        <Tooltip id="cart-tooltip" title="Cart" placement="bottom">
          <span>
            <CartButton color="transparent" className="navLink" />
          </span>
        </Tooltip>
      </ListItemWrapper>
      <ListItemWrapper>
        <HeaderAuth user={user} />
      </ListItemWrapper>
    </ListWrapper>
  );
}

const HeaderAuth = ({ user }: { user: NexusGenObjects["User"] }) => {
  if (user) {
    return (
      <Dropdown
        caret
        noLiPadding
        navDropdown
        buttonText={user.displayName}
        buttonProps={{
          className: "navLink",
          color: "transparent",
        }}
        buttonIcon={AccountCircle}
        dropdownList={[
          <Link href={ROUTES.ACCOUNT}>
            <a className="dropdownLink">My account</a>
          </Link>,
          <SignOutButton className="dropdownLink" />,
        ]}
      />
    );
  }

  return (
    <Tooltip
      id="login-tooltip"
      title="Accedi al tuo account"
      placement="bottom"
    >
      <span>
        <LoginButton color="primary" className="navLink" />
      </span>
    </Tooltip>
  );
};

export default HeaderLinks;
