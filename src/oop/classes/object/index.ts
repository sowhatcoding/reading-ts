/**
 * Pure JS : Object Only => Prototype-based programming
 */

let robot = {
  /**
   * Property
   *
   * name :
   * model:
   */
  name: "R2-D2",
  model: "AstroMech",

  /**
   * method
   * @param task
   */
  performTask: function (task: string) {
    console.log(`${this.name} is performing ${task}.`);
  },
};

console.log(robot.name); // Accessing property
robot.performTask("maintenance tasks"); // Calling method
