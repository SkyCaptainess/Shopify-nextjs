import React from "react";
import PropTypes from "prop-types";
import { Button } from "../utils";
import { LOGIN } from "../../constants/routes";

interface LoginButtonProp {
  color?: string;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProp> = (props) => {
  const { color, ...rest } = props;

  return (
    <Button color={color} internal href={LOGIN} {...rest}>
      ACCEDI
    </Button>
  );
};

LoginButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LoginButton;
