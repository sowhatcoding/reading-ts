/**
 * 부모클래스 / superclass
 */
class Robot {
  /**
   * visibility modifier (access modifier)
   */
  protected name: string;
  protected model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }
}

/**
 * 자식 클래스 / subclass
 */
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

/**
 * 자식 클래스 / subclass
 */
class SecurityRobot extends Robot {
  private patrolRoute: string[];

  constructor(name: string, model: string, patrolRoute: string[]) {
    super(name, model);
    this.patrolRoute = patrolRoute;
  }

  performPatrol() {
    console.log(
      `${this.name} is patrolling along the route: ${this.patrolRoute.join(
        ", "
      )}.`
    );
  }
}

/**
 * 캡슐화 : Encapsulation
 * - 외부에서 불필요하게 Object 내부의 값을 수정하거나 접근하지 못하게 함
 */
// Instantiate specialized robots
const cleaningRobot = new CleaningRobot("Roomba", "CleanBot", [
  "Monday",
  "Wednesday",
  "Friday",
]);
cleaningRobot.performTask("floor cleaning");
cleaningRobot.performCleaning();

const securityRobot = new SecurityRobot("Sentry", "Securoid", [
  "Main Hallway",
  "Entrance",
  "Backyard",
]);
securityRobot.performTask("patrolling");
securityRobot.performPatrol();

export {};
