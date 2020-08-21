let arr = [];
for(var i = 0; i < 10; i++) {
arr[i] = function() {
    return i;
}
}
console.log(arr[5]());