import { NexusGenObjects } from "../../../generated/nexus-typegen";

export default function calcTotalPrice(cartItems: Array<NexusGenObjects["CartItem"]>) {
  const total = cartItems.reduce((tally, cartItem) => {
    if (!cartItem) return tally;
    return tally + cartItem.quantity * cartItem.price;
  }, 0);

  return total;
}

export const calcItemTotalPrice = (cartItem: NexusGenObjects["CartItem"]) =>
  cartItem.quantity * cartItem.price;

export const calcTotalItems = (cartItems: Array<NexusGenObjects["CartItem"]>): string => {
  const totalItems = cartItems.reduce((tally, cartItem) => {
    if (!cartItem) return tally;
    return tally + cartItem.quantity;
  }, 0);

  if (totalItems === 1) {
    return `${totalItems} articolo`;
  }
  return `${totalItems} articoli`;
};
