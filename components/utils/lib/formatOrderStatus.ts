export default function formatOrderStatus(orderStatus) {
  switch (orderStatus) {
    case "IN_PROGRESS":
      return "In gestione";
    case "UNFULFILLED":
      return "In attesa";
    case "FULFILLED":
      return "Gestito";
    case "PARTIALLY_FULFILLED":
      return "Parzialmente gestito";
    case "SHIPPED":
      return "Spedito";
    case "ARRIVED":
      return "Consegnato";
    default:
      return "In gestione";
  }
}
