const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity !== String|| sampleActivity === null) {
    return false;
  } else {
    let sample = Number(sampleActivity);
    return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / k);

  }
};
