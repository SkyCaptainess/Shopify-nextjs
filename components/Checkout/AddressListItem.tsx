import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { styles, Button } from "../utils";
import { CheckoutContext } from "./Checkout";

const AddressListItem = ({
  address,
  handleStepDone,
  // handleRemoveAddress,
  // loadingRemove,
}) => {
  const context = useContext(CheckoutContext);
  const { addressChosen, setAddressChosen } = context;

  const {
    id,
    firstName,
    lastName,
    address1,
    address2,
    city,
    country,
    province,
    zip,
  } = address;

  const handleChooseAddress = () => {
    const { __typename, active, ...addressWithoutTypename } = address;
    setAddressChosen(addressWithoutTypename);
  };

  const chosen = addressChosen?.id === id; // Boolean to determine if this address has been chosen

  return (
    <AddressListItemWrapper chosen={chosen}>
      <Radio
        className="address_radiobox"
        checked={chosen}
        onChange={handleChooseAddress}
        value={id}
        aria-label="A"
        icon={<FiberManualRecord className="radioUnchecked" />}
        checkedIcon={<FiberManualRecord className="radioChecked" />}
      />
      <div className="address_info" onClick={handleChooseAddress}>
        <div className="first_line">
          {firstName} {lastName}
        </div>
        <div>{address1}</div>
        <div>
          {zip} {city} {province} {country}
        </div>
      </div>
      {chosen && (
        <div className="address_buttons">
          <Button
            className="first_button"
            color="primary"
            onClick={handleStepDone}
          >
            Use this address
          </Button>
          {/* <div>
            <Button color="transparent">Modifica</Button>
            <Button
              color="transparent"
              onClick={() => handleRemoveAddress(id)}
              disabled={loadingRemove}
              aria-busy={loadingRemove}
            >
              Rimuovi
            </Button>
          </div> */}
        </div>
      )}
    </AddressListItemWrapper>
  );
};

const AddressListItemWrapper = styled.li<{ chosen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${styles.colors.lightGrey};
  padding: 1rem;

  &:hover {
    background-color: ${styles.colors.lightGrey};
  }

  ${(props) =>
    props.chosen &&
    css`
      border: 2px solid ${styles.colors.mainBlack};
    `}

  .address_radiobox {
    color: ${styles.colors.primaryColor} !important;
    flex: 0;
    padding: 12px;
  }

  .address_info {
    display: flex;
    flex-direction: column;

    cursor: pointer;

    margin-bottom: 1rem;
    text-align: center;
    .first_line {
      font-weight: 600;
    }
  }

  .address_buttons {
    .first_button {
      display: block;
      width: 100%;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .radioUnchecked {
    border: 1px solid rgba(0, 0, 0, 0.54);
    border-radius: 50%;
    height: 0;
    padding: 7px;
    width: 0;
  }

  .radioChecked {
    border: 1px solid ${styles.colors.primaryColor};
    border-radius: 50%;
    height: 16px;
    width: 16px;
  }

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;

    .address_info {
      flex-grow: 3;
      margin-left: 1rem;
    }

    .address_buttons {
      flex-grow: 2;

      flex-direction: row;
    }
  }
`;

export default AddressListItem;
