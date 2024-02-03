let data = [45, 77, 200, 88, 200];

const forEachResult = data.forEach((ele, index, arr) => {
  if (ele < 100) {
    console.log(index, ele, arr);
  }
});

console.log(forEachResult);
