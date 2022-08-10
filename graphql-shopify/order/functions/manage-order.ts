import { NexusGenObjectNames, NexusGenObjects } from "../../../generated/nexus-typegen";
import { Order, OrderLineItem, OrderLineItemConnection, OrderLineItemEdge } from "../../../generated/shopify.model";
import { normalizeProductCollections } from "../../product/utils/normalize";


const manageOrder = async (orderShopify: Order): Promise<NexusGenObjects["Order"]> => {

    orderShopify.lineItems

    const order: NexusGenObjects["Order"] = {
        id: orderShopify.id
    }

    order.orderItems = await manageOrderLineItems(orderShopify.lineItems)

    return order
}

const manageOrderLineItems = async (orderItemsConnection: OrderLineItemConnection): Promise<Array<NexusGenObjects["OrderItem"]>> => {
    return await Promise.all(orderItemsConnection?.edges?.map(async ({ node }: OrderLineItemEdge) => await manageOrderLineItem(node))) ?? []
}

const manageOrderLineItem = async (orderLineItem: OrderLineItem): Promise<NexusGenObjects["OrderItem"]> => {

    const orderItem: NexusGenObjects["OrderItem"] = {
        title: orderLineItem.title,
        quantity: orderLineItem.quantity,
        total: orderLineItem.discountedTotalPrice?.amount,
        image: orderLineItem.variant?.image?.originalSrc
    }

    if (orderLineItem.variant?.product?.collections) {
        const collectionsNormalized = normalizeProductCollections(orderLineItem.variant?.product.collections)
        if (collectionsNormalized && collectionsNormalized.length) {
            orderItem.productHandle = orderLineItem.variant?.product?.handle
            orderItem.categoryHandle = collectionsNormalized[0].handle
        }
    }


    return orderItem
}



export default manageOrder