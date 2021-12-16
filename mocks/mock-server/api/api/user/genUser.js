names = ["Vardenis Pavardenis", "Vardinis Pavardinis", "Vardenė Pavardenė",
  "Vardaitė Pavardaitė", "Vardas Pavardinis", "Vardaitis Pavardinskis",
  "VardėPavardė", "Vardas Pavardė", "Pavardė Vardas", "Var Pavar"];
roles = ["tester", "frontend developer", "backend developer"];

class day {
  constructor(userId, taskId) {
    this.id = Math.floor(Math.random() * 10 ** 4);
    this.userId = userId;
    this.sprint = 0;
    this.taskId = taskId;
  }
}

class user {
  constructor(){
    this.id = Math.floor(Math.random() * 10 ** 3);
    this.name = names[Math.floor(Math.random() * 10)];
    this.sprintId = 0;
    this.taskId = Math.floor(Math.random() * 76);
    this.role = roles[Math.floor(Math.random() * 3)];
    this.calendarId = Math.floor(Math.random() * 10 ** 3);
    this.day = new day(this.id, this.taskId);
  }
}

module.exports = new user();

