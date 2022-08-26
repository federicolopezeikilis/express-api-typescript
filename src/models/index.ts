import { productSchema } from "./schemas"
import { model } from "mongoose"
import { Product } from "../types"

export const ProductModel = model<Product>('Product', productSchema)