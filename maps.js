//Maps

const question = new Map();

question.set('question', 'What is the latest Javascript version');
question.set(1, 'ES5');
question.set(2,'ES2015');
question.set(3, 'ES6');
question.set(4, 'ES7');
question.set('correct', 2);
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong Answer!');

console.log(question.get(4));
console.log(question.size);
question.delete(4);
if(question.has(3)){
    console.log("Heeeee");
}