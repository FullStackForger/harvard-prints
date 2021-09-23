import { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()

export type AppConfig = {
    app: Express,
    port: number
}

export function startServer({ app, port }:AppConfig): Express  {
    if (!process.env.API_KEY) {
        throw new Error('Invalid configuration API_KEY is missing.')
    }

    app.get('/api/status', (_, res) => {
        res.status(200).send({ status: "ok"})
    })
    
    app.get('/api/prints', async (_, res) => {
        res.status(200).send({ inf: {}, records: []})
    })    

    return app
}

