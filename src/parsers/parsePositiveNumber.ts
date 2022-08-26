import { parseNumber } from '.'

export function parsePositiveNumber(number: any, explain: string = 'number'): number {
    number = parseNumber(number, explain)

    if (number < 0) throw new Error(`${number} is negative`)

    return number
}
