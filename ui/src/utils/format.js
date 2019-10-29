let format = {};

format.roundToOneDecimal = num => {
  let result = 0;
  if (num) result = Math.round((num * 10) / 10);
  return result;
};

format.round = (value, decimals) => {
  let multiplier = Math.pow(10, decimals || 0);
  return Math.round(value * multiplier) / multiplier;
};

export default format;
