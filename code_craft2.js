"use strict";
var fullName = 'Dhoni';
var obj = {
    fullName: 'Sachin',
    prop: {
        fullName: 'Virat',
        getFullName: function() {
            return this.fullName;
        }
    }
}

var test = obj.prop.getFullName;
console.log(obj.prop.getFullName());
console.log(test());