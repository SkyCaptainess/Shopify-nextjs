import styled, { css } from "styled-components";
import { styles } from "../../index";

export const ButtonWrapperStyle = css<{
  justIcon?: boolean;
  size?: string;
  color?: string;
  width?: any;
  widthMobile?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  link?: boolean;
}>`
    min-height: auto;
    min-width: auto;
    background-color: ${styles.colors.primaryColor};
    color: #FFFFFF;
    box-shadow:
      0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
    border: none;
    border-radius: 3px;
    position: relative;
    padding: 12px 30px;
    margin: .3125rem 1px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
    transition:
      box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;

    &:hover, &:focus {
      color: #FFFFFF;
      /* background-color: ${styles.colors.mainGrey}; */
      box-shadow:
        0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
    };

    .fab, .fas, .far, .fal, .material-icons {
      position: relative;
      display: inline-block;
      top: 0;
      font-size: 1.1rem;
      margin-right: 4px;
      vertical-align: middle;
    };
    
    svg {
      position: relative;
      display: inline-block;
      top: 0;
      width: 18px;
      height: 18px;
      margin-right: 4px;
      vertical-align: middle
    }
    
    ${(props) =>
      props.justIcon &&
      css`
        .fab,
        .fas,
        .far,
        .fal,
        .material-icons {
          margin-right: 0px;
          position: absolute;
          width: 100%;
          transform: none;
          left: 0px;
          top: 0px;
          height: 100%;
          line-height: 41px;
          font-size: 20px;
        }
      `} 

    /* justIcon: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "20px",
        height: "41px",
        minWidth: "41px",
        width: "41px",
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginRight: "0px"
        },
        "&$lg": {
        height: "57px",
        minWidth: "57px",
        width: "57px",
        lineHeight: "56px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "32px",
            lineHeight: "56px"
        },
        "& svg": {
            width: "32px",
            height: "32px"
        }
        },
        "&$sm": {
        height: "30px",
        minWidth: "30px",
        width: "30px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "17px",
            lineHeight: "29px"
        },
        "& svg": {
            width: "17px",
            height: "17px"
        }
        }
    } */

    ${(props) => {
      switch (props.size) {
        case "sm":
          return css`
            padding: 0.40625rem 1.25rem;
            font-size: 0.6875rem;
            line-height: 1.5;
            border-radius: 0.2rem;
          `;
        case "lg":
          return css`
            padding: 1.125rem 2.25rem;
            font-size: 0.875rem;
            line-height: 1.333333;
            border-radius: 0.2rem;
          `;
        case "xl":
          return css`
            padding: 1.125rem 2.25rem;
            font-size: 1.5rem;
            line-height: 1.333333;
            border-radius: 0.2rem;
          `;
        default:
          return css`
            padding: 1.125rem 2.25rem;
            font-size: 0.875rem;
            line-height: 1.333333;
            border-radius: 0.2rem;
          `;
      }
    }}

    ${(props) => {
      switch (props.color) {
        case "success":
          return css`
            background-color: ${styles.colors.successColor};
            box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14),
              0 3px 1px -2px rgba(76, 175, 80, 0.2),
              0 1px 5px 0 rgba(76, 175, 80, 0.12);

            &:hover,
            &:focus {
              background-color: ${styles.colors.successColor};
              box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(76, 175, 80, 0.2);
            }
          `;
        case "warning":
          return css`
            background-color: ${styles.colors.warningColor};
            box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14),
              0 3px 1px -2px rgba(76, 175, 80, 0.2),
              0 1px 5px 0 rgba(76, 175, 80, 0.12);

            &:hover,
            &:focus {
              background-color: ${styles.colors.warningColor};
              box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(76, 175, 80, 0.2);
            }
          `;
        case "danger":
          return css`
            background-color: ${styles.colors.dangerColor};
            box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14),
              0 3px 1px -2px rgba(76, 175, 80, 0.2),
              0 1px 5px 0 rgba(76, 175, 80, 0.12);

            &:hover,
            &:focus {
              background-color: ${styles.colors.dangerColor};
              box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(76, 175, 80, 0.2);
            }
          `;
        case "github":
          return css`
            background-color: #333;
            color: #fff;
            box-shadow: 0 2px 2px 0 rgba(51, 51, 51, 0.14),
              0 3px 1px -2px rgba(51, 51, 51, 0.2),
              0 1px 5px 0 rgba(51, 51, 51, 0.12);

            &:hover,
            &:focus {
              background-color: #333;
              color: #fff;
              box-shadow: 0 14px 26px -12px rgba(51, 51, 51, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(51, 51, 51, 0.2);
            }
          `;
        case "facebook":
          return css`
            background-color: #3b5998;
            color: #fff;
            box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14),
              0 3px 1px -2px rgba(59, 89, 152, 0.2),
              0 1px 5px 0 rgba(59, 89, 152, 0.12);

            &:hover,
            &:focus {
              background-color: #3b5998;
              color: #fff;
              box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(59, 89, 152, 0.2);
            }
          `;
        case "google":
          return css`
            background-color: #dd4b39;
            color: #fff;
            box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14),
              0 3px 1px -2px rgba(221, 75, 57, 0.2),
              0 1px 5px 0 rgba(221, 75, 57, 0.12);

            &:hover,
            &:focus {
              background-color: #dd4b39;
              color: #fff;
              box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(221, 75, 57, 0.2);
            }
          `;
        case "twitter":
          return css`
            background-color: #55acee;
            color: #fff;
            box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14),
              0 3px 1px -2px rgba(85, 172, 238, 0.2),
              0 1px 5px 0 rgba(85, 172, 238, 0.12);

            &:hover,
            &:focus {
              background-color: #55acee;
              color: #fff;
              box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(85, 172, 238, 0.2);
            }
          `;
        case "instagram":
          return css`
            background-color: #bc2a8d;
          `;
        case "whatsapp":
          return css`
            background-color: #20b038;
          `;
        case "transparent":
          return css`
            color: inherit;
            background: transparent;
            box-shadow: none;
          `;
        case "transparentBorded":
          return css`
            color: inherit;
            background: transparent;
            border: 1px solid ${styles.colors.mainBlack};
            box-shadow: none;
          `;
        case "primary":
        default:
          return css`
            background-color: ${styles.colors.primaryColor};
            color: #fff;
            box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14),
              0 3px 1px -2px rgba(156, 39, 176, 0.2),
              0 1px 5px 0 rgba(156, 39, 176, 0.12);

            &:hover,
            &:focus {
              background-color: ${styles.colors.primaryColorHover};
              color: #fff;
              box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42),
                0 4px 23px 0px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(156, 39, 176, 0.2);
            }
          `;
      }
    }}

    ${(props) =>
      props.width &&
      css`
        @media (min-width: ${styles.size.tablet}) {
          display: block;
          margin: 0 auto;
          width: ${props.width};
        }
      `}

    ${(props) =>
      props.widthMobile &&
      css`
        @media (max-width: ${styles.size.tablet}) {
          display: block;
          margin: 0 auto;
          width: ${props.widthMobile};
        }
      `}

    ${(props) =>
      props.fullWidth &&
      css`
        width: 100%;
      `}

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.65;
        pointer-events: none;
      `}

    ${(props) =>
      props.link &&
      css`
        &:hover,
        &:focus {
          background-color: transparent;
          color: #999;
          box-shadow: none;
        }
      `}

    
`;

export const ButtonWrapper = styled.button`
  ${ButtonWrapperStyle};
`;

export const ButtonAWrapper = styled.a`
  ${ButtonWrapperStyle};
`;
