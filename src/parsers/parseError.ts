/**
 * Parses input to an Error
 * 
 * @param currency - input something that was thrown in runtime
 * 
 * @returns an instance of Error
 * 
 */
export function parseError(error: any): Error {
    if (!(error instanceof Error)) throw new Error('something that is not an error was thrown')

    return error
}