import { parseNumber } from '.'

/**
 * Parses input to a number if it is a positive number
 * 
 * @param number - input received from request in runtime
 * @param explain - string input name to explain the input if an error is thrown
 * 
 * @returns number
 * 
 */
export function parsePositiveNumber(number: any, explain: string = 'number'): number {
    number = parseNumber(number, explain)

    if (number < 0) throw new Error(`${number} is negative`)

    return number
}
