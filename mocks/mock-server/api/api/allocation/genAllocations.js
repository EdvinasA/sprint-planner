
dates = ["2021-09-29T00:00:00.000Z", "2021-09-30T00:00:00.000Z", "2021-10-01T00:00:00.000Z", "2021-10-04T00:00:00.000Z",
 "2021-10-05T00:00:00.000Z", "2021-10-06T00:00:00.000Z",
"2021-10-07T00:00:00.000Z", "2021-10-08T00:00:00.000Z", "2021-10-11T00:00:00.000Z", "2021-10-12T00:00:00.000Z"];


class allocation {
  constructor() {
    this.allocId = Math.floor(Math.random() * 10 ** 4);
    this.userId = Math.floor(Math.random() * 10 ** 3);
    this.sprint = 0;
    this.taskId = Math.floor(Math.random() * 76);
    this.date = dates[Math.floor(Math.random() * 7)];
  }
}

allocations = []

for (let i = 0; i < Math.floor(Math.random() * 6) + 4; i++){
  allocations[i] = new allocation();
}

module.exports = allocations;
