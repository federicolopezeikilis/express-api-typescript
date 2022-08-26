import { toProductToCreate, handleErrorsAndResponse } from "../utils"
import { createProduct } from "../logic"
import express from 'express'

export async function handleCreateProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
        const { body: { name, currency, price, volume, stock } } = req

        const newProductToCreate = toProductToCreate(name, currency, price, volume, stock)

        const productId = await createProduct(newProductToCreate)

        res.status(201).json({ productId })

    } catch (error) {
        handleErrorsAndResponse(error, res)
    }
}