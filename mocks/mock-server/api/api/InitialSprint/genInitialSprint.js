title = "“Sourcery Students” - Sprint 17";
startdate = "2021-10-21T00:00:00.000Z";
enddate = "2021-10-29T00:00:00.000Z";
sprintId = 0;
SprintType = "Initial";

username = ["Vardenis Pavardenis", "Vardinis Pavardinis", "Vardenė Pavardenė",
  "Vardaitė Pavardaitė"];

dates = ["2021-10-21T00:00:00.000Z", "2021-10-22T00:00:00.000Z", "2021-10-23T00:00:00.000Z", "2021-10-24T00:00:00.000Z",
 "2021-10-25T00:00:00.000Z", "2021-10-26T00:00:00.000Z",
"2021-10-27T00:00:00.000Z", "2021-10-218T00:00:00.000Z", "2021-10-29T00:00:00.000Z"];

taskKey = ["SFD-182", "SFD-175", "SFD-192","SFD-140", "SFD-173", "Vacation", "Education", "SFD-199"];

class initialSprint{
 constructor(title, startdate, enddate, sprintId, SprintType, usersWorksDays)
 {
    this.title = title;
    this.startdate = startdate;
    this.enddate = enddate;
    this.sprintId = sprintId;
    this.sprintType =SprintType;
    this.UsersWorksDays = usersWorksDays;
 }
}

class user {         //vieno user'io viso sprinto darbo planas
constructor(username,userWorkDay )
    {
         this.username = username;
         this.userWorkDay = userWorkDay;
    }
}

class userWorkDay {    //vienos dienos darbo planas
  constructor(taskKey, date)
    {
    this.taskKey = taskKey;
    this.date = date;
  }
}
userWorkDays = [] //vieno user'io darbo dienos

usersWorksDays =[] //visų user'ių darbo dienos
    for (let i = 0; i < username.length; i++){
           for (let d = 0; d < dates.length; d++){
             userWorkDays[d] = new userWorkDay(taskKey[d], dates[d]);
            }
      usersWorksDays[i] = new user(username[i], userWorkDays);
    }
module.exports = new initialSprint(title, startdate, enddate, sprintId, SprintType, usersWorksDays);



