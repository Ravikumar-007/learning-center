// const array = [1, 2, 3];

// function getMaxNumber(...args) {
//     let result = args.sort((a, b) => a - b);
//     return result[result.length - 1];
// }

// let cbc = getMaxNumber.apply(null, array) // should return 3

// console.log("returned Value ", cbc);

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return