const censusService = require('./service');
const PERSON_COLUMNS = require('../../models/person/index').PERSON_COLUMNS;

async function getAll(req, res, next) {
  const { db } = req;

  try {
    const info = await censusService.getPeople(db);

    res.status(200);
    return res.json(info);
  } catch (err) {
    next(err);
  }
}

async function getColumnInfo(req, res, next) {
  const { db, params } = req;

  try {
    const columnInfo = await censusService.getColumnInfo(db, params.column);

    res.status(200);
    return res.json(columnInfo);
  } catch (err) {
    next(err);
  }
}

async function validateColumnData(req, res, next) {
  const { params } = req;

  if(!params.column || !PERSON_COLUMNS.includes(params.column.trim())) {
    res.status(400);
    return res.json({message: "Bad Request", code: "E_BAD_REQUEST", data: null});
  }

  next();
}



module.exports = {
  getAll,
  getColumnInfo,
  validateColumnData
};
