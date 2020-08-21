let array = [1,2,3,4,5,6];

//Using ForEach ES6

array.forEach((elem, index) => console.log(`${elem} of every index is ${index}`));


//Using filter ES6

let element = array.filter((elem) => elem !== 2);

console.log(element);

//Using the map

let mapElememt = array.map((ele) => ele * 10);

console.log(mapElememt);


let reduceElement = array.reduce((ele, index) => ele + index);

console.log(reduceElement);