const Anime = require('./anime-model');
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

describe('anime model', () => {
    describe('getAll', () => {
        let result
        beforeEach(async () => {
            result = await Anime.getAll()
        })
        it('resolves all anime in the table', async () => {
            expect(result).toHaveLength(4)
        })
        it('resolves entire anime in the call', async () => {
            expect(result[0]).toMatchObject({anime_id: 1, name: 'Naruto',watched: 1})
        })
    })
    // describe()
})
