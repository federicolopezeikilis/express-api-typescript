/**
 * Parses input to a number
 * 
 * @param number - input received from request in runtime
 * @param explain - string input name to explain the input if an error is thrown
 * 
 * @returns number
 * 
 */
export function parseNumber(number: any, explain: string = 'number'): number {
    if (typeof number !== 'number') throw new Error(`${explain} is not a number`)

    return number
}