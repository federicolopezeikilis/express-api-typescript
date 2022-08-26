require('dotenv').config()
import { connect, disconnect } from 'mongoose'
import express from 'express'
import { handleCreateProduct, handleRetrieveProduct, handleUpdateProduct, handleDeleteProduct } from './handlers'
import { parseString } from './parsers'

const api = express()

const jsonBodyParser = express.json()

const PORT = process.argv[2] || 8080

const mongoUrl = parseString(process.env.MONGODB_URL)

    ; (async () => {
        await connect(mongoUrl)

        console.log(`DB connected on ${mongoUrl}`)

        api.post('/api/products', jsonBodyParser, handleCreateProduct)

        api.get('/api/products/:productId', handleRetrieveProduct)

        api.patch('/api/products/:productId', jsonBodyParser, handleUpdateProduct)

        api.delete('/api/products/:productId', handleDeleteProduct)

        api.listen(PORT, () => console.log(`api listen on port ${PORT}`))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('DB disconnected')
            process.exit(0)
        })
    })()
