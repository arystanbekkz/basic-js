const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = [];
  members.forEach(member => {
    if (typeof member === 'string') {
      const trim = member.trim()
      if (trim) {
        name.push(trim.at(0).toUpperCase());
      }
    }
  })
  return name.length ? name.sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
