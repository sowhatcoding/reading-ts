/**
 * updateStatus 함수 내부 구현을 바꿔주라고 한다면?
 */

let robot1 = {
  name: "R2-D2",
  model: "AstroMech",
  status: "Active",
  performTask: function (task: string) {
    console.log(`${this.name} is performing ${task}.`);
  },
  updateStatus: function (newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  },
};

let robot2 = {
  name: "C-3PO",
  model: "Protocol",
  status: "Active",
  performTask: function (task: string) {
    console.log(`${this.name} is performing ${task}.`);
  },
  updateStatus: function (newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  },
};

let robot3 = {
  name: "BB-8",
  model: "Rolling Ball",
  status: "Active",
  performTask: function (task: string) {
    console.log(`${this.name} is performing ${task}.`);
  },
  updateStatus: function (newStatus: string) {
    this.status = newStatus;
    console.log(`${this.name}'s status is now ${this.status}.`);
  },
};

// Call methods on robot objects
robot1.performTask("maintenance tasks"); // Outputs: R2-D2 is performing maintenance tasks.
robot2.performTask("communication duties"); // Outputs: C-3PO is performing communication duties.
robot3.performTask("exploration tasks"); // Outputs: BB-8 is performing exploration tasks.

robot1.updateStatus("Inactive"); // Outputs: R2-D2's status is now Inactive.
robot2.updateStatus("On Repair"); // Outputs: C-3PO's status is now On Repair.
robot3.updateStatus("Active"); // Outputs: BB-8's status is now Active.

export { robot1, robot2, robot3 };
