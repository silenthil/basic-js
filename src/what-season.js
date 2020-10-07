const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date===undefined) return 'Unable to determine the time of year!';
  if (Object.keys(date).length>0) throw  'Error'
  let dates = new Date(date);
    let season=dates.getMonth();
     if (season==11 || season==0 || season==1) return 'winter'
    else if (season==8 || season==9 || season==10) return 'autumn'
    else if (season==7 || season==6 || season==5) return 'summer'
    else if (season==4 || season==3 || season==2) return 'spring'
};
