import { arg, extendType, inputObjectType, nonNull, objectType, stringArg } from "nexus";
import { NexusInterfaceTypeDef } from "nexus/dist/core";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import { getUserSession, Session } from "../../lib/auth/auth-session";
import { manageAddresses } from "../address/functions/manage-addresses";
import MUTATION_POPULATE_CHECKOUT_ADDRESS, { PopulateCheckoutAddressType } from "../address/mutations/MUTATION_POPULATE_CHECKOUT_ADDRESS";
import { QueryGetAddressType, QUERY_GET_ADDRESSES } from "../address/queries/QUERY_GET_ADDRESSES";
import getCheckoutId from "../common/functions/get-checkout-id";



export const Address = objectType({
    name: 'Address',
    definition(t) {
        t.string('id')
        t.string('address1')
        t.string('address2')
        t.string('city')
        t.string('country')
        t.string('province')
        t.string('zip')
        t.string('firstName')
        t.string('lastName')
        t.boolean('active')
    }
})

export const ShippingAddressInput = inputObjectType({
    name: 'ShippingAddressInput',
    definition(t) {
        t.nonNull.string('address1')
        t.string('address2')
        t.string('city')
        t.string('country')
        t.string('province')
        t.string('zip')
        t.string('firstName')
        t.string('lastName')
    }
})

export const AddressQuery = extendType({
    type: 'Query',
    definition: t => {
        t.nonNull.list.field('addresses', {
            type: 'Address',
            async resolve(_, args, ctx) {

                const session: Session = await getUserSession(ctx.req)
                const { customer } = await ctx.shopifyGraphql.request<QueryGetAddressType>(QUERY_GET_ADDRESSES, { customerAccessToken: session.accessToken })

                const addresses: Array<NexusGenObjects["Address"]> = await manageAddresses(customer.addresses)
                if (customer.defaultAddress) {
                    const defaultAddress = addresses.find(x => x.id === customer.defaultAddress.id)
                    defaultAddress.active = true
                }

                return addresses
            }
        })
    }
})

export const AddressMutation = extendType({
    type: 'Mutation',
    definition: t => {
        t.field('populateCheckout', {
            type: 'FieldResponse',
            args: { shippingAddress: arg({ type: ShippingAddressInput }) },
            async resolve(_, { shippingAddress }, ctx) {

                let checkoutId = await getCheckoutId(ctx)
                const { checkoutShippingAddressUpdateV2: response } = await ctx.shopifyGraphql.request<PopulateCheckoutAddressType>(MUTATION_POPULATE_CHECKOUT_ADDRESS, { checkoutId: checkoutId, shippingAddress: shippingAddress })

                if (response.checkoutUserErrors?.length) {
                    return {
                        success: false,
                        message: "Errore. Riprova più tardi!",
                    }
                }

                return {
                    success: true,
                }

            }
        })
    }
})