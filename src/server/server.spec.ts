import express from 'express'
import request from 'supertest'

import { startServer } from './server'

describe('Server', () => {  
  const app = startServer({ app: express(), port: 5000 })  

  it('starts up correctly', async () => {    
    await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
  })

  describe('API Key validation', () => {      
    let { API_KEY } = process.env

    beforeAll(() => {
      delete process.env.API_KEY
    })

    afterAll(() => {
      process.env.API_KEY = API_KEY
    })

    it('throws for missing API_KEY', () => {      
      expect(() => startServer({ app: express(), port: 5000 })).toThrow(new Error('Invalid configuration API_KEY is missing.'))      
    })
  })

  describe('/prints', () => {
    it('returns list of prints', async () => {      
      await request(app)
        .get('/prints')
        .expect(200)
        .expect('Content-Type', /json/)
    })
  })

})





