import { parsePositiveNumber } from "."

export function parsePrice(price: any): number {
    return parsePositiveNumber(price, 'price')
}