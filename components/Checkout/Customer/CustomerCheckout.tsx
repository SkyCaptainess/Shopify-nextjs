import React, { useContext, useEffect } from "react";
import CheckoutSpedition from "./CheckoutSpedition";
import { CheckoutContext } from "../Checkout";
import { useRouter } from "next/router";

const CustomerCheckout = () => {
  const { step, checkoutUrl } = useContext(CheckoutContext);

  const router = useRouter();

  useEffect(() => {
    if (step === 2) {
      router.push(checkoutUrl);
    }
  }, [step]);

  return (
    <div>
      {step === 1 && <CheckoutSpedition />}
      {/* {step === 2 && <CheckoutPayment />} */}
      {/* {step === 3 && <CheckoutSummary data={userData} loading={loading} />} */}
    </div>
  );
};

export default CustomerCheckout;
