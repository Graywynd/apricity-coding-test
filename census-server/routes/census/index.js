const express = require('express');

const censusController = require('./controller');

module.exports = () => {
  const router = express.Router();

  router.get('/', censusController.getInfo);

  return router;
};
