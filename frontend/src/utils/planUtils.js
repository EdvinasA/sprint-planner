export function findTaskById(id, tasks) {
  return tasks.filter(item => item.id === id);
}

export function findTotalWorkDaysForEmployee(day, tasks) {
  let amountOfDaysWithTasks = 0;
  day.forEach(day => {
    const task = findTaskById(day.taskId, tasks);
    if (day.taskId !== "" && task[0] !== undefined) {
      if (task[0].key !== "Education" && task[0].key !== "Vacation") {
        amountOfDaysWithTasks += 1;
      }
    }
  });
  return amountOfDaysWithTasks;
}
