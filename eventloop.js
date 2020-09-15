// let racer1 = function() {
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
// }
// let racer2 = function() {
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
// }

// let racer3 = function() {
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
//     setTimeout(() => console.log("timeout"), 0);
// }

// racer1()
// racer2()
// racer3()

setTimeout(() => {
    console.log('3');
});
setImmediate(() => {
    console.log('2');
});
console.log('1');