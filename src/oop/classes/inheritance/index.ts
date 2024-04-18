/**
 * 청소로봇
 *
 * cleaningSchedule + performCleaning
 */
class CleaningRobot {
  private cleaningSchedule: string[];
  private name: string; // 공통 필드
  private model: string; // 공통 필드

  constructor(name: string, model: string, cleaningSchedule: string[]) {
    this.name = name;
    this.model = model;
    this.cleaningSchedule = cleaningSchedule;
  }

  // 공통 메소드
  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
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
 * 경비 로봇
 *
 * patrolRoute + performPatrol
 */
class SecurityRobot {
  private patrolRoute: string[];
  private name: string; // 공통 필드
  private model: string; // 공통 필드

  constructor(name: string, model: string, patrolRoute: string[]) {
    this.name = name;
    this.model = model;
    this.patrolRoute = patrolRoute;
  }

  // 공통 메소드
  performTask(task: string) {
    console.log(`${this.name} is performing ${task}.`);
  }

  performPatrol() {
    console.log(
      `${this.name} is patrolling along the route: ${this.patrolRoute.join(
        ", "
      )}.`
    );
  }
}

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
