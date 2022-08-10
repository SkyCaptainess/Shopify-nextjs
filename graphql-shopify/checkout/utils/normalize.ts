import { CartCheckout, LineItem } from "../checkout-interface";
import { Checkout, CheckoutLineItemEdge, CollectionConnection, Collection } from '../../../generated/shopify.model'


export function normalizeCart(checkout: Checkout): CartCheckout {
    return {
        id: checkout.id,
        customerId: '',
        email: '',
        createdAt: checkout.createdAt,
        currency: {
            code: checkout.totalPriceV2?.currencyCode,
        },
        taxesIncluded: checkout.taxesIncluded,
        lineItems: checkout.lineItems?.edges.map(normalizeLineItem),
        lineItemsSubtotalPrice: +checkout.subtotalPriceV2?.amount,
        subtotalPrice: +checkout.subtotalPriceV2?.amount,
        totalPrice: checkout.totalPriceV2?.amount,
        discounts: [],
    }
}

export function normalizeLineItem({
    node: { id, title, variant, quantity, customAttributes },
}: CheckoutLineItemEdge): LineItem {

    const collection: Collection = variant?.product?.collections?.edges.length ? variant.product.collections.edges[0].node : null
    const lineItem: LineItem = {
        id,
        variantId: String(variant?.id),
        productId: String(variant?.id),
        name: `${title}`,
        quantity,
        handle: variant?.product?.handle,
        categoryHandle: collection?.handle,
        variant: {
            id: String(variant?.id),
            sku: variant?.sku ?? '',
            name: variant?.title!,
            description: variant?.product?.description,
            image: {
                url: variant?.image?.originalSrc,
            },
            requiresShipping: variant?.requiresShipping ?? false,
            price: variant?.priceV2?.amount,
            listPrice: variant?.compareAtPriceV2?.amount,
            quantityAvailable: variant.quantityAvailable,
            availableForSale: variant.availableForSale
        },
        discounts: [],
        options:
            // By default Shopify adds a default variant with default names, we're removing it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
            variant?.title == 'Default Title'
                ? []
                : [
                    {
                        value: variant?.title,
                    },
                ],
    }

    if (customAttributes?.length) {
        customAttributes.forEach(ca => {
            switch (ca.key) {
                case "note":
                    lineItem.note = ca.value
                    break;
            }
        })
    }

    return lineItem
}