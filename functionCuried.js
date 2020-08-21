// func is the function to transform
function curried(...args) {
  if (args.length >= func.length) { // (1)
    return func.apply(this, args);
  } else {
    return function pass(...args2) { // (2)
      return curried.apply(this, args.concat(args2));
    }
  }
};

console.log( curried(1, 2, 3) ); // 6, still callable normally
console.log( curried(1)(2,3) )