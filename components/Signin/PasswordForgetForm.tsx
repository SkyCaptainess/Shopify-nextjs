import React, { useState } from "react";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useForm, ErrorMessage } from "react-hook-form";

import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CustomInput,
} from "../utils";

import LoginFormWrapper from "./LoginFormWrapper";

const PasswordForgetForm = ({ handleFormChange }) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const [authError, setAuthError] = useState("");

  const onSubmit = async (data) => {
    const { email } = data;
    setLoading(true);

    // await firebase
    //   .doPasswordReset(email)
    //   .then(() => {
    //     reset();
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     const errorMessage = translateErrorCodes(error.code);
    //     setAuthError(errorMessage);
    //     setLoading(false);
    //   });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CardHeader color="primary">
        <h4>Reimposta la password</h4>
      </CardHeader>
      {authError && <p className="errorText">{authError}</p>}
      <CardBody>
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({ required: "L' email è richiesta" })}
          inputProps={{
            type: "email",
            name: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <ErrorMessage errors={errors} name="email" as="p" />
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          color="primary"
          size="lg"
        >
          Reimposta la password
        </Button>
      </CardFooter>
      <CardFooter>
        <hr />
        <p>
          Oppure{" "}
          <a
            className="cardFooterLink"
            onClick={() => handleFormChange("login")}
          >
            Accedi
          </a>
        </p>
      </CardFooter>
    </LoginFormWrapper>
  );
};

export default PasswordForgetForm;
