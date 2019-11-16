const axios = require('axios');
const conf = require('../constants/config.json');
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

const request = (endpoint, city) =>
  axios({
    url: `${BASE_URL}${endpoint}`,
    method: 'GET',
    headers: {
      ContentType: 'application/json',
    },
    params: {
      q: city,
      units: conf.OWM_API_UNIT,
      mode: conf.OWM_API_MODE,
      appid: conf.OWM_API_KEY,
    },
  });

let weatherApi = {};

weatherApi.getCurrentWeatherByCity = city =>
  request('/weather?', city);

weatherApi.getForecastByCity = city => request('/forecast?', city);

module.exports = weatherApi;
