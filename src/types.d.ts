import { Currency } from "./enums";
import { Types } from 'mongoose'

interface Product {
    _id: Types.ObjectId;
    name: string;
    currency: Currency;
    price: number;
    volume: number;
    stock: number;
}

type ProductToCreate = Omit<Product, '_id'>; 

interface ObjectToEditProduct {
    _id: Types.ObjectId;
    currency?: Currency;
    price?: number;
    volume?: number;
    stock?: number;
}