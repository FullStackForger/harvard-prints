import { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

export type AppConfig = {
    app: Express,
    port: number
}

export function startServer({ app, port }:AppConfig): Express  {
    
    const { API_KEY } = process.env
    if (!API_KEY) {
        throw new Error('Invalid configuration API_KEY is missing.')
    }

    app.use(cors())
    app.get('/api/status', (_, res) => {
        res.status(200).send({ status: "ok"})
    })        

    const endpoint = 'https://api.harvardartmuseums.org/object'
    const search = `size=10&page=1&classification=Prints&q=verificationlevel:4&apikey=${API_KEY}`
                
    app.get('/api/prints', async (_, res) => {
        const { data } = await axios.get(`${endpoint}?${search}`)
        res.status(200).send({ ...data })            
    })    

    return app
}


