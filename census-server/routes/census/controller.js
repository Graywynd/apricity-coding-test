const censusService = require('./service');

async function getInfo(req, res, next) {
  const { db } = req;

  try {
    const info = await censusService.getPeople(db);

    return res.json(info);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getInfo,
};
