const productsPrices = [1, 3, 2, , 4, 5, 100];
const shipping = 45;
const fees = 300;

// const reduceRes = productsPrices.reduce((prev, current, index, array) => {
//   return prev + current;
// });

// console.log('reduceRes => ', reduceRes);

const reduceRightRes = productsPrices.reduceRight(
  (prev, current, index, array) => {
    return prev + current;
  }
);

console.log('reduceRightRes => ', reduceRightRes);

// let initialValue = shipping + fees;

// for (let i = 0; i < productsPrices.length; i++) {
//   initialValue += productsPrices[i];
// }

// console.log('initial => ', initialValue);
