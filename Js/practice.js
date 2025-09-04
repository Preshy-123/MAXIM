class Bicycle {
  brand = "Jamis";
  model = "HR Model";

  move() {
    console.log("my bicycle is moving");
  }
}
let myBicycle = new Bicycle();
console.log(myBicycle.model);
myBicycle.move();

class insects {
  name = "Mosquito";

  bites() {
    console.log(this.name + " bites");
  }

  fly() {
    console.log(this.name + " files");
  }
}
let myInsects = new insects();
console.log(myInsects.name);
myInsects.bites();

class jet {
  example = "commercial airline";
  ability = "to fly";

  speed() {
    console.log(`The ${this.example} is about  ${this.ability} in 10 minutes`);
  }
}
let myJet = new jet();
myJet.speed();

function classPhone(brand) {
  return {
    brand,
    call() {
      console.log(`My ${this.brand} rings loud`);
    },
  };
}

let myPhone = classPhone("samsung");
myPhone.call();

class Laptop {
  static brand = "lenovo";
  #secret = "Is a good laptop";

  constructor(name) {
    this.name = name;
  }

  type() {
    console.log(`I love my ${this.name}`);
  }

  revealSecret() {
    console.log(this.#secret);
  }
}

let myLaptop = new Laptop("Macbook");
myLaptop.type();
myLaptop.revealSecret();
console.log(Laptop.brand);

class man {
  constructor(name) {
    this.name = name;
    let hide = "sleeps";
    this.showhide = function () {
      console.log(`${this.name} ${hide} alot`);
    };
  }
  talkiing() {
    console.log(`${this.name} nags alot`);
  }
}
let man1 = new man("john");
man1.showhide();
man1.talkiing();
