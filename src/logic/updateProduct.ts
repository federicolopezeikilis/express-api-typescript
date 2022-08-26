import { ProductModel } from "../models";
import { ObjectToEditProduct } from "../types";

/**
 * 
 * Updates a product in DB
 * 
 * @param objectToEditProduct - ObjectToEditProduct type - _id is needed - currency, price, volume and stock properties are allowed
 * @returns undefined
 */
export async function updateProduct({ _id, currency, price, volume, stock }: ObjectToEditProduct): Promise<undefined> {    
    const result = await ProductModel.updateOne({ _id }, { $set: { currency, price, volume, stock } })

    if (result.matchedCount === 0) throw new Error(`product with id ${_id} not found`)

    return undefined
}