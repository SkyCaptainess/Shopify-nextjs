import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import Router from "next/router";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { successToast, errorToast } from "../utils/Toast/Toast";

import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CustomInput,
} from "../utils";
import LoginFormWrapper from "./LoginFormWrapper";
import useSignup from "../../frontend-structure/user/hooks/useSignup";

const SignupForm = ({ handleFormChange }) => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const [authError, setAuthError] = useState("");
  const [signupCustomer, loading] = useSignup();

  const onSubmit = async (data) => {
    const { name, email, passwordOne } = data;

    signupCustomer({
      variables: {
        email,
        password: passwordOne,
      },
    })
      .then(({ data }) => {
        if (data.signupCustomer?.success) {
          reset();
          successToast(data.signupCustomer.message);
          Router.back();
        } else {
          errorToast(data.signupCustomer.message);
          setAuthError(data.signupCustomer.message);
        }
      })
      .catch((err) => {
        errorToast("Error nella creazione utente, riprova a breve!");
      });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CardHeader color="primary">
        <h4>Registrati</h4>
        {/* <div className="socialLine">
          <GoogleLogin />
        </div> */}
      </CardHeader>
      <p className="divider">O con email e password</p>
      {authError && <p className="errorText">{authError}</p>}
      <CardBody>
        <CustomInput
          labelText="Nome"
          id="name"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({ required: "Il nome è richiesto" })}
          inputProps={{
            type: "text",
            name: "name",
            endAdornment: (
              <InputAdornment position="end">
                <People />
              </InputAdornment>
            ),
          }}
        />
        <ErrorMessage errors={errors} name="name" as="p" />

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

        <CustomInput
          labelText="Password"
          id="passwordOne"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({
            required: "La password è richiesta",
            minLength: {
              value: 8,
              message: "La password deve essere lunga almeno 8 caratteri",
            },
          })}
          inputProps={{
            type: "password",
            name: "passwordOne",
            endAdornment: (
              <InputAdornment position="end">
                <Icon>lock_outline</Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
        />
        <ErrorMessage errors={errors} name="passwordOne" as="p" />

        <CustomInput
          labelText="Conferma password"
          id="passwordTwo"
          formControlProps={{
            fullWidth: true,
          }}
          inputRef={register({
            required: "Conferma la tua password",
            validate: (value) =>
              value === watch("passwordOne") || "Le password non coincidono",
          })}
          inputProps={{
            type: "password",
            name: "passwordTwo",
            endAdornment: (
              <InputAdornment position="end">
                <Icon>lock_outline</Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
        />
        <ErrorMessage errors={errors} name="passwordTwo" as="p" />
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          color="primary"
          size="lg"
        >
          Registrati
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

export default SignupForm;
