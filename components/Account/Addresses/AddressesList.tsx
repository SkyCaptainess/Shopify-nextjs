import React from "react";
import { useQuery } from "react-apollo";

import styled from "styled-components";
import useAddresses from "../../../frontend-structure/address/hooks/useAddresses";
import BouncingLoader from "../../utils/BouncingLoader";
import AddressListItem from "./AddressListItem";

const AddressesList = () => {
  const [data, loading] = useAddresses();

  if (loading) return <BouncingLoader />;

  if (!data || !data.addresses)
    return <div>Errore nel recupero degli indirizzi</div>;

  return (
    <div>
      <AddressesListWrapper>
        {data.addresses.map((address) => (
          <AddressListItem address={address} key={address.id} />
        ))}
      </AddressesListWrapper>
    </div>
  );
};

const AddressesListWrapper = styled.ul`
  padding: 0;
`;

AddressesList.propTypes = {};

export default AddressesList;
