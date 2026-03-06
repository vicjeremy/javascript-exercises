const getTheTitles = function(array) {
    return array.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue.title);
  return accumulator;
}, []);
};

// Do not edit below this line
module.exports = getTheTitles;
