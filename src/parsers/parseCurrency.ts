import { parseString } from '.'
import { Currency } from '../enums'

/**
 * Parses input to a Currency enum type
 * 
 * @param currency - input received from request in runtime
 * 
 * @returns Currency enum type
 * 
 */
export function parseCurrency(currency: any): Currency {
    currency = parseString(currency, 'currency')

    if (!Object.values(Currency).includes(currency))
        throw new Error(`currency '${currency}' is not valid`)

    return currency
}