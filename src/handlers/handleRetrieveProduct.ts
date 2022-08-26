import { parseObjectId } from "../parsers"
import { retrieveProduct } from "../logic"
import express from 'express'
import { handleErrorsAndResponse } from "../utils"

export async function handleRetrieveProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
        const { params: { productId } } = req

        const id = parseObjectId(productId)

        const product = await retrieveProduct(id)

        res.status(200).json(product)
    } catch (error) {
        handleErrorsAndResponse(error, res)
    }
}