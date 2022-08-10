import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import styled from "styled-components";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import { styles } from "..";

const CustomInput = (props) => {
  const {
    formControlProps,
    labelText,
    id,
    inputRef,
    labelProps,
    inputProps,
    error,
    white,
    success,
  } = props;

  const labelClasses = classNames({
    labelRoot: true,
    labelRootError: error,
    labelRootSuccess: success && !error,
  });

  const underlineClasses = classNames({
    underlineError: error,
    underlineSuccess: success && !error,
  });

  const inputClasses = classNames({
    input: true,
    whiteInput: white,
  });

  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(formControlProps.className, "formControl");
  } else {
    formControlClasses = "formControl";
  }

  return (
    <CustomInputWrapper>
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined ? (
          <InputLabel className={labelClasses} htmlFor={id} {...labelProps}>
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            input: inputClasses,
            disabled: "disabled",
            underline: underlineClasses,
            multiline: "multiline",
          }}
          id={id}
          inputRef={inputRef}
          {...inputProps}
        />
      </FormControl>
    </CustomInputWrapper>
  );
};

const CustomInputWrapper = styled.div`
  .formControl {
    margin: 0 0 17px 0;
    padding-top: 27px;
    position: relative;
    svg,
    .fab,
    .far,
    .fal,
    .fas,
    .material-icons {
      color: #495057;
    }
  }

  .labelRoot {
    color: ${styles.colors.primaryColor} !important;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: unset;
    line-height: 1.42857;
    top: 10px;
  }

  .labelRootError {
    color: ${styles.colors.dangerColor} !important;
  }

  .labelRootSuccess {
    color: ${styles.colors.successColor} !important;
  }

  .input {
    color: #495057;
    height: unset;

    &::placeholder {
      color: #aaaaaa;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857;
      opacity: 1;
    }
  }

  .whiteInput {
    &::placeholder {
      color: #fff;
      opacity: 1;
    }
  }

  .disabled {
    &::before {
      border-color: transparent !important;
    }
  }

  .underlineError {
    &:after {
      border-color: ${styles.colors.dangerColor};
    }
  }

  .underlineSuccess {
    &:after {
      border-color: ${styles.colors.successColor};
    }
  }
`;

export default CustomInput;

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  inputRef: PropTypes.func,
};
