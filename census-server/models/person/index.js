const CENSUS_TABLE_NAME = 'census_learn_sql';
const PERSON_COLUMNS = ["class of worker", "industry code", "occupation code", "education", "wage per hour", "last education", "marital status", "major industry code", "major occupation code", "mace", "hispanice", "sex", "member of labor", "reason for unemployment", "fulltime", "capital gain", "capital loss", "dividends", "income tax liability", "previous residence region", "previous residence state", "household-with-family", "household-simple", "weight", "msa-change", "reg-change", "within-reg-change", "lived-here", "migration prev res in sunbelt", "num persons worked for employer", "family members under 118", "father birth country", "mother birth country", "birth country", "citizenship", "own business or self employed", "fill questionnaire for veteran's admin", "veterans benefits", "weeks worked in year", "year", "salary range"]

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

/**
 * Fetch all the aggregated info available in database by column
 *
 * @param {Object} db - The database instance
 * @param {string} columnName - The column name
 *
 * @returns {Promise<>} The column aggregated info
 */
async function getColumnInfo(db, columnName) {
  return db.select(db.raw(`distinct("${columnName}") as value, count(1) as personCount, avg(age) as avgAge`))
    .from(CENSUS_TABLE_NAME).whereRaw(`"${columnName}" is not null`).groupBy('value');
}


module.exports = {
  getAll,
  getColumnInfo,
  PERSON_COLUMNS
};
