import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import { Checkout, CheckoutLineItemInput, Scalars } from "../../generated/shopify.model";
import { getUserSession } from "../../lib/auth/auth-session";
import { CartCheckout } from "../checkout/checkout-interface";
import QUERY_GET_CHECKOUT from "../checkout/queries/QUERY_GET_CHECKOUT";
import MUTATION_CHECKOUT_ITEM_ADD from "../checkout/mutations/MUTATION_CHECKOUT_ITEM_ADD";
import MUTATION_CHECKOUT_ITEM_REMOVE from "../checkout/mutations/MUTATION_CHECKOUT_ITEM_REMOVE";
import MUTATION_CHECKOUT_ITEM_UPDATE from "../checkout/mutations/MUTATION_CHECKOUT_ITEM_UPDATE";
import { checkoutCreate } from "../checkout/utils/checkout-create";
import transfromCheckoutToCart from "../checkout/utils/checkout-to-cart";
import { Context } from "../context";
import getCheckoutId from "../common/functions/get-checkout-id";
import getCheckoutUrl from "../common/functions/get-checkout-url";

export const Cart = objectType({
    name: 'Cart',
    definition(t) {
        t.string('id')
        t.list.field('cartItems', {
            type: 'CartItem',
        });
    }
})

export const CartItem = objectType({
    name: 'CartItem',
    definition(t) {
        t.string('id')
        t.string('title')
        t.string('description')
        t.string('handle')
        t.string('categoryHandle')
        t.string('image')
        t.int('quantity')
        t.int('quantityAvailable')
        t.float('price')
        t.string('note')
    }
})

export const CheckoutQuery = extendType({
    type: 'Query',
    definition: t => {
        t.field('cart', {
            type: 'Cart',
            async resolve(_, args, ctx) {
                let checkout: Checkout
                let cartItems: Array<NexusGenObjects["CartItem"]> = []

                try {
                    let checkoutId = await getCheckoutId(ctx)

                    if (checkoutId) {
                        const data = await ctx.shopifyGraphql.request(QUERY_GET_CHECKOUT, { checkoutId: checkoutId })
                        checkout = data.node
                    }
                    if (!checkout || checkout?.completedAt || !checkoutId) {
                        checkout = await checkoutCreate(ctx)
                    }
                    const cart: CartCheckout = transfromCheckoutToCart(checkout)
                    if (cart && cart.lineItems) {
                        cartItems = cart.lineItems.map(lineItem => {
                            return {
                                id: lineItem.id,
                                title: lineItem.name,
                                description: lineItem.variant?.description,
                                handle: lineItem.handle,
                                categoryHandle: lineItem.categoryHandle,
                                quantity: lineItem.quantity,
                                quantityAvailable: lineItem.variant.quantityAvailable,
                                image: lineItem.variant.image?.url,
                                price: lineItem.variant.price,
                                note: lineItem.note
                            }
                        })
                    }


                } catch (err) {
                    console.error("Errore nel recupero dell'utente", err)
                }

                return {
                    id: checkout.id,
                    cartItems: cartItems
                }
            }
        }),
            t.field('checkoutUrl', {
                type: 'String',
                async resolve(_, args, ctx) {
                    let checkoutUrl = await getCheckoutUrl(ctx)

                    return checkoutUrl
                }
            })
    }
})

export const CheckoutMutation = extendType({
    type: 'Mutation',
    definition: t => {
        t.field('addToCart', {
            type: 'FieldResponse',
            args: { variantId: nonNull(stringArg()), quantity: nonNull(intArg()), note: stringArg() },
            async resolve(_, { variantId, quantity, note }, ctx) {

                if (quantity && (!Number.isInteger(quantity) || quantity < 1)) {
                    //TODO: Manage Error
                }

                let checkoutId = await getCheckoutId(ctx)
                const lineItem: CheckoutLineItemInput = {
                    variantId,
                    quantity
                }
                if (note) {
                    lineItem.customAttributes = [{
                        key: 'note',
                        value: note
                    }]
                }
                const { checkoutLineItemsAdd } = await ctx.shopifyGraphql.request(MUTATION_CHECKOUT_ITEM_ADD, { checkoutId, lineItems: [lineItem] })

                return {
                    success: true,
                    message: "Articolo aggiunto!",
                }
            }
        }),
            t.field('removeFromCart', {
                type: 'FieldResponse',
                args: { itemId: nonNull(stringArg()) },
                async resolve(_, { itemId }, ctx) {
                    let checkoutId = await getCheckoutId(ctx)

                    try {
                        await ctx.shopifyGraphql.request(MUTATION_CHECKOUT_ITEM_REMOVE, { checkoutId, lineItemIds: [itemId] })
                        return {
                            success: true,
                            message: "Articolo rimosso!",
                        }
                    } catch (err) {
                        return {
                            success: false,
                            message: "Errore nella rimozione. Riprova più tardi!",
                        }
                    }
                }
            }),
            t.field('updateCartQuantity', {
                type: 'FieldResponse',
                args: { itemId: nonNull(stringArg()), quantity: nonNull(intArg()) },
                async resolve(_, { itemId, quantity }, ctx) {
                    let checkoutId = await getCheckoutId(ctx)

                    if (quantity < 1) {
                        //IF quantity is < 1, then I can remove the cartItem from cart
                        try {
                            await ctx.shopifyGraphql.request(MUTATION_CHECKOUT_ITEM_REMOVE, { checkoutId, lineItemIds: [itemId] })
                            return {
                                success: true,
                                message: "Articolo rimosso!",
                            }
                        } catch (err) {
                            return {
                                success: false,
                                message: "Errore nella rimozione. Riprova più tardi!",
                            }
                        }
                    }

                    const lineItemUpdate = [{
                        id: itemId,
                        quantity
                    }]

                    try {
                        await ctx.shopifyGraphql.request(MUTATION_CHECKOUT_ITEM_UPDATE, { checkoutId, lineItems: lineItemUpdate })
                    } catch (err) {
                        return {
                            success: false,
                            message: "Errore nella modifica. Riprova più tardi!",
                        }
                    }

                    return {
                        success: true,
                        message: "Quantità modificata!",
                    }
                }
            })
    }
})

// const getCheckout = async (ctx: Context): Promise<CartCheckout> => {
//     let checkout: CartCheckout;

//     const session = await getUserSession(ctx.req)

//     const expiresAt = (session && session.expiresAt) ? session.expiresAt : Date.now() + 60 * 60 * 8 * 1000

//     if (session?.checkoutId) {
//         checkout = await ctx.shopifyClient.checkout.fetch(session.checkoutId)
//         if (checkout.completedAt) {
//             checkout = await ctx.shopifyClient.checkout.create()
//             await setUserSession(ctx.res, {
//                 ...session,
//                 checkoutId: checkout.id,
//                 checkoutUrl: checkout.webUrl
//             }, expiresAt)
//         }
//     } else {
//         checkout = await ctx.shopifyClient.checkout.create()
//         await setUserSession(ctx, {
//             ...session,
//             checkoutId: checkout.id,
//             checkoutUrl: checkout.webUrl
//         }, expiresAt)
//     }

//     return checkout
// }

