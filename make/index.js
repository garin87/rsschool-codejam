
function make(...args){
  let arr = [];
  return function summation(){
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++){
      if(typeof arguments[i] === "number") arr.push(arguments[i]); 
      else if(typeof arguments[i] === "function") {
        return arr.reduce(arguments[i], 0);
      }
    }
    return summation;
  }

}
