class Robot {
  name: string;
  model: string;
  status: string = "Active";

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  }
}

class Human {
  name: string;
  age: number;
  status: string = "Active";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  }
}

class Alien {
  name: string;
  planet: string;
  status: string = "Active";

  constructor(name: string, planet: string) {
    this.name = name;
    this.planet = planet;
  }

  performTask(task: string) {
    console.log(`${this.name} from ${this.planet} is performing ${task}.`);
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  }
}

function assignRobot(robot: Robot, task: string) {
  robot.performTask(task);
  robot.updateStatus("Busy");
}

function assignHuman(human: Human, task: string) {
  human.performTask(task);
  human.updateStatus("Busy");
}

// Usage

const robot = new Robot("R2-D2", "Model XYZ");
const human = new Human("John Doe", 30);

assignRobot(robot, "cleaning");
assignHuman(human, "programming");

// function assignAlien(alien: Alien, task: string) {
//   alien.performTask(task);
//   alien.updateStatus("Busy");
// }
// const alien = new Alien("Xorp", "Mars");
// assignAlien(alien, "exploring");

export {};
