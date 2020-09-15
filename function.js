// Pure functions

let counter = (function() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }

})();

console.log(counter());


//
function multiplyBy(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

var multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo);


//Higherorder Functions

var grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

let averageGrade = grades.reduce((prev, current) => prev + current.grade, 0);
console.log(`Average Grade is ${averageGrade}`);
console.log(averageGrade);

let total = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);