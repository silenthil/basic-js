const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let a=0;
  backyard.forEach(element => {
    element.forEach(Element=>{
      if (Element=="^^"){
        a++
        return
      }else{
        return
      }
    })
  })
  return a
  // remove line with error and write your code here
};
