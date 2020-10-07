const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) throw Error
  let result=arr;
  arr.forEach(function nexty(element,index,array){
    if(element=='--discard-next'){
         if (index==arr.length-1)  result.splice(arr.length-1,1)
          else  result.splice(index,2)
    }else if(element=='--discard-prev'){
      if (index==0)  result.splice(index,1)
          else   result.splice(index-1,2)
    }else if(element=='--double-next'){
        if (index==arr.length-1)  result.splice(index,1)
          else  result.splice(index,1,arr[index+1])
    }else if(element=='--double-prev')
      if (index==0)  result.splice(index,1)
          else  result.splice(index,1,array[index-1])
  })
  console.log(result)
  return result
  
};

/*if(element=='--discard-next'){
  result.push(arr[index+2])
}else if(element=='--discard-prev'){
  delete result[index-1]
}else if(element=='--double-next'){
  result.push(arr[index+1])
}else if(element=='--double-prev'){
  result.push(arr[index-1])
}else
result.push(element)*/
/*--discard-next
  --discard-prev
  --double-next
  --double-prev*/