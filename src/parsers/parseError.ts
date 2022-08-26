export function parseError(error: any): Error {
    if (!(error instanceof Error)) throw new Error('something that is not an error was thrown')

    return error
}