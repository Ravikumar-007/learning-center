function * generatorFunc () {
    console.log("Started Generator Started::::");
    yield 'Hey First Step';
    console.log('Second Scenario');
    yield 'SEcond Done';
}

let getGenerator = generatorFunc();

console.log(getGenerator.next().value);

console.log(getGenerator.next().value);

console.log(getGenerator.next().value);

console.log(getGenerator.next().value);