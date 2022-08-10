import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CheckoutContext } from "../Checkout";
import AddressForm from "../AddressForm";
import {
  Button,
  styles,
  ErrorMessage,
  PageTitle,
  ButtonWrapperStyle,
} from "../../utils";
import GuestWarning from "./GuestWarning";
import { LOGIN, LOGON } from "../../../constants/routes";

const CheckoutGuestSuggestLogin = () => {
  const { nextPage, addressChosen, setAddressChosen } = useContext(
    CheckoutContext
  );

  //   const [error, setError] = useState("");

  //   const onSubmit = async (data) => {
  //     console.log("SUBMIT");
  //     const userExists = await auth.checkIfUserExists(data.email);

  //     if (userExists) {
  //       setError(data.email);
  //     } else {
  //       setAddressChosen({
  //         ...data,
  //         country: "IT",
  //       });
  //       nextPage();
  //     }
  //   };

  return (
    <>
      <PageTitle>We don't know each other yet!</PageTitle>
      <WarningWrapper>
        <GuestWarning />
        <div className="warning-buttons">
          <Button color="primary" internal href={LOGIN}>
            Login
          </Button>
          <Button color="primary" internal href={LOGON}>
            Register
          </Button>
          <Button color="white" internal onClick={nextPage}>
            Continue
          </Button>
        </div>

        {/* <span className="error_above_form">
          {error && (
            <ErrorMessage
              message={`È presente un account associato a ${error}`}
            >
              <Button color="primary" internal href={LOGIN}>
                Accedi con il tuo account
              </Button>
            </ErrorMessage>
          )}
        </span> */}
        {/* <AddressForm
          onSubmit={onSubmit}
          addressChosen={addressChosen}
          isGuest
        /> */}
        {/* <span className="error_above_button">
          {error && (
            <ErrorMessage
              message={`È presente un account associato a ${error}`}
            >
              <Button color="primary" internal href={LOGIN}>
                Accedi con il tuo account
              </Button>
            </ErrorMessage>
          )}
        </span> */}
        {/* <Button form="formaddress" type="submit" size="lg" color="primary" className="address_button">
            Salva
          </Button> */}
        {/* <label
          for="submit-address-form"
          tabIndex="0"
          className="address_button"
        >
          Salva
        </label> */}
      </WarningWrapper>
    </>
  );
};

const WarningWrapper = styled.div`
  .error_above_form {
    display: none;
  }

  .address_button {
    ${ButtonWrapperStyle};
    width: 100%;
  }

  .warning-buttons {
    margin: 0 auto;
    width: fit-content;
  }

  @media (min-width: ${styles.size.tablet}) {
    margin: 0 auto;
    width: 60%;

    .error_above_form {
      display: block;
    }

    .error_above_button {
      display: none;
    }
  }
`;

export default CheckoutGuestSuggestLogin;
