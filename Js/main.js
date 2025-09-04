var name = "Precious";
let program = "Helloworld";
let aba = "HelloAba";

console.log(name);
console.log(program);
console.log(aba);

let a = 2;
let b = 3;

console.log(a);
console.log(b);
console.log(a + b);

let A = 10;
let B = 5;
let C = 20;
console.log(A + B - C);

let division = A / B;
console.log(division);

// class with consructor function
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and i am ${this.age} years old `
    );
  }
}
const person1 = new person("john", 25);
person1.greet();

// how to use a class
class Car {
  brand = "Toyota";
  model = "corolla";

  drive() {
    console.log("The car is driving");
  }
}
let myCar = new Car();
console.log(myCar.model);

class Human {
  name = "Precious";
  age = "52";

  walking() {
    console.log("a human being walks");
  }
}
var HumanBeing = new Human();
HumanBeing.walking();
console.log(HumanBeing.name);

class Animals {
  name = "Dog";

  bark() {
    console.log(this.name + " Makes a sound");
  }

  sleep() {
    console.log(this.name + " is sleeping");
  }
}
let myAnimals = new Animals();
console.log(myAnimals.name);
myAnimals.bark();

// class person {
//   name = "micheal";
//   age = "18";

//   Introduce() {
//     console.log(`Hi,my name is ${(this, name)} and i am ${this.age} years old`);
//   }
// }
// let myPerson = new person();
// myPerson.Introduce();

class animal {
  constructor(name) {
    this.name = name;
    let heart = "hidden";
    this.showheart = function () {
      console.log(`${this.name}'s heart is ${heart}`);
    };
  }

  eat() {
    console.log(`${this.name} likes eating`);
  }
}
let myAnimal1 = new animal("cat");
myAnimal1.eat();
myAnimal1.showheart();

// encapsulation
class car {
  constructor(name) {
    this.name = name;
    let hidden = "engine";
    this.showhidden = function () {
      console.log(`The ${this.name} has a good ${hidden}`);
    };
  }

  move() {
    console.log(`${this.name} uses too much fuel`);
  }
}
let cars = new car("toyota");
cars.showhidden();
cars.move();

// abstraction
class bird {
  fly() {
    console.log("bird is flying");
  }
  sing() {
    console.log("bird is singing");
  }
}
let parrot = new bird();
parrot.fly();
parrot.sing();

// inheritance
// class animal3 {
//   eat() {
//     console.log("animals likes eating");
//   }
//   sleep() {
//     console.log("this animal likes sleeping");
//   }
// }

// class Dog extends animal3 {
//   bark() {
//     console.log("woo woo woo");
//   }
// }
// class Cat extends animal3 {
//   meow() {
//     console.log("meow meow meow");
//   }
// }
// let myDog = new Dog();
// myDog.eat();
// myDog.sleep();

// class monkey extends animal3 {
//   plays() {
//     console.log("play play");
//   }
// }
// let myMonkey = new monkey();
// myMonkey.eat();

// class human {
//   talks() {
//     console.log("Precious is talking");
//   }
//   runs() {
//     console.log("I am running");
//   }
// }
// class child extends human {
//   walking() {
//     console.log("Ngozi is walking");
//   }
// }
// let myChild = new child();
// myChild.talks();
// myChild.runs();

// class femalechild extends human {
//   cooks() {
//     console.log("female child cooks well");
//   }
// }
// let myFemalechild = new femalechild();
// myFemalechild.talks();
// myFemalechild.runs();

// polymorphism
class animal3 {
  eat() {
    console.log("animals likes eating");
  }
  sleep() {
    console.log("this animal likes sleeping");
  }
}

class Dog extends animal3 {
  speak() {
    console.log("woo woo woo");
  }
}
class Cat extends animal3 {
  speak() {
    console.log("meow meow meow");
  }
}

class cow extends animal3 {
  speak() {
    console.log("moooo");
  }
}

let animal3s = [new Dog(), new Cat(), new cow()];
animal3s.forEach((animal3s) => {
  animal3s.speak();
});

class musician {
  play() {
    console.log(" The musician plays well ");
  }
}
class drummer extends musician {
  play() {
    console.log("ka ka ka");
  }
}
class pianoist extends musician {
  play() {
    console.log("do do do");
  }
}
class basist extends musician {
  play() {
    console.log("dooo dooo dooo");
  }
}
let musicians = [new drummer(), new pianoist(), new basist()];
musicians.forEach((musicians) => {
  musicians.play();
});
