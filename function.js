//* Recursion

function thisIsLoopFromVsCode(num) {
  if (num < 5) return;

  // loop(num - 1);
  arguments.callee(num - 1);
  console.log(num);
}

// thisIsLoopFromVsCode(22);

const factorial = function fac(num) {
  console.log(num);
  return num < 5 ? 1 : fac(num - 1);
};

// console.log(factorial(6));

//* logs
// 6
// 5
// 4
// 1

//* arguments

function arg(param1) {
  console.log(arguments);
}

// arg(66);





















//* Rest parameters



function rest(...args) {
 console.log(args)
}


rest(1,'string',false,555,true);





































//* Closures

function closure() {
  let x = 22;
  let text = 'this is the text string';
  function nestedClosure() {
    console.log(x);
    console.log(text);
  }

  nestedClosure();
}

// closure();
