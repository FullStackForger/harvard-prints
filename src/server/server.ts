import { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

export type AppConfig = {
    app: Express
}

export function startServer({ app }:AppConfig): Express  {
    
    const { API_KEY } = process.env
    if (!API_KEY) {
        throw new Error('Invalid configuration API_KEY is missing.')
    }

    app.use(cors())
    app.get('/api/status', (_, res) => {
        res.status(200).send({ status: 'ok'})
    })        

    
    const endpoint = 'https://api.harvardartmuseums.org/object'
    
                
    app.get('/api/prints', async (req, res) => {
        const { page = 1} = req.query
        const search = `size=10&page=${page}&classification=Prints&q=verificationlevel:4&apikey=${API_KEY}`
        const { data } = await axios.get(`${endpoint}?${search}`)
        res.status(200).send({ ...data })            
    })    

    return app
}


