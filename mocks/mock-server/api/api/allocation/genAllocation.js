class day {
  constructor(userId, taskId) {
    this.id = Math.floor(Math.random() * 10 ** 4);
    this.userId = userId;
    this.sprint = 0;
    this.taskId = taskId;
  }
}

class allocation {
  constructor(){

    this.id = Math.floor(Math.random() * 10 ** 3);
    this.sprintId = 0;
    this.taskId = Math.floor(Math.random() * 76);
    this.day = new day(this.id, this.taskId);
  }
}

module.exports = new allocation();
