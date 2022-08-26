import { isValidObjectId, Types } from 'mongoose'

export function parseObjectId(objectId: any): Types.ObjectId {
    if(!isValidObjectId(objectId)) throw new Error(`invalid id ${objectId}`)

    return new Types.ObjectId(objectId)
}