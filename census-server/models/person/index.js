const CENSUS_TABLE_NAME = 'census_learn_sql';

/**
 * Fetch all the info available in database
 *
 * @param {Object} db - The database instance
 *
 * @returns {Promise<Person[]>} The list of people with ingo
 */
async function getAll(db) {
  const people = await db.select('*').from(CENSUS_TABLE_NAME);

  return people;
}



module.exports = {
  getAll
};
