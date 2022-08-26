export function parseNumber(number: any, explain: string = 'number'): number {
    if (typeof number !== 'number') throw new Error(`${explain} is not a number`)

    return number
}