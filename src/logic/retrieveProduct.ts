import { Product } from "../types"
import { Types } from 'mongoose'
import { ProductModel } from "../models"

export async function retrieveProduct(id: Types.ObjectId): Promise<Product> {
   const product = await ProductModel.findById(id).select('name currency price volume stock').lean()

   if (!product) throw new Error(`product with id ${id} does not exist`)

   return product
}