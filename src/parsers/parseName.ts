import { parseStringNotEmptyOrBlank } from "."

export function parseName(name: any): string {
    return parseStringNotEmptyOrBlank(name)
}