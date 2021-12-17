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
    describe('getById', () => {
        it('resolves an anime with given id', async () => {
            const res = await Anime.getById(1);
            expect(res).toMatchObject({anime_id: 1, name: 'Naruto',watched: 1})
        }) 
    })
    describe('insert', () => {
        it('inserts anime to database', async () => {
            await Anime.insert({name: 'Boruto'});
            const [boruto] = await db('anime').where('anime_id', 5);
            expect(boruto).toMatchObject({anime_id: 5,name: 'Boruto', watched: 0})
        })
        it('resolves new anime with anime_id, name, watched', async () => {
            const res = await Anime.insert({name: 'Boruto'});
            expect(res).toMatchObject({anime_id: 5,name: 'Boruto', watched: 0})
        })
    })
})
