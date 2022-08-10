import React, { useMemo } from "react";
import styled from "styled-components";
import { styles } from "../utils";
import useUpdateItem from "../../frontend-structure/checkout/hooks/useUpdateItem";
import { errorToast, successToast } from "../utils/Toast/Toast";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface UpdateQuantityProp {
  cartItemId: string;
  quantity: number;
  maxQuantity: number;
}

const UpdateCartQuantity: React.FC<UpdateQuantityProp> = ({
  cartItemId,
  quantity,
  maxQuantity,
}) => {
  const [updateCartQuantity, loading] = useUpdateItem();

  const onChangeQuantity = async (e) => {
    let qnt = parseInt(e.target.value, 10);

    if (maxQuantity && qnt > maxQuantity) {
      qnt = maxQuantity;
    }

    await updateCartQuantity({
      variables: {
        itemId: cartItemId,
        quantity: qnt,
      },
    }).then(({ data }) => {
      const res: NexusGenObjects["FieldResponse"] = data.updateCartQuantity;
      if (res.success) {
        successToast(res.message);
      } else {
        errorToast(res.message);
      }
    });
  };

  const displayQuantities = useMemo(() => {
    const quantities = [];
    let totalQuantity = 30;
    if (maxQuantity) {
      totalQuantity = Math.min(totalQuantity, maxQuantity);
    }

    for (let i = 0; i <= totalQuantity; i++) {
      quantities.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return quantities;
  }, [maxQuantity]);

  return (
    <SelectWrapper
      disabled={loading}
      onChange={onChangeQuantity}
      defaultValue={quantity}
    >
      {displayQuantities}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  padding: 0.2em 1.2em 0.3em 0.6em;

  @media (min-width: ${styles.size.tablet}) {
    padding: 0.6em 1.4em 0.5em 0.8em;
  }
`;

export default UpdateCartQuantity;
export { SelectWrapper };
