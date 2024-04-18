/**
 * Object 를 만들어내는 ‘틀’
 * - 붕어빵 만드는 붕어빵 기계
 * - Object 를 만들어 내는 설계도
 */
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

// Create instances of the Robot class
let robot1 = new Robot("R2-D2", "AstroMech");
let robot2 = new Robot("C-3PO", "Protocol");
let robot3 = new Robot("BB-8", "Rolling Ball");

// Call methods on robot objects
robot1.performTask("maintenance tasks");
robot2.performTask("communication duties");
robot3.performTask("exploration tasks");

robot1.updateStatus("Inactive");
robot2.updateStatus("On Repair");
robot3.updateStatus("Active");
