function sum(a, b) {
    return a + b;
}

function make(a, ...args) {
  let arr = [];
  for (var i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] === "number") arr.push(arguments[i]);
    else if(typeof arguments[i] === "function") {
      return arr.reduce(arguments[i], 0);
    }
  }
  return function (b, ...args) {
    for (var i = 0; i < arguments.length; i++) {
      if(typeof arguments[i] === "number") arr.push(arguments[i]);
      else if(typeof arguments[i] === "function") {
        return arr.reduce(arguments[i], 0);
      }
    }
    return function (c, ...args) {
      for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === "number") arr.push(arguments[i]);
        else if(typeof arguments[i] === "function") {
          return arr.reduce(arguments[i], 0);
        }
      }
      return function (d) {
        for (var i = 0; i < arguments.length; i++) {
          if(typeof arguments[i] === "number") arr.push(arguments[i]);
          else if(typeof arguments[i] === "function") {
            return arr.reduce(arguments[i], 0);
          }
        }
      }
    }
  }
}