class Robot {
  private name: string;
  private model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }
}

class CleaningRobot extends Robot {
  private cleaningSchedule: string[];

  constructor(name: string, model: string, cleaningSchedule: string[]) {
    super(name, model);
    this.cleaningSchedule = cleaningSchedule;
  }

  performCleaning() {
    console.log(
      `${
        this.name
      } is cleaning according to the schedule: ${this.cleaningSchedule.join(
        ", "
      )}.`
    );
  }
}

export {};
