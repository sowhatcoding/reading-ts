// Function to check the type of day
function checkDayType(): void {
  const currentDay = new Date().getDay();

  const isWorkoutDay = currentDay === 2 || currentDay === 4;

  const isWeekend = currentDay === 0 || currentDay === 6;

  const isWorkingDay =
    currentDay !== 0 &&
    currentDay !== 6 &&
    currentDay !== 1 &&
    currentDay !== 3;

  console.log(`Today is day number ${currentDay}.`);
  console.log(`Is today a workout day? ${isWorkoutDay}`);
  console.log(`Is today a weekend day? ${isWeekend}`);
  console.log(`Is today a working day? ${isWorkingDay}`);
}

// Example usage
checkDayType();

export { checkDayType };
