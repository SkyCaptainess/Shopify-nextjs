import styled, { css } from "styled-components";

import { Container, styles } from "../../index";

export const AppBarWrapper = styled.header<{
  fixed?: boolean;
  absolute?: boolean;
  color?: string;
}>`
    display: flex;
    border: 0;
    border-radius: 3px;
    margin-bottom: 20px;
    color: #555;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
    ${styles.transDefault};
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    position: relative;
    z-index: unset;

    ${(props) =>
      props.fixed &&
      css`
        position: fixed;
        z-index: 1100;
      `}

    ${(props) =>
      props.absolute &&
      css`
        position: absolute;
        z-index: 1100;
      `}

    ${(props) => {
      switch (props.color) {
        case "primary":
          return css`
            background-color: ${styles.colors.primaryColor};
            color: #fff;
            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
              0 7px 12px -5px rgba(156, 39, 176, 0.46);
          `;
        case "success":
          return css`
            background-color: ${styles.colors.successColor};
            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
              0 7px 12px -5px rgba(76, 175, 80, 0.46);
          `;
        case "warning":
          return css`
            background-color: ${styles.colors.warningColor};
            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
              0 7px 12px -5px rgba(255, 152, 0, 0.46);
          `;
        case "danger":
          return css`
            background-color: ${styles.colors.dangerColor};
            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
              0 7px 12px -5px rgba(244, 67, 54, 0.46);
          `;
        case "transparent":
          return css`
            color: #fff;
            background-color: transparent !important;
            box-shadow: none;
          `;
        case "dark":
          return css`
            color: #fff;
            background-color: #212121 !important;
            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
              0 7px 12px -5px rgba(33, 33, 33, 0.46);
          `;
        case "overylayBlack":
          return css`
            color: #fff;
            background-color: ${styles.colors.overlayColor};
            box-shadow: none;
          `;
        case "white":
          return css`
            color: #555;
            background-color: ${styles.colors.mainWhite};
            box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
              0 7px 10px -5px rgba(0, 0, 0, 0.15);
            border: 0;
          `;
      }
    }}

    .appResponsive{
        margin: 20px 10px;
    }
`;

export const ToolbarWrapper = styled.div`
  ${Container};

  align-items: center;
  display: flex;
  flex: 1;
  min-height: 50px;
  justify-content: space-between;
  flex-wrap: nowrap;

  .flex {
    flex: 1;
  }

  .brandTitle {
    border-radius: 3px;
    color: inherit;
    font-family: "LaMoscaNera", "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 3.5rem;
    letter-spacing: unset;
    line-height: 30px;
    padding: 8px 16px;
    text-transform: none;

    &:hover,
    &:focus {
      color: inherit;
      background: transparent;
    }
  }

  .logo {
    width: 2rem;
  }
`;
