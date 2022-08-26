import { Product } from "../types"
import { Types } from 'mongoose'
import { ProductModel } from "../models"

/**
 * 
 * Retrieves a product from DB
 * 
 * @param _id - ObjectId - id from the product to retrieve
 * @returns Product interface
 */
export async function retrieveProduct(id: Types.ObjectId): Promise<Product> {
   const product = await ProductModel.findById(id).select('name currency price volume stock').lean()

   if (!product) throw new Error(`product with id ${id} does not exist`)

   return product
}