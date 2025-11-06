const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  const nStr = n.toString();
  const nArr = nStr.split('');
  nArr.forEach((v, i) => {
    const spliced = nArr.toSpliced(i, 1);
    const newNum = Number(spliced.join(''));
    if(newNum > maxNum) maxNum = newNum
  })
  return maxNum;
}

module.exports = {
  deleteDigit
};
