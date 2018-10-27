make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
    return a + b;
}

function make(a, ...args) {
  let arr = [];
   console.log(arguments);
   for (var i = 0; i < arguments.length; i++) {
         arr.push(arguments[i]);
       }
   console.log(arr);
    return function (b, ...args) {
      console.log(arguments);
       for (var i = 0; i < arguments.length; i++) {
         arr.push(arguments[i]);
       }
       console.log(arr);
        return function (e , ...args) {
          console.log(arguments);
            for (var i = 0; i < arguments.length; i++) {
         arr.push(arguments[i]);
       }
       console.log(arr);
            return function (s) {
                return arr.reduce(s, 0);
            }
        }
    }
}