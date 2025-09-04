// let isRaining = true;
// if (isRaining) {
//   console.log("move out with an umbrella");
// } else {
//   console.log("no need for an umbrella");
// }

// let score = 70;

// if (score >= 70) {
//   console.log("your grade is an A");
// } else if (score >= 60 && score < 70) {
//   console.log("your grade is B");
// } else if (score >= 50 && score < 60) {
//   console.log("your grade is C");
// } else if (score >= 40 && score < 50) {
//   console.log(" your grade is D");
// } else if (score >= 30 && score < 40) {
//   console.log("your grade is E");
// } else if (score >= 30) {
//   console.log(
//     "your grade is F, please come back next year,you tried your best"
//   );
// } else {
//   ("log out");
// }

let isRaining = false;

let Raining = isRaining ? "move out with an umbrella" : "dont bother";
console.log(Raining);

let logInSystem = false;

let logIn = logInSystem ? "welcome back" : "please log in";
console.log(logIn);

for (let i = 0; i <= 5; i++) {
  console.log("message" + ":", i);
}

for (let i = 100; i >= 0; i--) {
  console.log("numbers" + ":", i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}
