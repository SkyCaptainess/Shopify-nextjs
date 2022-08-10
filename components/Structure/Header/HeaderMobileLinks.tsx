import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ListWrapper, ListItemWrapper } from "./HeaderLinksStyle";
import * as ROUTES from "../../../constants/routes";
import { FPS, GRAPH, RTS } from "../../../constants/categories";

function HeaderMobileLinks() {
  const router = useRouter();

  const isActiveLink = (slug) => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper active={isActiveLink(FPS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={FPS.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${REPAIRS.ICONCLASS}`} /> */}
            {FPS.CODE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(GRAPH.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={GRAPH.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${ALTERATIONS.ICONCLASS}`} /> */}
            {GRAPH.CODE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(RTS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={RTS.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${SHOP.ICONCLASS}`} /> */}
            {RTS.CODE}
          </a>
        </Link>
      </ListItemWrapper>
    </ListWrapper>
  );
}

export default HeaderMobileLinks;
