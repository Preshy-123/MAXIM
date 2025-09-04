// let result = 90;

// if (result >= 90) {
//   console.log("your grade is A");
// } else if (result >= 80 && result < 90) {
//   console.log("your grade is B");
// } else if (result >= 70 && result < 80) {
//   console.log("your grade is C");
// } else if (result <= 60) {
//   console.log("your grade is D");
// } else if (result <= 50) {
//   console.log("your garde is E");
// } else if (result <= 30) {
//   console.log("your grade is F");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// let i = 1;
// while (i <= 7) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// function countDown(number) {
//   if (number <= 0) {
//     return;
//   }
//   console.log(number);
//   countDown(number - 1);
// }
// countDown(7);

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(9));

function countDown(digit) {
  if (digit >= 21) {
    return;
  }
  console.log(digit);
  countDown(digit + 1);
}
countDown(0);

// function countDown(number) {
//   if (number >= 10) {
//     return;
//   }
//   console.log(number);
//   countDown(number + 1);
// }
// countDown(0);
