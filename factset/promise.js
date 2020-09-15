// Excercise 1
function getPromiseResult() {
    return Promise.resolve(1)
        .then((x) => x + 1)
        .then((x) => { throw new Error('My Error') })
        .catch(() => 1)
        .then((x) => x + 1)
        .then((x) => console.log(x))
        .catch(console.error);
}

// getPromiseResult();

// Excercise 2


function test() {
    return new Promise(function(resolve, reject) {
        throw new Error('Whoops');
    }).catch(function(error) {
        console.log('Error detected');
    }).then(function() {
        console.log('next....');
    })
}

// test().then(function() {
//     console.log('Promise excecution complete');
// });

//Excercise 3

let arr = [1, 2, 3, 4];
delete(arr[3]);
console.log(arr.length);

//Excersice 4

var myObject = {
    foo: 'bar',
    func: function() {
        var self = this;
        (function() {
            console.log('inner Func: this.foo = ' + this.foo);
            console.log('inner Func: self.foo = ' + self.foo);
        }());
    }
}

// myObject.func();

//Excercise 5

let name = 'Mark';

let user = {
    name: 'John',
    hi() { return this.name; }
}

let hi = user.hi;
let username = hi();
console.log('User Name' + username);

//Excercise 6

const arrLoop = [10, 20, 30, 40];
for (var i = 0; i < arrLoop.length; i++) {
    setTimeout(function() {
        console.log('Index:' + i + ', element: ' + arrLoop[i])
    }, 3000)
}

//Excercise 7

var x = 1;
var output = (function() {
    delete x;
    return x;
})();
console.log(output)