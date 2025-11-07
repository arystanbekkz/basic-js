const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  minCode = 65;
  maxCode = 90;
  codeDiff = this.maxCode - this.minCode + 1;
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  isLatinLetter(char) {
    return /^[A-Za-z]$/.test(char)
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!")
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let keyIndex = 0;
    for(let i = 0; i < message.length; i += 1) {
      const ch = message[i];
      if(this.isLatinLetter(ch)) {
        const chCode = ch.charCodeAt(0);
        const keyChCode = key.charCodeAt(keyIndex % key.length)
        const shift = keyChCode - this.minCode
        res += String.fromCharCode(this.minCode + ((chCode - this.minCode + shift) % this.codeDiff))
        keyIndex += 1;
      } else {
        res += ch;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!")
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let keyIndex = 0;
    for(let i = 0; i < encryptedMessage.length; i += 1) {
      const ch = encryptedMessage[i];
      if(this.isLatinLetter(ch)) {
        const chCode = ch.charCodeAt(0);
        const keyChCode = key.charCodeAt(keyIndex % key.length)
        const shift = keyChCode - this.minCode
        res += String.fromCharCode(this.minCode + ((chCode - this.minCode - shift + this.codeDiff) % this.codeDiff))
        keyIndex += 1;
      } else {
        res += ch;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
