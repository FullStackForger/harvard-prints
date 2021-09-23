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
})





