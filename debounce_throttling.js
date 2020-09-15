function delayFuncExec() {
    // This statement will not be printed as it will be cancelled by clearTimeout
    console.log("I will not be executed as I will be cancelled");
}

var timerId = setTimeout(delayFuncExec, 1000);
console.log("Timer Id: " + timerId)

clearInterval(timerId)