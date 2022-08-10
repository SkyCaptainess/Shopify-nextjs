import React, { useContext } from "react";
import styled from "styled-components";

import AddressListItem from "./AddressListItem";
import { CheckoutContext } from "./Checkout";
import useAddresses from "../../frontend-structure/address/hooks/useAddresses";
import usePopulateCheckoutAddress from "../../frontend-structure/address/hooks/usePopulateCheckoutAddress";
import { BouncingLoader } from "../utils";

const AddressListItems = () => {
  const context = useContext(CheckoutContext);
  const { nextPage, addressChosen } = context;

  const [data, loading] = useAddresses();
  const [populateCheckout, loadingPopulate] = usePopulateCheckoutAddress();
  // const [removeAddress, { loading: loadingRemove }] = useMutation(
  //   MUTATION_REMOVE_ADDRESS,
  //   {
  //     refetchQueries: [
  //       { query: QUERY_GET_ADDRESSES, variables: { where: { active: true } } },
  //     ],
  //   }
  // );

  // Set the first item of the list to be the default address
  // useEffect(() => {
  //   if (data && data.addresses && data.addresses.length > 0 && !addressChosen) {
  //     setAddressChosen(data.addresses[0].id);
  //   }
  // }, [addressChosen, data]);

  const handleStepDone = async () => {
    if (addressChosen) {
      const { id, ...rest } = addressChosen;
      await populateCheckout({
        variables: {
          shippingAddress: rest,
        },
      });
    }
    nextPage();
  };

  // const handleRemoveAddress = async (id) => {
  //   await removeAddress({ variables: { id } });
  // };

  if (loading) return <BouncingLoader />;
  if (!data || !data.addresses) return <EmptyOrWaitingAdddressList />;

  return (
    <AddressListWrapper>
      {data.addresses.map((address) => (
        <AddressListItem
          address={address}
          key={address.id}
          handleStepDone={handleStepDone}
          // handleRemoveAddress={handleRemoveAddress}
          // loadingRemove={loadingRemove}
        />
      ))}
    </AddressListWrapper>
  );
};

const EmptyOrWaitingAdddressList = () => (
  <EmptyAddressListWrapper>
    Ancora non hai un indirizzo!
  </EmptyAddressListWrapper>
);

const AddressListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const EmptyAddressListWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem 0 2rem 0;
  text-align: center;
`;

export default AddressListItems;
