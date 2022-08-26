import { Schema } from 'mongoose'
import { Product } from "../../types"
import { Currency } from '../../enums'

export const productSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    currency: {
        type: String,
        enum: Object.values(Currency)
    },
    price: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})