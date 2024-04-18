class Robot {
  private name: string;
  private model: string;
  private status: string = "Active";

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }
}

function useRobot() {
  const robot = new Robot("R2-D2", "AstroMech");
  robot.performTask("listening");
  robot.name = "C-3PO";
  robot.model = "Protocol";
  robot.status = "On Repair";
}
// Property 'name' is private and only accessible within class 'Robot'.ts

export {};
