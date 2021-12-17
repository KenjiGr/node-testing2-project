const db = require('../../data/db-config');


function getAll() {
    return db('anime')
}
  
function getById(id) {
    return db('anime')
      .where('anime_id', id)
      .first()
}
  
async function insert(anime) {
    const [id] = await db('anime')
      .insert(anime)
    const ret = await getById(id)
    return ret
}
  
async function update(id, changes) {
    return null
}
  
function remove(id) {
    return null
}

module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById,
}