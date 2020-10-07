const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 let a=options;
 let result='';
 if (a.addition===undefined){a.addition=''};
 if (a.additionRepeatTimes===undefined){a.additionRepeatTimes=1};
 if (a.repeatTimes===undefined){a.repeatTimes=1};
 if (a.separator===undefined){a.separator='+'}
 if (a.additionSeparator===undefined){a.additionSeparator='|'};
 a.addition=String(a.addition);
 str=String(str);
add();
function separate(){
   if (a.repeatTimes>1){
  result+=a.separator;
  a.repeatTimes--
  return repeat();
  }
  return result;
}
 function add(){
  if (a.additionRepeatTimes>0){
   str+=a.addition;
   a.additionRepeatTimes--
   return repeatadd();;
  }
 return repeat();
}
 function repeat(){
   if(a.repeatTimes>0){
     result+=str;
     return separate();
  }
  return result;
 }

 function repeatadd(){
    if (a.additionRepeatTimes>0){
    str+=a.additionSeparator;
    return add();
    }
    return add();
 }
 return result;
};
  