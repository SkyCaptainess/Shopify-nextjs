import { extendType, nonNull, objectType, stringArg } from "nexus"
import { NexusGenObjects } from "../../generated/nexus-typegen"
import { OrderEdge } from "../../generated/shopify.model"
import { getUserSession, Session } from "../../lib/auth/auth-session"
import manageOrder from "../order/functions/manage-order"
import { QUERY_GET_USER_ORDERS } from "../order/queries/QUERY_GET_USER_ORDERS"
import QUERY_GET_ORDER_DETAILS, { GetOrderDetailsType } from "../order/QUERY_GET_ORDER_DETAILS"



export const Order = objectType({
    name: 'Order',
    definition(t) {
        t.string('id')
        t.string('processedAt')
        t.string('fulfillment')
        t.float('amount')
        t.list.field('orderItems', {
            type: 'OrderItem'
        })
    }
})

export const OrderItem = objectType({
    name: 'OrderItem',
    definition(t) {
        t.string('title')
        t.int('quantity')
        t.string('image')
        t.float('total')
        t.string('productHandle')
        t.string('categoryHandle')
    }
})


export const OrderQuery = extendType({
    type: 'Query',
    definition: t => {
        t.list.field('getUserOrders', {
            type: 'Order',
            async resolve(_, args, ctx) {
                try {
                    const session: Session = await getUserSession(ctx.req)
                    const { customer } = await ctx.shopifyGraphql.request(QUERY_GET_USER_ORDERS, { customerAccessToken: session.accessToken })

                    const ordersShopify: OrderEdge[] = customer.orders.edges

                    const orders: Array<NexusGenObjects["Order"]> = ordersShopify.map(({ node }) => {
                        const order: NexusGenObjects["Order"] = {
                            id: node.id,
                            processedAt: node.processedAt,
                            amount: node.totalPriceV2?.amount,
                            fulfillment: node.fulfillmentStatus
                        }
                        return order
                    });

                    return orders

                } catch (error) {
                    console.log("Error getting user orders", error)
                }
            }
        })
        t.field('order', {
            type: 'Order',
            args: { orderId: nonNull(stringArg()) },
            async resolve(_, { orderId }, ctx) {
                const orderDetailsData = await ctx.shopifyGraphql.request<GetOrderDetailsType>(QUERY_GET_ORDER_DETAILS, { orderId: orderId })
                return await manageOrder(orderDetailsData.node)
            }
        })
    }
})