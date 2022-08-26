import { ProductToCreate } from "../types";
import { parseCurrency, parseName, parsePositiveNumber, parsePrice } from "../parsers";

export function toProductToCreate(name: any, currency: any, price: any, volume: any, stock: any): ProductToCreate {
    return {
        name: parseName(name),
        currency: parseCurrency(currency),
        price: parsePrice(price),
        volume: parsePositiveNumber(volume, 'volume'),
        stock: parsePositiveNumber(stock, 'stock')
    }
}