dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
"20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class day {
  constructor(date, weekname) {
    this.id = Math.floor(Math.random() * 10 ** 4);
    this.taskId = Math.floor(Math.random() * 76);
    this.date =date;
    this.weekday=weekname;
  }
}
class calendar {
  constructor(){
   this.title= title;
    this.calendarId = Math.floor(Math.random() * 10 ** 3);
    this.userId= Math.floor(Math.random() * 10 ** 3);
   this.days=days;
   }
  }
  days=[]
  for(let s=0; s<week.length; s++)
  {
   for(let d=0; d<dates.length; d++)
     {
        days[d] = new day(dates[d], week[s]);

        if(s===6)
        {
        s=0;
        }
        else {
        s++;
        }
     }
}
calendars = []

for (let i = 0; i < Math.floor(Math.random() * 6) + 4; i++){
  calendars[i] = new calendar();
}
module.exports = calendars;