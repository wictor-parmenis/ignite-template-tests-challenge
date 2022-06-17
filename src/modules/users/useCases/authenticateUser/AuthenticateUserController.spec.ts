import supertest from 'supertest'
import { app } from '../../../../app'
import connection from '../../../../database'

let connectionDb;
describe('AuthenticateUserController', () => {

  beforeEach(() => {
    connectionDb = connection();

    
  })

  it('should be defined', async () => {
    const response = await supertest(app).post('/api/v1/session').send({
      email: 'wictor@gmail.com',
      password: '123456'
    })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })
})

