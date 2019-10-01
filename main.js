"use strict";
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
// variable declarations
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
//variable types
var isBeginner = true;
var total = 0;
var name = "Mike";
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// interchangable syntax for arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22]; // the order of the value must match the order of the types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Any type for a variable => similar to typeUnknown in Typescript update
var randomValue = 10;
randomValue = true;
randomValue = "Mike"; // does not give a compiler error
var myVariable = 10;
// overrides the errors when you change any to unknown
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
