import moment from "moment/moment";

const getDates = (startDate, stopDate) => {
  const dateArray = [];
  let currentDate = moment(startDate);
  const stopDateNew = moment(stopDate);
  while (currentDate <= stopDateNew) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
};

const getDays = (dateArray) => {
  const dayArray = [];
  for (let i = 0; i < dateArray.length; i += 1) {
    const dayOfWeek = moment(dateArray[i]).day();
    dayArray.push(dayOfWeek);
  }
  return dayArray;
};

function getDatesWithoutWeekends(dateArray, dayArray) {
  const onlyWorkDayArray = [];
  for (let i = 0; i < dateArray.length; i += 1) {
    if (dayArray[i] !== 6 && dayArray[i] !== 0) {
      onlyWorkDayArray.push(dateArray[i]);
    }
  }
  return onlyWorkDayArray;
}

const getDaysWithoutWeekends = (dayArray) => {
  const onlyWorkDayArray = [];
  for (let i = 0; i < dayArray.length; i += 1) {
    if (dayArray[i] !== 6 && dayArray[i] !== 0) {
      onlyWorkDayArray.push(dayArray[i]);
    }
  }
  return onlyWorkDayArray;
};

const getDayAsString = (onlyWorkDayArray) => {
  const arrayOfDayAsString = [];
  for (let i = 0; i < onlyWorkDayArray.length; i += 1) {
    const queueNumber = i + 1;
    switch (onlyWorkDayArray[i]) {
      case 1:
        arrayOfDayAsString.push(queueNumber + ".Mon");
        break;
      case 2:
        arrayOfDayAsString.push(queueNumber + ".Tue");
        break;
      case 3:
        arrayOfDayAsString.push(queueNumber + ".Wed");
        break;
      case 4:
        arrayOfDayAsString.push(queueNumber + ".Thu");
        break;
      case 5:
        arrayOfDayAsString.push(queueNumber + ".Fri");
        break;
      default:
        break;
    }
  }
  return arrayOfDayAsString;
};

export { getDates, getDays, getDatesWithoutWeekends, getDaysWithoutWeekends, getDayAsString };
