function great(name) {
  console.log("hello" + " " + name + "!");
}

great("micheal");

function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);

function difference(c, d) {
  return c - d;
}
let results = difference(4, 6);
console.log(results);

function division(y, z) {
  return y / z;
}
let resultss = division(10, 2);
console.log(resultss);

//  state = {
//   name1: "Abia",
//   name2: "Adamawa",
//   name3: "Akwa Ibom",
//   name4: "Anambra",
//   name5: "Bauchi",
//   name6: "Bayelsa",
//   name7: "Benue",
//   name8: "Bvarorno",
//   name9: "Cross River",
//   name10: "Delta",
//   name11: "Ebonyi",
//   name12: "Edo",
//   name13: "Ekiti",
//   name14: "Enugu",
//   name15: "Zamfara",
//   name16: "Gombe",
//   name17: "Imo",
//   name18: "Jigawa",
//   name19: "Kaduna",
//   name20: "Kano",
//   name21: "Katsina",
//   name22: "Kebbi",
//   name23: "Kogi",
//   name24: "Kwara",
//   name25: "Lagos",
//   name26: "Nasarawa",
//   name27: "Niger",
//   name28: "Ogun",
//   name29: "Ondo",
//   name30: "Osun",
//   name31: "Oyo",
//   name32: "Plateau",
//   name33: "Rivers",
//   name34: "Sokoto",
//   name35: "Taraba",
//   name36: "Yobe",
// };

// console.log(state.name20);

// let a = 5;
// let b = 3;
// let sum = a + b;
// console.log(sum);

// let difference = a - b;
// console.log(difference);

// let product = a * b;
// console.log(product);

// let division = a / b;
// console.log(division);

// let modules = a % b;
// console.log(modules);

// let exponential = a ** b;
// console.log(exponential);

// let x = 5;
// x++;
// console.log(x);

// let y = 7;
// y--;
// console.log(y);

// var abia = "alex-otti";
// var otti = "is a good governor";

// console.log(abia + " " + otti);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayName(daynumber) {
  switch (daynumber) {
    case 0:
      console.log(days[0]);
      break;
    case 1:
      console.log(days[1]);
      break;
    case 2:
      console.log(days[2]);
      break;
    case 3:
      console.log(days[3]);
    case 4:
      console.log(days[4]);
      break;
    case 5:
      console.log(days[5]);
      break;
    case 6:
      console.log(days[6]);

    default:
      console.log("Number does not exist");
  }
}
getDayName(3);
getDayName(5);
getDayName(10);
