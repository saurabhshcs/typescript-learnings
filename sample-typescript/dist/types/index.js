// Boolean
let b = true;
// Number
let num = 1 + 0b1 + 0o1 + 0x1;
// String
const hello = 'Hello';
const world = 'World';
const helloWorld = `
  ${hello}
  ${world}
`;
// Null and Undefined
let n = null;
let u = undefined;
//let someNumber: number = null;
let someNumber = 0;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);
const myObj = new Map();
// Void
function log(message) {
    console.log(message);
    //return 'a string';
}
// Array
let array1 = ['x', 'y'];
let array2 = array1;
// Tuple
let tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
let myFavoriteColor = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color['red']);
// Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
// Type Assertions
const email = typeof document !== 'undefined' ? document.getElementById('email') : null;
if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget;
        console.log(input.value);
    });
}
