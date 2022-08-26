import { Types } from 'mongoose'
import { ProductModel } from '../models'

export async function deleteProduct(_id: Types.ObjectId): Promise<undefined> {
    const result = await ProductModel.deleteOne({ _id })

    if (result.deletedCount === 0) throw new Error(`product with id ${_id} does not exist`)

    return undefined
}