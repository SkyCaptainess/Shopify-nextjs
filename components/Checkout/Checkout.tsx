import React, { useState, useMemo, useEffect } from "react";
import { CustomerCheckout, GuestCheckout } from ".";
import useCheckoutUrl from "../../frontend-structure/checkout/hooks/useCheckoutUrl";
import useCustomer from "../../frontend-structure/user/hooks/useCustomer";

export const CheckoutContext = React.createContext(null);

const Checkout = () => {
  const [hasUser] = useCustomer();
  const [data, loading] = useCheckoutUrl();

  useEffect(() => {
    if (data?.checkoutUrl) {
      setCheckoutUrl(data.checkoutUrl);
    }
  }, [data]);

  const [addressChosen, setAddressChosen] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const [step, setStep] = useState(1);
  const nextPage = () => {
    setStep((prevState) => prevState + 1);
  };
  const prevPage = () => {
    setStep((prevState) => prevState - 1);
  };

  const getContext = useMemo(
    () => ({
      step,
      nextPage,
      prevPage,
      addressChosen,
      setAddressChosen,
      checkoutUrl,
    }),
    [step, addressChosen]
  );

  return (
    <div>
      <CheckoutContext.Provider value={getContext}>
        {hasUser ? <CustomerCheckout /> : <GuestCheckout />}
      </CheckoutContext.Provider>
    </div>
  );
};

export default Checkout;
