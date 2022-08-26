import { Types } from 'mongoose'
import { ProductModel } from '../models'
import { ProductToCreate } from '../types'

/**
 * 
 * Creates a new Product in DB and return its id
 * 
 * @param productToCreate - ProductToCreate type
 * @returns ObjectId - New product id
 */
export async function createProduct({ name, currency, price, volume, stock }: ProductToCreate): Promise<Types.ObjectId> {
    const product = await ProductModel.findOne({ name })

    debugger

    if (product) throw new Error(`product with name ${name} already exists`)

    const productCreated = await ProductModel.create({ name, currency, price, volume, stock })

    return productCreated.id
}