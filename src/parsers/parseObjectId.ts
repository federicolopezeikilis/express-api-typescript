import { isValidObjectId, Types } from 'mongoose'

/**
 * Parses input to an ObjectId
 * 
 * @param objectId - input received from request in runtime
 * @param explain - string input name to explain the input if an error is thrown
 * 
 * @returns ObjectId
 * 
 */
export function parseObjectId(objectId: any): Types.ObjectId {
    if (!isValidObjectId(objectId)) throw new Error(`invalid id ${objectId}`)

    return new Types.ObjectId(objectId)
}