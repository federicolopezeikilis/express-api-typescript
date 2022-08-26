/**
 * Parses input to a string
 * 
 * @param string - input received from request in runtime
 * @param explain - string input name to explain the input if an error is thrown
 * 
 * @returns string
 * 
 */
export function parseString(string: any, explain: string = 'string'): string {
    if (typeof string !== 'string') throw new Error(`${explain} is not a string`)

    return string
}