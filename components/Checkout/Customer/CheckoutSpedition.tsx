import React, { useContext, useState } from "react";
import AddressModal from "./AddressModal";
import { Button, PageTitle, styles } from "../../utils";
import AddressListItems from "../AddressListItems";
import styled from "styled-components";
import { CheckoutContext } from "../Checkout";

const CheckoutSpedition = () => {
  // const [newAddressModal, setNewAddressModal] = useState(false);
  const context = useContext(CheckoutContext);
  const { nextPage } = context;

  return (
    <CheckoutSpeditionWrapper>
      <PageTitle>Select your address</PageTitle>
      <div className="addressList">
        {/* <Button
          color="primary"
          onClick={() => setNewAddressModal(true)}
          width="60%"
          widthMobile="100%"
        >
          + Aggiungi un nuovo indirizzo
        </Button> */}
        <Button
          color="primary"
          onClick={() => nextPage()}
          width="60%"
          widthMobile="100%"
        >
          Use a new address
        </Button>
        <AddressListItems />
      </div>
      {/* <AddressModal
        setModalOpen={setNewAddressModal}
        modalOpen={newAddressModal}
      /> */}
    </CheckoutSpeditionWrapper>
  );
};

const CheckoutSpeditionWrapper = styled.div`
  @media (min-width: ${styles.size.tablet}) {
    .addressList {
      margin: 0 auto;
      width: 60%;
    }
  }
`;

export default CheckoutSpedition;
