import styled, { css } from "styled-components";
import { styles } from "../../../utils";

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  color: inherit;
  font-size: 1rem;
  height: 100%;
  list-style: none;
  margin: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-top: 0;

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ListItemWrapper = styled.li< { active?: boolean } >`
  /* position: relative; */
  /* text-align: center; */
  /* width: auto; */
  margin-bottom: 1rem;

  ${props =>
    props.active &&
    css`
      background-color: ${styles.colors.mainBlack};
      border-radius: 3px;
      color: ${styles.colors.mainWhite};
    `}

  .navLink {
    color: inherit;
    display: inline-flex;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 0.5rem;
    text-decoration: none;
    /* text-transform: uppercase; */

    &:hover,
    &:focus {
      color: inherit;
      /* background: rgba(200, 200, 200, 0.2); */
    }
    @media (max-width: ${styles.size.mobileL}) {
      margin-bottom: 8px;
      /* margin-left: 15px; */
      /* text-align: left; */
      /* width: calc(100% - 30px); */
      & > span:first-child {
        justify-content: flex-start;
      }
    }
  }

  .socialIcons {
    font-size: 20px !important;
    margin-right: 4px;
    position: relative;
  }

  .dropdownLink {
    color: inherit;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
  }
`;
