import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const AddressListItem = ({ address }) => {
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
    active,
  } = address;

  return (
    <AddressItemWrapper>
      <div className="address_info">
        <div className="first_line">
          {firstName} {lastName}
        </div>
        <div>{address1}</div>
        <div>
          {zip} {city} {province} {country}
        </div>
      </div>
      {/* <div className="address_buttons">
        {active ? (
          <Button color="primary">Modifica</Button>
        ) : (
          <Button
            color="success"
            disabled={loadingActivate}
            onClick={() => handleActivate(id)}
          >
            Riattiva
          </Button>
        )}
        <Button
          color="danger"
          onClick={() => handleRemoveAddress(id)}
          disabled={loadingRemove}
          aria-busy={loadingRemove}
        >
          Rimuovi
        </Button>
      </div> */}
    </AddressItemWrapper>
  );
};

const AddressItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${styles.colors.lightGrey};
  margin: 0 auto;
  padding: 1rem;
  width: 90%;

  .address_info {
    flex-grow: 3;

    display: flex;
    flex-direction: column;

    cursor: pointer;
    margin-left: 1rem;
    margin-bottom: 1rem;

    .first_line {
      font-weight: 600;
    }
  }

  .address_buttons {
    flex-grow: 2;
  }

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;

    width: 60%;
  }
`;

export default AddressListItem;
