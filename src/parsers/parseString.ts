export function parseString(string: any, explain: string = 'string'): string {
    if (typeof string !== 'string') throw new Error(`${explain} is not a string`)

    return string
}