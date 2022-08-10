import styled, { css } from "styled-components";
import { styles } from "../..";

const DropdownWrapper = styled.div`

    text-align: center;

    .popper {
        z-index: absolute !important;

        @media(max-width: ${styles.size.mobileL}) {
            background-color: transparent;
            border: 0;
            box-shadow: none;
            color: black;
            float: none;
            margin-top: 0;
            position: static !important;
            z-index: 1640;
            width: auto;
        }
    }

    .popperClose {
        pointer-events: none;
    }

    @media (max-width: ${styles.size.mobileL}) {
        .popperNav {
            position: static !important;
            left: unset !important;
            top: unset !important;
            transform: none !important;
            will-change: none !important;

            & > div {
                box-shadow: none !important;
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                transition: none !important;
                margin-top: 0 !important;
                margin-bottom: 5px !important;
                padding: 0 !important;
            }
        }
    }

    .buttonIcon {
        height: 1.2rem;
        width: 1.2rem;
    }

    .dropdown {
        border-radius: 3px;
        border: 0;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        top: 100%;
        z-index: 1000;
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0;
        font-size: 14px;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
    }

    .menuList {
        padding: 0;

        .dropdownHeader {
            color: #777;
            display: block;
            font-size: 0.75rem;
            font-weight: inherit;
            line-height: 1.428571;
            margin-top: 10px;
            min-height: unset;
            white-space: nowrap;

            &:hover, &:focus {
                background-color: transparent;
                cursor: auto;
            }
        }

        .dropdownDividerItem {
            background-color: rgba(0, 0, 0, 0.12);
            height: 1px;
            margin: 5px 0;
            overflow: hidden;
        }

        .dropdownItem {
            border-radius: 2px;
            clear: both;
            color: #333;
            display: block;
            font-size: 0.9rem;
            font-weight: 400;
            height: fit-content;
            margin: 0 5px;
            min-height: unset;
            padding: 10px 20px;
            ${styles.transFunction("all", "150ms", "linear")};
            white-space: nowrap;

            /* &:hover {
                background-color: ${styles.colors.primaryColorHover};
                color: ${styles.colors.primaryTextHover};
            } */
        }

        .dropdownItemRTL {
            text-align: right;
        }

        .noLiPadding {
            padding: 0;
        }

        .primaryHover {
            &:hover {
                background-color: ${styles.colors.primaryColor};
                color: #FFFFFF;
                ${styles.boxColors.primaryBoxShadow};
            }
        }

        .successHover {
            &:hover {
                background-color: ${styles.colors.successColor};
                color: #FFFFFF;
                ${styles.boxColors.successBoxShadow};
            }
        }
        
        .warningHover {
            &:hover {
                background-color: ${styles.colors.warningColor};
                color: #FFFFFF;
                ${styles.boxColors.warningBoxShadow};
            }
        }

        .dangerHover {
            &:hover {
                background-color: ${styles.colors.dangerColor};
                color: #FFFFFF;
                ${styles.boxColors.dangerBoxShadow};
            }
        }
    }
`;

export const CaretWrapper = styled.b<{ caretActive?: boolean }>`
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid;
  display: inline-block;
  height: 0;
  margin-left: 4px;
  ${styles.transFunction("all", "150ms", "ease-in")};
  width: 0;
  vertical-align: middle;

  ${(props) =>
    props.caretActive &&
    css`
      transform: rotate(180deg);
    `}
`;

export default DropdownWrapper;
