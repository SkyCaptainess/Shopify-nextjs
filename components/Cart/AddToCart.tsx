import React, { useState } from "react";
import styled from "styled-components";
import Favorite from "@material-ui/icons/Favorite";
import { Button, NumericInput, styles } from "../utils";
import { successToast, errorToast } from "../utils/Toast/Toast";
import useAddToCart from "../../frontend-structure/checkout/hooks/useAddToCart";

const AddToCart = ({ id, note, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const [addToCart, loading] = useAddToCart();

  const handleAddToCart = async () => {
    addToCart({
      variables: {
        variantId: id,
        quantity: quantity,
        note: note,
      },
    })
      .then(({ data }) => {
        const res = data.addToCart;
        if (res.success) {
          successToast("Aggiunto al carrello!");
        } else {
          errorToast("Errore nell'aggiunta al carrello");
        }
      })
      .catch((err) => {
        errorToast("Errore nell'aggiunta al carrello");
      });
  };

  return (
    <AddToCartWrapper>
      <NumericInput
        // defaultValue={quantity}
        value={quantity}
        changeState={setQuantity}
        minValue={1}
        maxValue={maxQuantity}
        // className="numeric"
      />
      <Button
        disabled={loading}
        aria-busy={loading}
        color="success"
        round
        onClick={handleAddToCart}
        className="addButton"
      >
        <Favorite /* className={classes.icons} */ /> Add to cart
      </Button>
    </AddToCartWrapper>
  );
};

AddToCart.defaultProps = {
  note: null,
  maxQuantity: null,
};

const AddToCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${styles.size.laptop}) {
    flex-direction: row;
    .numeric {
      flex: 1;
    }

    .addButton {
      flex: 2;
      margin: 0 0 0 5px;
    }
  }
`;

export default AddToCart;
