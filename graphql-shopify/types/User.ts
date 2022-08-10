import { Session } from '../../lib/auth/auth-session'
import { extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from '../../generated/nexus-typegen'
import { Customer, CustomerCreateInput, CustomerUserError, CustomerAccessTokenCreateInput, CustomerAccessToken } from "../../generated/shopify.model";
import { setUserSession, getUserSession } from "../../lib/auth/auth-session";
import QUERY_USER_GET_CUSTOMER from "../user/queries/QUERY_USER_GET_CUSTOMER";
import MUTATION_USER_DELETE_ACCESSTOKEN from '../user/mutations/MUTATION_USER_DELETE_ACCESSTOKEN';
import MUTATION_USER_CREATE from '../user/mutations/MUTATION_USER_CREATE';
import MUTATION_USER_CREATE_ACCESSTOKEN from '../user/mutations/MUTATION_USER_CREATE_ACCESSTOKEN';
import { Context } from '../context';
import getCheckoutId from '../common/functions/get-checkout-id';
import MUTATION_USER_ASSOCIATE_CHECKOUT, { CheckoutCustomerAssociateType } from '../user/mutations/MUTATION_USER_ASSOCIATE_CHECKOUT';
import MUTATION_USER_DISASSOCIATE_CHECKOUT from '../user/mutations/MUTATION_USER_DISASSOCIATE_CHECKOUT';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id');
        t.string('firstName');
        t.string('lastName');
        t.string('email');
        t.string('displayName');
    }
})

export const UserQuery = extendType({
    type: 'Query',
    definition: t => {
        t.field('me', {
            type: 'User',
            async resolve(_, args, ctx) {
                try {
                    const session: Session = await getUserSession(ctx.req)

                    if (!session?.accessToken) {
                        return null
                    }

                    const data = await ctx.shopifyGraphql.request(QUERY_USER_GET_CUSTOMER, { customerAccessToken: session.accessToken })
                    const customer: Customer = data.customer

                    const displayName = customer.firstName ?? customer.lastName ?? customer.email;

                    return {
                        id: customer.id,
                        email: customer.email,
                        firstName: customer.firstName,
                        lastName: customer.lastName,
                        displayName: displayName
                    }

                } catch (err) {
                    console.error("Errore nel recupero dell'utente", err)
                }

                return null
            }
        })
    }
})

export const Mutation = extendType({
    type: 'Mutation',
    definition: t => {
        t.field('signout', {
            type: 'FieldResponse',
            async resolve(_, args, ctx) {
                try {
                    const session = await getUserSession(ctx.req)

                    await ctx.shopifyGraphql.request(MUTATION_USER_DELETE_ACCESSTOKEN, { customerAccessToken: session.accessToken })
                    // removeTokenCookie(ctx.res)
                    await setUserSession(ctx, {
                        checkoutId: null,
                        checkoutUrl: null,
                        accessToken: null,
                    })

                    // const checkoutId = await getCheckoutId(ctx)

                    //After signout, we should disassociate the current checkout customer from the checkout! (Helpful if user logins with another account)
                    // await ctx.shopifyGraphql.request<CheckoutCustomerAssociateType>(MUTATION_USER_DISASSOCIATE_CHECKOUT, { checkoutId })

                    return {
                        success: true,
                        message: `A presto!`,
                    }
                } catch (error) {
                    console.error(error)
                    return {
                        success: false,
                        message: `Errore nel logout, riprova tra poco!`,
                    }
                }
            }
        })
        t.field('signinEmail', {
            type: 'FieldResponse',
            args: { email: nonNull(stringArg()), password: nonNull(stringArg()) },
            async resolve(_, { email, password }, ctx) {


                if (!(email && password)) {
                    //TODO: Check error login
                }

                const variables: CustomerAccessTokenCreateInputType = {
                    input: {
                        email,
                        password,
                    }
                }

                let responseAccessToken: CustomerTokenCreateReturn

                try {
                    responseAccessToken = await ctx.shopifyGraphql.request(MUTATION_USER_CREATE_ACCESSTOKEN, variables)
                } catch (error) {
                    return {
                        success: false,
                        message: 'Errore nel login. Riprova più tardi!'
                    }
                }

                //

                return await handleAccessTokenCreate(responseAccessToken, ctx)
            }
        })
        t.field('signupCustomer', {
            type: 'FieldResponse',
            args: { email: nonNull(stringArg()), password: nonNull(stringArg()), firstName: stringArg() },
            async resolve(_, { email, password, firstName }, ctx) {

                if (!(email && password && firstName)) {
                    //TODO: Manage erorr
                }

                const variables: CustomerCreateInputType = {
                    input: {
                        email,
                        password,
                        firstName
                    }
                }

                const customerCreateResponse: CustomerCreateReturn = await ctx.shopifyGraphql.request(MUTATION_USER_CREATE, variables);
                console.log("customerCreateResponse", customerCreateResponse)
                if (customerCreateResponse.customerCreate.customerUserErrors?.length > 0) {
                    customerCreateResponse.customerCreate.customerUserErrors.forEach(err => console.log("Access token err", err))
                    return {
                        success: false,
                        message: "Errore imprevisto. Riprova tra poco!"
                    }
                } else {
                    const variables: CustomerAccessTokenCreateInputType = {
                        input: {
                            email,
                            password,
                        }
                    }
                    const data: CustomerTokenCreateReturn = await ctx.shopifyGraphql.request(MUTATION_USER_CREATE_ACCESSTOKEN, variables)

                    const response = await handleAccessTokenCreate(data, ctx)

                    return response
                }
            }
        })
    }
})

async function handleAccessTokenCreate(responseAccessTokenCreation: CustomerTokenCreateReturn, ctx: Context): Promise<NexusGenObjects["FieldResponse"]> {
    const errors = responseAccessTokenCreation.customerAccessTokenCreate?.customerUserErrors
    if (errors && errors.length) {
        errors.forEach(err => console.log("Access token err", err))

        const error = errors[0]
        let errorMessage: string = ""

        switch (error.code) {
            case "UNIDENTIFIED_CUSTOMER":
                errorMessage = "Nome utente o password non trovati"
                break
            default:
                errorMessage = "Errore nel login"
        }

        return {
            success: false,
            message: errorMessage
        }
    }


    const customerAccessToken = responseAccessTokenCreation.customerAccessTokenCreate.customerAccessToken
    const accessToken = customerAccessToken?.accessToken

    //Once the accessToken has been retrieved, we can associate the checkout with the current user
    const checkoutId = await getCheckoutId(ctx)
    await ctx.shopifyGraphql.request<CheckoutCustomerAssociateType>(MUTATION_USER_ASSOCIATE_CHECKOUT, { checkoutId, customerAccessToken: accessToken })

    if (accessToken) {
        await setUserSession(ctx, {
            accessToken
        })

        return {
            success: true,
            message: `Benvenuta/o!`,
        }
    }
}

type CustomerAccessTokenCreateInputType = {
    input: CustomerAccessTokenCreateInput
}

type CustomerCreateInputType = {
    input: CustomerCreateInput
}

type CustomerTokenCreateReturn = {
    customerAccessTokenCreate: {
        customerAccessToken: CustomerAccessToken
        customerUserErrors: Array<CustomerUserError>
    }
}

type CustomerCreateReturn = {
    customerCreate: {
        customer: Customer
        customerUserErrors: Array<CustomerUserError>
    }
}
