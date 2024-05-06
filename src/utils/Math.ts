/**
 * return a value that has been rounded to a set precision
 * @param {number} value the value to round
 * @param {number} precision the precision (decimal places), default: 3
 * @returns {number}
 */
const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));

/**
 * return a value that has been limited between min & max
 * @param {number} value the value to clamp
 * @param {number} min minimum value to allow, default: 0
 * @param {number} max maximum value to allow, default: 100
 * @returns {number}
 */
const clamp = (value: number, min = 0, max = 100) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * return a value that has been re-mapped according to the from/to
 * - for example, adjust(10, 0, 100, 100, 0) = 90
 * @param {number} value the value to re-map (or adjust)
 * @param {number} fromMin min value to re-map from
 * @param {number} fromMax max value to re-map from
 * @param {number} toMin min value to re-map to
 * @param {number} toMax max value to re-map to
 * @returns {number}
 */
const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) => {
  return round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
};

export { round, clamp, adjust };
