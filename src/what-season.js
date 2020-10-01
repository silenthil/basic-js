const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (date===undefined) return 'Unable to determine the time of year!';
  if (typeof date!='object') return  'Error';
  let dates = new Date(date);
  season=dates.getMonth();
  console.log(season);
  if (season==12 || season==1 || season==2) return 'winter';
  if (season==9 || season==10 || season==11) return 'autumn ';
  if (season==8 || season==7 || season==6) return 'summer';
  if (season==5 || season==4 || season==3) return 'spring ';
};
