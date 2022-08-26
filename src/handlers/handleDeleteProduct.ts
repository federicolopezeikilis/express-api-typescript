import { parseObjectId } from "../parsers"
import { deleteProduct } from "../logic"
import express from 'express'
import { handleErrorsAndResponse } from "../utils"

export async function handleDeleteProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
        const { params: { productId } } = req

        const _id = parseObjectId(productId)

        await deleteProduct(_id)

        res.status(204).json()
    } catch (error) {
        handleErrorsAndResponse(error, res)
    }
}