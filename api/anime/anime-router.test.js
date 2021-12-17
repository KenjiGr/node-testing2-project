const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

it('is the correct env', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('anime router', () => {
    describe('[GET] /anime', () => {
        let res 
        beforeEach(async () => {
            res = await request(server).get('/anime');
        })
        it('responds with a 200 okay', async () => {
            expect(res.status).toBe(200)
        })
        it('responds with all anime', async () => {
            expect(res.body).toHaveLength(4)
        })
    })
    describe('[POST] /anime', () => {
        let res 
        beforeEach(async () => {
            res = await request(server).post('/anime').send({name: 'Boruto'})
        })
        it('responds with a 201 created', async () => {
            expect(res.status).toBe(201)
        })
        it('responds with new anime', async () => {
            expect(res.body).toMatchObject({anime_id: 5,name: 'Boruto', watched: 0})
        })
    })
})