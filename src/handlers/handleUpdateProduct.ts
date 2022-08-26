import { toObjectEditProduct, handleErrorsAndResponse } from "../utils"
import { updateProduct } from "../logic"
import express from 'express'

export async function handleUpdateProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
        const { body: { price, currency, volume, stock }, params: { productId: _id } } = req

        const objectEditProduct = toObjectEditProduct({ _id, price, currency, volume, stock })

        await updateProduct(objectEditProduct)

        res.status(200).json()
    } catch (error) {
        handleErrorsAndResponse(error, res)
    }
}