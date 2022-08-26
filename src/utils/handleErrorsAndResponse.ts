import express from 'express'
import { parseError } from '../parsers'

export function handleErrorsAndResponse(error: any, res: express.Response) {
    try {
        const parsedError = parseError(error)

        res.status(400).json({ error: parsedError.message })
        
    } catch (e) {
        res.status(500).send()
    }
}

