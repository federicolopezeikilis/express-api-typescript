import { ObjectToEditProduct } from "../types";
import { parseCurrency, parseObjectId, parsePositiveNumber } from "../parsers";

export function toObjectEditProduct({ _id, price, currency, volume, stock }: { _id: any, price: any, currency: any, volume: any, stock: any }): ObjectToEditProduct {
    let parsedId

    if (_id !== undefined)
        parsedId = parseObjectId(_id)
    else
        throw new Error('_id property has not been provided')

    if (price === undefined && currency === undefined && volume === undefined && stock === undefined)
        throw new Error('no valid properties have been provided to update the product')

    return {
        _id: parsedId,
        ...(currency && { currency: parseCurrency(currency) }),
        ...(price && { price: parsePositiveNumber(price, 'price') }),
        ...(volume && { volume: parsePositiveNumber(volume, 'volume') }),
        ...(stock && { stock: parsePositiveNumber(stock, 'stock') })
    }
}