module.exports = function make(...args){
  const arr = [];
  for (var i = 0; i < arguments.length; i++){
    if(typeof arguments[i] === "number") arr.push(arguments[i]);
    else if(typeof arguments[i] === "function") {
      return arr.reduce(arguments[i], 0);
    }
  }
  return function summation(){
    for (var i = 0; i < arguments.length; i++){
      if(typeof arguments[i] === "number") arr.push(arguments[i]);
      else if(typeof arguments[i] === "function") {
        return arr.reduce(arguments[i], 0);
      }
    }
    return summation;
  }
}