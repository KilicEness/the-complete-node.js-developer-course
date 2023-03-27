const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Enes',
        email: 'eneskilic@gmail.com',
        password: 'password123'
    }).expect(201)
})