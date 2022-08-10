import { bool } from "prop-types";
import styled, { css } from "styled-components";
import { styles } from "../../../utils";

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  color: inherit;
  font-size: 1rem;
  list-style: none;
  margin: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-top: 0;
`;

export const ListItemWrapper =
  styled.li <
    { active?: boolean } >
    `
  flex-grow: 1;

  a {
    color: inherit;
  }

  color: inherit;
  position: relative;
  text-align: center;

  ${(props) =>
      props.active &&
      css`
      background-color: ${styles.colors.mainWhite};
      color: ${styles.colors.mainBlack};

      a {
        animation: ${styles.animations.pulse} 1s 1;
      }
    `}

  .navLink {
    /* border-radius: 3px; */
    /* color: inherit; */
    display: inline-flex;
    margin: 0;
    padding: 0.9375rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: inherit;
      background: rgba(200, 200, 200, 0.2);
    }
    @media (max-width: ${styles.size.mobileL}) {
      & > span:first-child {
        justify-content: flex-start;
      }
    }
  }

  .dropdownLink {
    color: inherit;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
  }
`;
