import React from "react";
import { successToast, errorToast } from "../utils/Toast/Toast";
import { Button } from "../utils";
import useRemoveFromCart from "../../frontend-structure/checkout/hooks/useRemoveFromCart";

const RemoveFromCart: React.FC<{ cartItemId: string }> = ({ cartItemId }) => {
  const [removeFromCart, loading] = useRemoveFromCart();

  const handleRemove = async () => {
    removeFromCart({
      variables: {
        itemId: cartItemId,
      },
    }).then(({ data }) => {
      const res = data.removeFromCart;
      if (res.success) {
        successToast("Elemento rimosso con successo!");
      } else {
        errorToast("Errore nella rimozione dal carrello");
      }
    });
    //TODO: Check for optimisticResponse
    // await removeFromCart({
    //   variables: { id },
    //   optimisticResponse: {
    //     __typename: "Mutation",
    //     removeFromCart: {
    //       __typename: "CartItem",
    //       id,
    //     },
    //   },
    //   update: (proxy, payload) => {
    //     const cache = proxy.readQuery({ query: CURRENT_USER_QUERY });
    //     const cartItemId = payload.data.removeFromCart.id;
    //     cache.me.cart = cache.me.cart.filter(
    //       (cartItem) => cartItem.id !== cartItemId
    //     );
    //     proxy.writeQuery({ query: CURRENT_USER_QUERY, data: cache });
    //   },
    // })
    //   .then(() => {
    //     successToast("Elemento rimosso con successo!");
    //   })
    //   .catch(() => errorToast("Errore nella rimozione dal carrello"));
  };

  return (
    <Button
      size="sm"
      disabled={loading}
      aria-busy={loading}
      onClick={handleRemove}
    >
      Remove
    </Button>
  );
};

export default RemoveFromCart;
