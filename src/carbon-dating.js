const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let regex = /^([0-9.]+)$/;
  if(regex.test(sampleActivity) && typeof(sampleActivity) === 'string') {
    sampleActivity = parseFloat(sampleActivity);
    if(sampleActivity > 0 && sampleActivity <15) {
      return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD));
    } else {
      return false;
    }
  } else {
    return false;
  }
};