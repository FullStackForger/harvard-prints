import { Express } from 'express'

export type AppConfig = {
    app: Express,
    port: number
}

export function startServer({ app, port }:AppConfig): Express  {
    app.get('/', (_, res) => {
        res.status(200).send({ status: "ok"})
    })
    
    return app
}

