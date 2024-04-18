// Enum to represent the days of the week
enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

// Function to check the type of day
function checkDayType(): void {
  const currentDay = new Date().getDay();

  // Check if it's a special day (Tuesday or Thursday)
  const isWorkoutDay =
    currentDay === Day.Tuesday || currentDay === Day.Thursday;

  // Check if it's a weekend (Sunday or Saturday)
  const isWeekend = currentDay === Day.Sunday || currentDay === Day.Saturday;

  // Check if it's a working day (Monday to Friday)
  const isWorkingDay =
    currentDay !== Day.Sunday &&
    currentDay !== Day.Saturday &&
    currentDay !== Day.Monday &&
    currentDay !== Day.Wednesday;

  console.log(`Today is day number ${currentDay}.`);
  console.log(`Is today a workout day? ${isWorkoutDay}`);
  console.log(`Is today a weekend day? ${isWeekend}`);
  console.log(`Is today a working day? ${isWorkingDay}`);
}

// Example usage
checkDayType();

export { checkDayType };
