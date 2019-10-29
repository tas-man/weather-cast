const express = require('express');
const weatherService = require('../services/weather-service');

const current = (req, res, next) => {
  weatherService
    .getCurrentWeatherByCity(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
};

const fiveday = (req, res, next) => {
  weatherService
    .getFiveWeatherDayByCity(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
};

const router = express.Router();
router.post('/current', current);
router.post('/fiveday', fiveday);

module.exports = router;
