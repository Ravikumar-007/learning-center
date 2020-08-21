// //ES5

// let Person = function (name, dateOfYear, profession) {
//     this.name = name;
//     this.year = dateOfYear;
//     this.profession = profession;
// } 

// Person.prototype.calculateAge = function () {
//     var getcurrentDob = new Date().getFullYear();
//     console.log(`Age calculation is : ${getcurrentDob - this.year}`);
// }


// let john5 = new Person('Ravi', 1992, 'SE');

// console.log(john5.calculateAge());
// class Person2 {
//     constructor(name, dateOfYear, profession) {
//         this.name = name;
//         this.dateOfYear = dateOfYear;
//         this.profession = profession;
//     }
//     calculateAge (){
//         let getcurrentDob = new Date().getFullYear();
//         console.log(`Age calculation is : ${getcurrentDob - this.dateOfYear}`);
//     }
// }

// let john6 = new Person2('Ravi', 1992, 'SE')

// console.log(john6.calculateAge());


let Person = function (name, dateOfYear, profession) {
    this.name = name;
    this.year = dateOfYear;
    this.profession = profession;
} 

Person.prototype.calculateAge = function () {
    var getcurrentDob = new Date().getFullYear();
    console.log(`Age calculation is : ${getcurrentDob - this.year}`);
}

let Athelete = function (name, dateOfYear, profession,noOfGames, noOfMedals) {
    Person.call(this, name, dateOfYear, profession);
    this.noOfGames = noOfGames;
    this.noOfMedals = noOfMedals;
}

Athelete.prototype = Object.create(Person.prototype);

Athelete.prototype.winMedals = function () {
    this.noOfMedals++;
    console.log(this.noOfMedals);
}
let athelete5 = new Athelete('Ravi', 1992, 'SE', 10, 5);

athelete5.calculateAge();


//ES6:

class AtheleteClass extends Person {
    constructor(name, dateOfYear, profession, noOfGames, noOfMedals) {
        super(name, dateOfYear, profession);
        this.noOfGames = noOfGames;
        this.noOfMedals = noOfMedals;
    }
    winMedals() {
        this.noOfMedals ++;
        console.log(this.noOfMedals);
    }

}

let atheleClass = new AtheleteClass ('Ravi', 1992, 'SE', 5,5);

atheleClass.calculateAge();
atheleClass.winMedals();
