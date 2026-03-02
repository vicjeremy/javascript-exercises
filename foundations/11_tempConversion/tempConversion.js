const freezingPoint = 32;
const convertToCelsius = function (tempFahrenheit) {
  const ratioCelsius = 5 / 9;
  let result = (tempFahrenheit - freezingPoint) * ratioCelsius;
  const roundedOneDecimal = Math.round(result * 10) / 10;
  return roundedOneDecimal;
};

const convertToFahrenheit = function (tempCelsius) {
  const ratioFahrenheit = 9 / 5
  let result = ratioFahrenheit * tempCelsius + freezingPoint; ;
  const roundedOneDecimal = Math.round(result * 10) / 10;
  return roundedOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
