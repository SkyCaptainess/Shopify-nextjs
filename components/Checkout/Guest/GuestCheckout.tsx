import React, { useContext, useEffect } from "react";
import { CheckoutContext } from "../Checkout";
import CheckoutGuestSuggestLogin from "./CheckoutGuestSuggestLogin";
import { useRouter } from "next/router";

const GuestCheckout = () => {
  const { step, checkoutUrl } = useContext(CheckoutContext);
  const router = useRouter();

  useEffect(() => {
    if (step === 2) {
      router.push(checkoutUrl);
    }
  }, [step]);

  return (
    <div>
      {step === 1 && <CheckoutGuestSuggestLogin />}
      {/* {step === 2 && <CheckoutPayment />}
      {step === 3 && <CheckoutSummaryGuest />} */}
    </div>
  );
};

export default GuestCheckout;
