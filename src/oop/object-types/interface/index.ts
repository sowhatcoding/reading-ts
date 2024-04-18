/**
 * class : 설계도
 * interface : 계약서
 */
interface Worker {
  performTask(task: string): void;
  updateStatus(newStatus: string): void;
}

class Robot implements Worker {
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

class Human implements Worker {
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

class Alien implements Worker {
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

function assignWorker(worker: Worker, task: string) {
  worker.performTask(task);
  worker.updateStatus("Busy");
}

// Usage

const robot = new Robot("R2-D2", "Model XYZ");
const human = new Human("John Doe", 30);

assignWorker(robot, "cleaning");
assignWorker(human, "programming");

// const alien = new Alien("Xorp", "Mars");
// assignWorker(alien, "exploring");

export {};
