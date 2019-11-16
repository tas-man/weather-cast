const chalk = require('chalk');
const conf = require('../constants/config.json');

const millisToSeconds = (millis) => {
    return Math.floor(millis / 1000); 
};

const forecastIsCurrent = (timestamp) => {
  const currentTime = Date.now();
  console.log(timestamp > currentTime - conf.HOUR_MILLIS);
  return timestamp > currentTime - conf.HOUR_MILLIS; 
};

const printKeysOfArray = (arr, msg) => {
    let listOfKeys = [];
    Object.keys(arr).forEach(key => {
      listOfKeys.push(key);
    });
    listOfKeys.length < 1 && listOfKeys.push('0');
    console.log(chalk.blue(`${msg}${listOfKeys}`));
  }

module.exports = {
    millisToSeconds,
    forecastIsCurrent,
    printKeysOfArray
}