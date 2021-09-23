import express from 'express'
import request from 'supertest'

import { startServer } from './server'

describe('Server', () => {  
  const app = startServer({ app: express(), port: 5000 })  

  

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

  
  describe('/api', () => {

  
  describe('/api/status GET', () => {
    it('returns status ok', async () => {    
      const testRequest = await request(app)
        .get('/api/status')
        .expect(200)
        .expect('Content-Type', /json/)

      expect(testRequest.body).toEqual({ status: 'ok' })
    })
  })
    
  describe('GET /api/prints', () => {
      it('returns list of prints', async () => {      
        await request(app)
          .get('/api/prints')
          .expect(200)
          .expect('Content-Type', /json/)
      })
    })
  })
})
