import { NexusGenObjects } from "../../../generated/nexus-typegen"
import { MailingAddress, MailingAddressConnection, MailingAddressEdge } from "../../../generated/shopify.model"



export const manageAddresses = async (addressesConnection: MailingAddressConnection): Promise<Array<NexusGenObjects["Address"]>> => {
    return await Promise.all(addressesConnection?.edges?.map(async ({ node }: MailingAddressEdge) => await manageAddress(node))) ?? []
}

export const manageAddress = async (addressData: MailingAddress): Promise<NexusGenObjects["Address"]> => {

    const address: NexusGenObjects["Address"] = {
        id: addressData.id,
        address1: addressData.address1,
        address2: addressData.address2,
        city: addressData.city,
        country: addressData.country,
        province: addressData.province,
        zip: addressData.zip,
        firstName: addressData.firstName,
        lastName: addressData.lastName,
        active: false
    }

    return address
}