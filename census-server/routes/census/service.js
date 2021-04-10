const personModel = require('../../models/person/index');

/**
 * Handle the fetch of all the people in census
 *
 * @param {Object} db - The database instance
 *
 * @returns {Promise<person[]>} The list of people
 */
async function getPeople(db) {
  return personModel.getAll(db);
}

module.exports = {
  getPeople
};
