import { parseString } from "."

export function parseStringNotEmptyOrBlank(string: any, explain: string = 'string'): string {
    string = parseString(string, explain)

    if (string.length === 0) throw new Error(`${explain} is empty`)

    if (!string.trim().length) throw new Error(`${explain} is blank`)

    return string
}