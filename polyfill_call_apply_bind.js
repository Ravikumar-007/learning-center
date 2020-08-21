//Actual Call Function

'use strict';
function callFunction (city) {
    console.log(`Hello I 'am ${this.name}, from ${city}`);
}
let obj = {
    name : 'Ravi',
}
// callFunction('Bangalore');
// callFunction.call(obj, 'Bangalore');

Function.prototype.myBind = function (someofthis) {
    someofthis.fnName = this;

    var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {  
    args.push("arguments[" + i + "]");
  }
  
  console.log("args", args)
  eval("someofthis.fnName(" + args + ")");
}
// callFunction.myBind(obj, 'Bangalore');

let names = {
    firstName: 'Ravi',
    lastName: 'Kumar'
}

let fullNameFunc = function (city, state) {
    console.log(`My Name is ${this.firstName} ${this.lastName} city is ${city} and state is ${state}`);   
}

let myFunc = fullNameFunc.bind(names, 'Bangalore');
myFunc('Karnataka');


Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...returnparams) {
        obj.apply(args[0], [...params,...returnparams]);
    }
}


let myFunc2 = fullNameFunc.myBind(names,'Bangalore');
myFunc2('Karnataka');
