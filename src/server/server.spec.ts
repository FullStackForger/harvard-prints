import express from 'express'
import request from 'supertest'
import axios from 'axios'
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
      it('fetches data from api.harvardartmuseums.org endpoint', async () => {
        const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce('{}')
        const testRequest = await request(app)
          .get('/api/prints')
          .expect(200)
          .expect('Content-Type', /json/)
                  
          
          const { API_KEY } = process.env
          expect(getSpy).toHaveBeenCalledWith(`https://api.harvardartmuseums.org/object?size=10&page=1&classification=Prints&q=verificationlevel:4&apikey=${API_KEY}`)
      })

      it('returns list of prints with correct info meta', async () => {      
        const testRequest = await request(app)
          .get('/api/prints')
          .expect(200)
          .expect('Content-Type', /json/)

        const { info, records } = testRequest.body        
        expect(info).toMatchObject({
          totalrecordsperquery: expect.any(Number),
          totalrecords: expect.any(Number),
          pages: expect.any(Number),
          page: expect.any(Number),
        })

        expect(records).not.toHaveLength(0)        
      })
    })
  })
})
