import { ProductToCreate } from "../types";
import { parseCurrency, parsePositiveNumber, parseStringNotEmptyOrBlank } from "../parsers";

export function toProductToCreate(name: any, currency: any, price: any, volume: any, stock: any): ProductToCreate {
    return {
        name: parseStringNotEmptyOrBlank(name, 'name'),
        currency: parseCurrency(currency),
        price: parsePositiveNumber(price, 'price'),
        volume: parsePositiveNumber(volume, 'volume'),
        stock: parsePositiveNumber(stock, 'stock')
    }
}