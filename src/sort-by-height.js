const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr)) throw new Error()
  const negativeIndex = [];
  let filteredArr = [];
  arr.forEach((el, index) => {
    if (el === -1) {
      negativeIndex.push(index)
    } else {
      filteredArr.push(el)
    }
  })
  filteredArr = filteredArr.sort((a, b) => a - b)
  negativeIndex.forEach(idx => {
    filteredArr.splice(idx, 0, -1)
  })
  return filteredArr;
}

module.exports = {
  sortByHeight
};
