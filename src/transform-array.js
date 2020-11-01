const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  let a = [];
  let n = 0
  let x = true
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (i == arr.length || arr[i + 1] == '--double-next' || arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev' || arr[i + 1] == '--discard-next') {
        continue
      } else {
        i++
      }
      x = false
    }
    else if (arr[i] == '--discard-prev') {
      console.log(x == false)
      if (i == 0 || arr[i - 1] == '--double-next' || arr[i - 1] == '--double-prev' || arr[i - 1] == '--discard-prev' || arr[i - 1] == '--discard-next') {
        continue
      } else
        if (x == false) {
          continue
        } else {
          a.splice(n - 1, 1)
          n--
        }
      x = true
    }
    else if (arr[i] == '--double-next') {
      if (i == arr.length || arr[i + 1] == '--double-next' || arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev' || arr[i + 1] == '--discard-next') {
        continue
      } else
        if (arr[i + 1] === undefined) {
          continue
        } else {
          a.push(arr[i + 1])
          n++
        }
      x = true
    }
    else if (arr[i] == '--double-prev') {
      if (i == 0 || arr[i - 1] == '--double-next' || arr[i - 1] == '--discard-prev' || arr[i - 1] == '--discard-next') {
        continue
        x = true
      } else
        if (x == false) {
          continue
          x = true
        } else {
          a.push(arr[i - 1])
          n++
          x = true
        }
    } else {
      a.push(arr[i])
      n++
      x = true
    }
  }
  console.log(a);
  x=true
  return a
}







/*

function discard_next(x){

}
function double_next(x){

}
function double_prev(x){

}
function discard_prev(x){

}
let a = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      discard_next(i)
    }
    if (arr[i] == '--discard-prev') {
      double_next(i)
    }
    if (arr[i] == '--double-next') {
      double_prev(i)
    }
    if (arr[i] == '--double-prev') {
      discard_prev(i)
    }
    a.push(arr[i])
    console.log(a)
    return a
  };
for (let i = 0;i<arr.length;i++){
  if (arr[i]=='--discard-prev'){
    if(i==0 || arr[i+1]=='--double-next'||arr[i+1]=='--double-prev'||arr[i+1]=='--discard-prev'||arr[i+1]=='--discard-next'|| arr[i-1]=='--double-next'||arr[i-1]=='--double-prev'||arr[i-1]=='--discard-prev'||arr[i-1]=='--discard-next'){
      a.splice(i,1)
    }
    else
    a.splice(i-1,1)
  }
  if (arr[i]=='--discard-next'){
    if(i+1==arr.length || arr[i+1]=='--double-next'||arr[i+1]=='--double-prev'||arr[i+1]=='--discard-prev'||arr[i+1]=='--discard-next'|| arr[i-1]=='--double-next'||arr[i-1]=='--double-prev'||arr[i-1]=='--discard-prev'||arr[i-1]=='--discard-next'){
      a.splice(i,1)
    }else
    a.splice(i+1,1)
  }
  if (arr[i]=='--double-prev' ){
    if(i==0 || arr[i-1]=='--double-next'||arr[i-1]=='--double-prev'||arr[i-1]=='--discard-prev'||arr[i-1]=='--discard-next'){
      a.splice(i,1)
    }else
    a[i]=arr[i-1]
  }
  if (arr[i]=='--double-next'){
    if(i+1==arr.length || arr[i+1]=='--double-next'||arr[i+1]=='--double-prev'||arr[i+1]=='--discard-prev'||arr[i+1]=='--discard-next'){
      arr.splice(i,1)
    }else
    arr[i]=arr[i+1]
  }
}
for ( i = 0;i<arr.length;i++){
  if(arr[i]=='--double-next'||arr[i]=='--double-prev'||arr[i]=='--discard-prev'||arr[i]=='--discard-next')
  arr.splice(i,1)
}


if(arr[i]!='--double-next' && arr[i]!='--double-prev' && arr[i]!='--discard-prev' && arr[i]!='--discard-next')
     a.push(arr[i])

if (arr[i] == '--discard-next') {
  if(i==arr.length-1 || typeof(arr[i+1])=='string'){
    continue
  }else
  i++
  i++
  console.log(i)
}
if (arr[i] == '--discard-prev') {
  if (i == 0 || typeof(arr[i+1])=='string') {
   continue
  }else
  a.splice(i - 1,1)
}
if (arr[i] == '--double-next') {
  if (i == arr.length-1 || typeof(arr[i+1])=='string') {
    continue
   }else
  a.push(arr[i + 1])
}
if (arr[i] == '--double-prev') {
  if (i == 0 || typeof(arr[i+1])=='string') {
    continue
  }else
  a.push(a[i - 1])
} else
  a.push(arr[i])
}
*/