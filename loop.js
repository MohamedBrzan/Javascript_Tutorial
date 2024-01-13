//* while - do-while - for

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i > 20);

// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }

// let i = 0;

// for (; i < 20; ) {
//   console.log(i);
//   i++;
// }

//* break - continue - label

spot: for (let x = 0; x <= 10; x++) {
  test: for (let z = 0; z <= 10; z++) {
    if (x == 6) {
      break spot;
    }
    console.log(x);
  }
}
