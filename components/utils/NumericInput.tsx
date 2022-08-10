import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { styles } from "./index";

const NumericInput = ({ value, changeState, minValue, maxValue }) => {
  const subtract = () => {
    changeState(prevState =>
      minValue ? Math.max(prevState - 1, minValue) : prevState - 1
    );
  };

  const add = () => {
    changeState(prevState =>
      maxValue ? Math.min(prevState + 1, maxValue) : prevState + 1
    );
  };

  const changeValue = e => {
    let value = 1;
    if (e.target.value) {
      value = parseInt(e.target.value);
    }
    if (minValue && value < minValue) {
      value = minValue;
    } else if (maxValue && value > maxValue) {
      value = maxValue;
    }
    changeState(value);
  };

  return (
    <NumericWrapper>
      <a onClick={subtract}>-</a>
      <input type="number" value={value} onChange={changeValue} />
      <a onClick={add}>+</a>
    </NumericWrapper>
  );
};

const NumericWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: auto;

  /* Disable the arrows in the input element */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  a {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainWhite};
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    ${styles.transDefault};

    &:hover {
      transform: scale(1.1);
    }
  }

  input[type="number"] {
    font-weight: 600;
    text-align: center;
  }
`;

NumericInput.propTypes = {
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  changeState: PropTypes.func.isRequired
};

export default NumericInput;
