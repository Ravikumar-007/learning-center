// // create a function for refering this to global object
// "use strict";
// function getThisValue () {
//     console.log("function for this value is ", this);
//     return;
// }
// getThisValue(1);
// getThisValue.call(1);

// // let getThisObject = {
// //     name : 'RaviKumar',
// //     yearofborn : 28,
// //     calculate : function () {
// //         console.log("get the value of the method call of this", this)
// //     }
// // }

// // getThisObject.calculate();

// let getThisObject = {
//     name : 'RaviKumar',
//     yearofborn : 28,
//     calculate : function () {
//         console.log("get the value of the method call of this", this);
//         let self = this;
//         function innerFun() {
//             console.log("get InnerFunc of self", self);
//         }
//         innerFun();
//     }
// }

// getThisObject.calculate();


// // To stabilize the this value we are using call, apply & bind

// function getThisStabilize () {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
let mnb = function() {
    let total = 0;
    for(let i of arguments) {
        total += i;
    }
    return total;
}
// console.log(mnb.bind(null, [1, 2, 3, 4]));
// console.log(getThisStabilize.call(null, 1, 2, 3,4))

// console.log(getThisStabilize.apply(null, [1, 2, 3, 4]))





// let obj = {
//     name : "Ravi",
//     yearOfBorn : 1993,
//     calculateAge : function() {
//         console.log("what is the value of this", this);
//         setTimeout(function(){
//             console.log("what is the value of this", this);
//         })
            
//         }
//     }

    let obj = {
        name : "Ravi",
        yearOfBorn : 1993,
        calculateAge : function() {
            console.log("what is the value of this", this);
            setTimeout(() => {
                console.log("what is the value of this", this);
            })
                
            }
        }
    obj.calculateAge();

