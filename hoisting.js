console.log('Yahoo !');

console.log(teddy);

console.log(sing());

const teddy = 'bear';

function sing() {
    console.log('ohh lala la');
}

function foo() {
    function bar() {
        return 3;
    }
    return bar();

    function bar() {
        return 8;
    }
}
alert(foo());

function foo() {
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo());

alert(foo());

function foo() {
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

function foo() {
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());