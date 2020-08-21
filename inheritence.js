// let Person = {
//     init : function (first_name, last_name) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//         return this;
//     },
//     full_name : function () {
//         return this.first_name + " " + this.last_name;
//     }
// }

// let asim = Object.create(Person);
// asim.init("RAVI", "Kumar");

// console.log(asim.full_name());


// let Person = {
//     full_name : function () {
//         return this.first_name + " " + this.last_name;
//     }
// }

// let asim = Object.create(Person, {
//     first_name : {
//         value : 'Ravi'
//     },
//     last_name : {
//         value : 'Kumar'
//     }
// });

// console.log("asiimm", asim.full_name());



let Person = {
    full_name : function () {
        return this.first_name + " " + this.last_name;
    }
}

let personFactory = (first_name, last_name) => {
    let personObj = Object.create(Person);
    personObj.first_name = first_name;
    personObj.last_name = last_name;
    return personObj;
}

let asim = personFactory ("Rvai", "kumar");
console.log(asim.full_name())
