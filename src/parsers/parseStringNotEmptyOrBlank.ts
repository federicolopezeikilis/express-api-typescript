import { parseString } from "."

/**
 * Parses input to a string if it is not empty or blank
 * 
 * @param string - input received from request in runtime
 * @param explain - string input name to explain the input if an error is thrown
 * 
 * @returns string
 * 
 */
export function parseStringNotEmptyOrBlank(string: any, explain: string = 'string'): string {
    string = parseString(string, explain)

    if (string.length === 0) throw new Error(`${explain} is empty`)

    if (!string.trim().length) throw new Error(`${explain} is blank`)

    return string
}