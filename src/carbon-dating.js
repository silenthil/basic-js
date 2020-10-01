const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( typeof sampleActivity!='string' || sampleActivity===undefined || sampleActivity || isFinite(sampleActivity)) return false;
  let k;
  let result;
  k=0.693/HALF_LIFE_PERIOD;
  result=(Math.log(sampleActivity/MODERN_ACTIVITY))/k;
  console.log(result);
  return Math.ceil(result);
};
