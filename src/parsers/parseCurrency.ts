import { parseString } from '.'
import { Currency } from '../enums'

export function parseCurrency(currency: any): Currency {
    currency = parseString(currency, 'currency')

    if (!Object.values(Currency).includes(currency))
        throw new Error(`currency '${currency}' is not valid`)

    return currency
}