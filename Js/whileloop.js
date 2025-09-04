// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let n = 5;
let sum = 0;
let i = 1;

while (i <= n) {
  sum += i;
  i++;
}

console.log("Sum =", sum);

let number = 1234;
let reversed = 0;

while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = Math.floor(number / 10);
}

console.log("Reversed number:", reversed);
