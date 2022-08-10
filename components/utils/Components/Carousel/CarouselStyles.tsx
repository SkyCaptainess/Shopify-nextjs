import styled, { css } from "styled-components";
import { styles } from "../..";

export const customIndicators = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <IndicatorLiWrapper
        selected
        aria-label={`Selezionato pagina ${index + 1}`}
        title={`Selezionata pagina ${index + 1}`}
      />
    );
  }
  return (
    <IndicatorLiWrapper
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const IndicatorLiWrapper = styled.li<{ selected?: boolean }>`
    background: ${styles.colors.mainWhite};
    ${({ selected }) =>
      selected &&
      `
        background: ${styles.colors.mainBlack};
    `}
    border: 1px solid ${styles.colors.primaryColor};
    border-radius: 50%;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    cursor: pointer;
    display: inline-block;
    height: 8px;
    margin: 0 8px;
    transition: opacity .25s ease-in;
    width: 8px;
`;

export const customArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <ArrowPrevWrapper
      left
      type="button"
      onClick={onClickHandler}
      title={label}
    />
  );

export const customArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <ArrowPrevWrapper
      right
      type="button"
      onClick={onClickHandler}
      title={label}
    />
  );

const ArrowPrevWrapper = styled.button<{ left?: boolean; right?: boolean }>`
  background: none;
  border: 0;
  bottom: 0;
  color: ${styles.colors.primaryColor};
  cursor: pointer;
  font-size: 26px;
  ${({ left }) =>
    left &&
    css`
      left: 0;
    `}
  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}
    margin-top: 0;
  opacity: 0.4;
  padding: 5px;
  position: absolute;
  top: 0;
  transition: all 0.25s ease-in;
  z-index: 2;

  &:before {
    margin: 0 5px;
    display: inline-block;
    ${({ right }) =>
      right &&
      css`
        border-left: 8px solid ${styles.colors.primaryColor};
      `}
    ${({ left }) =>
      left &&
      css`
        border-right: 8px solid ${styles.colors.primaryColor};
      `}
        border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: "";
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
`;

// const arrowStyles = {
//     position: 'absolute',
//     zIndex: 2,
//     top: 'calc(50% - 15px)',
//     width: 30,
//     height: 30,
// };
