import { ProductModel } from "../models";
import { ObjectToEditProduct } from "../types";

export async function updateProduct({ _id, currency, price, volume, stock }: ObjectToEditProduct): Promise<undefined> {
    // const result = await ProductModel.updateOne({ _id }, { ...(currency && {currency}), ...(price && {price}), ...(volume && {volume}), ...(stock && {stock})})
    
    const result = await ProductModel.updateOne({ _id }, { $set: { currency, price, volume, stock } })

    if (result.matchedCount === 0) throw new Error(`product with id ${_id} not found`)

    return undefined
}