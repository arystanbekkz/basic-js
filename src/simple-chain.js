const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  separator: '~~',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join(this.separator);
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
