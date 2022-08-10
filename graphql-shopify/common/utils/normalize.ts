import { MoneyV2 } from "../../../generated/shopify.model"



export const money = ({ amount, currencyCode }: MoneyV2) => {
    return {
        value: +amount,
        currencyCode,
    }
}