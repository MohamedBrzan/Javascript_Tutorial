/*
JavaScript has 8 Datatypes

1. String __ 2. Number __ 3. Bigint __ 4. Boolean __ 5. Undefined __ 6. Null __ 7. Symbol __ 8. Object

*/

let str = 'this is text to describe a string data type';

// console.log(typeof str)

let num = 19;
// console.log(typeof num)
num = 1.3;
// console.log(typeof num)

let calc = BigInt('32423423423');

// console.log(typeof calc)

let bool = true;
// console.log(typeof bool);
bool = false;
// console.log(typeof bool);

let undef; 

// console.log(typeof undef)

let nullVal = null;

// console.log(typeof nullVal)

let sym = Symbol('id');
let data = Symbol('id');

// console.log(typeof sym);
// console.log(typeof data);

// console.log(sym === data)

let obj = {
  name: 'mohamed',
  age: 20,
};

console.log(typeof obj);
