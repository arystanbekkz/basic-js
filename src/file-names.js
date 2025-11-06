const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const resArr = [];
  const m = new Map();
  names.forEach(name => {
    let newName = name;
    if(m.has(name)) {
      let k = m.get(name);
      while(m.has(`${name}(${k})`)) {
        k += 1;
      }
      newName = name + `(${k})`
    } else {
      m.set(name, 1)
    }

    m.set(newName, 1)
    resArr.push(newName)
  })
  return resArr;
}

module.exports = {
  renameFiles
};
