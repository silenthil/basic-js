const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let resultdepth=1;
    let currentdepth=1;
    arr.forEach(element => {
      if (Array.isArray(element)){
        currentdepth+=this.calculateDepth(element);
      }
      if(currentdepth>resultdepth){
        resultdepth=currentdepth;
      }
        currentdepth=1;
    });
    return resultdepth;
  }
};






/*let result;
return arr.reduce((acc,el,index,array)=>{
  if(Array.isArray(el)){ 
    acc+=(this.calculateDepth(el))
    if(result<acc && array==el){
    result=acc
    }else{ return acc}
  }else if (result>=acc){
    acc=result;
    return acc
  }else{
  return acc
}
},1);
}
*/