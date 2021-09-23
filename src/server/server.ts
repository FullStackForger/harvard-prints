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

    app.get('/', (_, res) => {
        res.status(200).send({ status: "ok"})
    })
    
    return app
}

