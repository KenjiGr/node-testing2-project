exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('anime').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('anime').insert([
        {name: 'Naruto', watched: true},
        {name: 'Death note', watched: true},
        {name: 'Seven deadly sins', watched: true},
        {name: 'One piece', watched: false},
      ]);
    });
};
