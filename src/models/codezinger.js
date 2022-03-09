// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);

const arr = [1,2,5,2,2,5];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[1], counts[2], counts[5], counts[2], counts[2], counts[5]);
// console.log(arr);

// const ary = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]; 
// const R = ramda.js;
// R.countBy(r=> r)(ary)


// const arr = [1,2,5,2,2,5];

// arr.filter(x => x===5).length;

// console.log(counts[5]);