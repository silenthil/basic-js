const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let x=0;
  let y=0;
  console.log(x=Math.pow(2,disksNumber)-1);
  x=Math.pow(2,disksNumber)-1;
  y=Math.floor(x/(turnsSpeed/3600));
 return {turns: x, seconds: y};
};
