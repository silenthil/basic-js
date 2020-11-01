const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if ( position > this.chain.length || position < 1 ) {
			this.chain = [];
			throw new Error;
		}
    this.chain.splice(position-1,1)
    return this
  },

  reverseChain() {
    this.chain.reverse();
    return this 
  },

  finishChain() {
   let x=this.chain.join('~~')
   this.chain=[];
    return x
  }
};

module.exports = chainMaker;
