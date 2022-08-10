import React from "react";
import Link from "next/link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useRouter } from "next/router";
import { ListWrapper, ListItemWrapper } from "./FooterMobileDrawLinksStyle";
import { Button, Dropdown } from "../../../utils";
import SignOutButton from "../../../Signin/SignOutButton";
import LoginButton from "../../../Signin/LoginButton";
import { FPS, GRAPH, RTS } from "../../../../constants/categories";
import * as ROUTES from "../../../../constants/routes";
import useCustomer from "../../../../frontend-structure/user/hooks/useCustomer";
import { NexusGenObjects } from "../../../../generated/nexus-typegen";

const FooterMobileDrawLinks = () => {
  const router = useRouter();
  const [user, hasUser] = useCustomer();

  const isActiveLink = (slug) => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper>
        <Button
          color="transparent"
          href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
          target="_blank"
          className="navLink"
        >
          <i className="socialIcons fab fa-instagram" />
        </Button>
      </ListItemWrapper>
      <ListItemWrapper active={router.pathname === ROUTES.CART}>
        <Link href={ROUTES.CART}>
          <a className="navLink">
            <ShoppingCartIcon />
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(FPS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={FPS.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${FPS.ICONCLASS}`} />
            {FPS.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(GRAPH.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={GRAPH.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${GRAPH.ICONCLASS}`} />
            {GRAPH.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(RTS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={RTS.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${RTS.ICONCLASS}`} />
            {RTS.TITLE}
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
        <FooterAuth user={user} />
      </ListItemWrapper>
    </ListWrapper>
  );
};

const FooterAuth = ({ user }: { user: NexusGenObjects["User"] }) => {
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
          <Link href="/account">
            <a className="dropdownLink">Il mio account</a>
          </Link>,
          <SignOutButton className="dropdownLink" />,
        ]}
      />
    );
  } else {
    return <LoginButton color="primary" className="navLink" />;
  }
};

export default FooterMobileDrawLinks;
