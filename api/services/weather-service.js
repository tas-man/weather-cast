const db = require('../utils/db-connector');
const chalk = require('chalk');
const weatherApi = require('../utils/axios-conf');
const helpers = require('../utils/weather-helpers');

let weatherService = {};
const FiveDay = db.FiveDay;
const fiveDayCache = [];

const findInCache = city => {
  if (fiveDayCache[city]) {
    if (!helpers.forecastIsCurrent(fiveDayCache[city].timestamp))
      return null;
  }
  return fiveDayCache[city];
};

const updateCache = fiveDay => {
  fiveDayCache[fiveDay.city] = fiveDay;
  console.log(`Updated cache with forecast for ${fiveDay.city}`);
};

const storeInDB = async fiveDay => {
  const existingFiveDay = await FiveDay.findOne({
    city: fiveDay.city,
  });
  if (existingFiveDay) {
    existingFiveDay.city = fiveDay.city;
    existingFiveDay.data = fiveDay.data;
    existingFiveDay.timestamp = Date.now();
    await existingFiveDay.save();
    console.log(`Updated database with forecast for ${fiveDay.city}`);
  } else {
    await fiveDay.save();
    console.log(`Added new city to database: ${fiveDay.city}`);
  }
};

weatherService.getCurrentWeatherByCity = async params => {
  const res = await weatherApi.getCurrentWeatherByCity(params.city);
  try {
    if (!res.data.name) throw new Error('Invalid response format!');
    return res.data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

weatherService.getFiveWeatherDayByCity = async params => {
  helpers.printKeysOfArray(fiveDayCache, 'Cached cities: ');
  const cachedFiveDay = findInCache(params.city);
  if (cachedFiveDay) {
    console.log(chalk.cyan('Forecast read from cache'));
    return cachedFiveDay;
  } else {
    const fiveDay = await FiveDay.findOne({ city: params.city });
    if (fiveDay && helpers.forecastIsCurrent(fiveDay.timestamp)) {
      console.log(chalk.yellow('Forecast read from database'));
      updateCache(fiveDay);
      return fiveDay;
    } else {
      console.log(
        chalk.red('Fetching forecast from Open Weather Map'),
      );
      try {
        const res = await weatherApi.getForecastByCity(params.city);
        if (!res.data.city.name)
          throw new Error('Invalid response format!');
        const fiveDay = new FiveDay({
          city: res.data.city.name,
          data: res.data,
          timestamp: Date.now(),
        });
        updateCache(fiveDay);
        await storeInDB(fiveDay);
        return fiveDay;
      } catch (err) {
        console.log(err.message);
        throw err;
      }
    }
  }
};

module.exports = weatherService;
