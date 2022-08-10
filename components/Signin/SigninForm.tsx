import React, { useState } from "react";
import Router from "next/router";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import { useForm, ErrorMessage } from "react-hook-form";

import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CustomInput,
} from "../utils";
import LoginFormWrapper from "./LoginFormWrapper";
import { successToast, errorToast } from "../utils/Toast/Toast";
import useLogin from "../../frontend-structure/user/hooks/useLogin";

const SigninForm = ({ handleFormChange }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const [signinEmail, loading] = useLogin();

  const [authError, setAuthError] = useState("");

  const onSubmit = async (data) => {
    const { email, password } = data;

    signinEmail({
      variables: {
        email,
        password,
      },
    })
      .then(({ data }) => {
        if (data) {
          if (data.signinEmail?.success) {
            reset();
            successToast(data.signinEmail.message);
            Router.back();
          } else {
            errorToast(data.signinEmail.message);
            setAuthError(data.signinEmail.message);
          }
        }
      })
      .catch((err) => {
        errorToast("Error nel login, riprova a breve!");
      });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CardHeader color="primary">
        <h4>Accedi</h4>
      </CardHeader>
      <p className="divider">O con email e password</p>
      {authError && <p className="errorText">{authError}</p>}
      <CardBody>
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({ required: "L'email è richiesta" })}
          inputProps={{
            type: "email",
            name: "email",
            autoFocus: true,
            endAdornment: (
              <InputAdornment position="end">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <ErrorMessage errors={errors} name="email" as="p" />

        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({
            required: "La password è richiesta",
          })}
          inputProps={{
            type: "password",
            name: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon>lock_outline</Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
        />
        <ErrorMessage errors={errors} name="password" as="p" />
      </CardBody>
      <CardFooter>
        <a
          className="cardFooterPasswordForget"
          onClick={() => handleFormChange("passwordForget")}
        >
          Hai dimenticato la password?
        </a>
      </CardFooter>
      <CardFooter>
        <Button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          autoFocus
          color="primary"
          size="lg"
        >
          Accedi
        </Button>
      </CardFooter>
      <CardFooter>
        <hr />
        <p>
          Oppure{" "}
          <a
            className="cardFooterLink"
            onClick={() => handleFormChange("logon")}
          >
            Registrati
          </a>
        </p>
      </CardFooter>
    </LoginFormWrapper>
  );
};

export default SigninForm;
