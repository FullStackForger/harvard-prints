import express from 'express'
import { startServer } from './server'

const port = 9000
const server = startServer({ app: express(), port })

server.listen(port, () => {
    console.log(`Running on port ${port}`)
})