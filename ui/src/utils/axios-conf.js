import axios from 'axios';
import conf from '../constants/config.json';
const BASE_URL = `http://127.0.0.1:${conf.API_SERVER_PORT}/api`;

const request = (endpoint, city) =>
  axios({
    url: `${BASE_URL}${endpoint}`,
    method: 'POST',
    headers: {
      ContentType: 'application/json',
    },
    data: {
      city: city,
    },
  });

let weatherApi = {};

weatherApi.getFivedayWeatherByCity = city =>
  request('/fiveday', city);

weatherApi.getCurrentWeatherByCity = city =>
  request('/current', city);

export default weatherApi;
