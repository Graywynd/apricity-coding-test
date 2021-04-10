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

/**
 * Fetchs column aggregated info
 *
 * @param {Object} db - The database instance
 * @param {string} columnName - The column name
 *
 * @returns {Promise<>} The column aggregated Info
 */
async function getColumnInfo(db, columnName) {
  return personModel.getColumnInfo(db, columnName);
}

module.exports = {
  getPeople,
  getColumnInfo
};
