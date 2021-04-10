const express = require('express');

const censusController = require('./controller');

module.exports = () => {
  const router = express.Router();

  router.get('/', censusController.getAll);

  router.get('/:column', censusController.validateColumnData ,censusController.getColumnInfo);

  return router;
};
