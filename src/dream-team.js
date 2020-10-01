const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let dreamteam=[];
    members.forEach(element => {
      if(typeof element=="string" ){
        element=element.split('');
        element=element.filter(item => item!=' ');
        element=element.join('');
        dreamteam.unshift(element[0].toUpperCase());
        return;
      }
    });
    dreamteam=dreamteam.sort();
    dreamteam=dreamteam.join('');
    return dreamteam;
  }
  return false;
};
