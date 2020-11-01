const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine=true) {
		this.typeOfMachine = machine;
	}
  encrypt(message,key) {
    if (typeof(message) !== 'string' && typeof(key) !== 'string') {
			throw new CustomError('Not implemented');
		}
	
		message = message.toUpperCase();
		key = key.toUpperCase();

		let encryptedMessage = '';
		let j = 0;
		
		function computateLetter(letter1, letter2) {
			let letterCharCode = (letter1.codePointAt() - 65) + (letter2.codePointAt() - 65);
			if (letterCharCode > 25) {
				return letterCharCode - 26;
			} else {
				return letterCharCode;
			}
		}

		for (let i = 0; i < message.length; i++) {
			if (message[i].codePointAt() >= 65 && message[i].codePointAt() <= 90) {
				encryptedMessage += String.fromCharCode(computateLetter(message[i], key[j]) + 65);
			} else {
				encryptedMessage += message[i];
			}
			
			message[i] === ' ' ? j : j++;
			j === key.length ? j = 0 : j;
		}

		if (this.typeOfMachine) {
			return encryptedMessage;
		} else {
			return encryptedMessage.split('').reverse().join('');
		}
	
  }    
  decrypt(message, key) {
    if (typeof(message) !== 'string' && typeof(key) !== 'string') {
			throw new CustomError('Not implemented');
		}
	
		message = message.toUpperCase();
		key = key.toUpperCase();
		
		let decryptedMessage = '';
		let j = 0;

		function computateLetter(letter1, letter2) {
			let letterCharCode = (letter1.codePointAt() - 65) - (letter2.codePointAt() - 65);
			if (letterCharCode < 0) {
				return letterCharCode + 26;
			} else {
				return letterCharCode;
			}
		}

		for (let i = 0; i < message.length; i++) {
			if (message[i].codePointAt() >= 65 && message[i].codePointAt() <= 90) {
				decryptedMessage += String.fromCharCode(computateLetter(message[i], key[j]) + 65);
			} else {
				decryptedMessage += message[i];
			}
			
			message[i] === ' ' ? j : j++;
			j === key.length ? j = 0 : j;
		}

		if (this.typeOfMachine) {
			return decryptedMessage;
		} else {
			return decryptedMessage.split('').reverse().join('');
		}
	
  }
}

module.exports = VigenereCipheringMachine;
