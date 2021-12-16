import React, { useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import TaskKeyButton from "../tasks/task-key-button/TaskKeyButton";
import StyledTableCell from "./styled-table-cell/StyledTableCell";
import PlanStyles from "./PlanStyles";
import { getDates, getDatesWithoutWeekends, getDayAsString, getDays, getDaysWithoutWeekends } from "../../utils/date";
import { updateUserDayTask } from "../../redux/newSprint/newSprintActions";
import { findTaskById, findTotalWorkDaysForEmployee } from "../../utils/planUtils";
import { updateUserDayTaskFromMainPage } from "../../redux/sprints/sprintActions";

const TableHeadDates = ({ startDate, endDate }) => {
  const workDayDates = getDatesWithoutWeekends(getDates(startDate, endDate), getDays(getDates(startDate, endDate)));

  return (
      <TableHead>
        <TableRow>
          <StyledTableCell />
          {workDayDates.map((date) => (
              <StyledTableCell>
                {date}
              </StyledTableCell>
          ))}
          <StyledTableCell>
            Total work days
          </StyledTableCell>
        </TableRow>
      </TableHead>
  );
};

const TableHeadDatesInWords = ({ classes, sprint, currentPlan, mainPage }) => {
  const dayOfTheWeek = getDayAsString(getDaysWithoutWeekends(getDays(getDates(sprint.startDate, sprint.endDate))));

  function findPlanByType(plans) {
    if (currentPlan === true && mainPage === true) {
      return plans.filter(item => item.planType === "CURRENT");
    }
    if (currentPlan !== true && mainPage === true) {
      return plans.filter(item => item.planType === "INITIAL");
    }
    return plans;
  }

  function findTotalWorkDays() {
    let totalWorkDays = 0;
    sprint.membersList.forEach(user => {
      totalWorkDays += findTotalWorkDaysForEmployee(user.plans[0] ? findPlanByType(user.plans)[0].allocations : [], sprint.tasks);
    });
    return totalWorkDays;
  }

  return (
      <TableHead>
        <TableRow>
          <StyledTableCell />
          {dayOfTheWeek.map((day) => (
              <StyledTableCell>
                {day}
              </StyledTableCell>
          ))}
          <StyledTableCell className={classes.totalWorkDays}>
            {findTotalWorkDays() === 0 ? "-" : findTotalWorkDays()}
          </StyledTableCell>
        </TableRow>
      </TableHead>
  );
};

const TableBodyEmployees = ({ classes, sprint, disableDateField, mainPage, notEditable, currentPlan, initialPlan }) => {
  const dispatch = useDispatch();
  const [editableDay, setEditableDay] = React.useState({});

  if (mainPage !== true) {
    useEffect(() => {
      const isNotEmpty = sprint.membersList.some(x => {
        return x.plans[0].allocations.some(y => {
          return y.taskId !== "";
        });
      });
      disableDateField(isNotEmpty);
    }, [sprint.membersList]);
  }

  const handleEditableDay = (day) => {
    setEditableDay(day);
  };

  const sprintEmployees = sprint.membersList;

  function findPlanByType(plans) {
    if (currentPlan === true && mainPage === true) {
      return plans.filter(item => item.planType === "CURRENT");
    }
    if (currentPlan !== true && mainPage === true) {
      return plans.filter(item => item.planType === "INITIAL");
    }
  }

  const handleChangeTaskChangeInPlan = (user, event) => {
    if (mainPage !== true) {
      dispatch(updateUserDayTask(user.id, editableDay.id, event.target.value, editableDay.dayOfSprint, null, null));
      if (event.target.value !== "") {
        disableDateField(true);
      }
    } else if (mainPage === true) {
      dispatch(updateUserDayTaskFromMainPage(user.id, editableDay.id, event.target.value, user.plans[0].id, editableDay.dayOfSprint, editableDay.creationDate));
    }
  };

  const tasks = sprint.carryovers === undefined ? sprint.tasks : [...sprint.tasks, ...sprint.carryovers];

  return (
      <TableBody>
        {sprintEmployees !== undefined && sprintEmployees.map((employee) => (
            <TableRow style={{ height: "80px" }}>
              <TableCell style={{ borderRight: "1px solid rgba(33, 33, 33, 0.08)" }} className={classes.styleForEmployeeTaskAndName}>{employee.fullName}
              </TableCell>
              {mainPage === true && findPlanByType(employee.plans)[0]?.allocations.map((day) => (
                  <>
                    {editableDay.id === day.id && notEditable !== true && sprint.isHistorical !== true ? (
                        <TableCell>
                          <FormControl variant="standard">
                            <Select
                              className={classes.selectTaskForDay}
                              value={day.taskId}
                              onChange={(event) => handleChangeTaskChangeInPlan(employee, event)}
                            >
                              { tasks.map(task => (
                                  <MenuItem value={task.id}>
                                    <TaskKeyButton text={task.key} color={task.buttonColor} />
                                  </MenuItem>
                              )) }
                              <MenuItem style={{ height: "30px" }} value="">
                                None
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                    ) : (
                        <>
                          {tasks.length === 0 ? (
                              <TableCell align="center" className={classes.styleForEmployeeTaskAndName} onMouseEnter={() => handleEditableDay(day)}>
                                <p> </p>
                              </TableCell>
                          ) : (
                              <TableCell className={classes.styleForEmployeeTaskAndName} onMouseEnter={() => handleEditableDay(day)}>
                                {day.taskId === undefined || day.taskId === null || day.taskId === "" ? null :
                                  (
                                      <TaskKeyButton text={findTaskById(day.taskId, sprint.tasks)[0]?.key} color={findTaskById(day.taskId, sprint.tasks)[0]?.buttonColor} />
                                  )}
                              </TableCell>
                          ) }
                        </>
                    )}
                  </>
              ))}
              {mainPage !== true && employee.plans[0].allocations.map((day) => (
                  <>
                    {editableDay.id === day.id && notEditable !== true && sprint.isHistorical !== true ? (
                        <TableCell>
                          <FormControl variant="standard">
                            <Select
                              className={classes.selectTaskForDay}
                              value={day.taskId}
                              onChange={(event) => handleChangeTaskChangeInPlan(employee, event)}
                            >
                              { tasks.map(task => (
                                  <MenuItem value={task.id}>
                                    <TaskKeyButton text={task.key} color={task.buttonColor} />
                                  </MenuItem>
                              )) }
                              <MenuItem style={{ height: "30px" }} value="">
                                None
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                    ) : (
                        <>
                          {tasks.length === 0 ? (
                              <TableCell align="center" className={classes.styleForEmployeeTaskAndName} onMouseEnter={() => handleEditableDay(day)}>
                                <p> </p>
                              </TableCell>
                          ) : (
                              <TableCell className={classes.styleForEmployeeTaskAndName} onMouseEnter={() => handleEditableDay(day)}>
                                {day.taskId === undefined || day.taskId === null || day.taskId === "" ? null :
                                  (
                                        <TaskKeyButton text={findTaskById(day.taskId, sprint.tasks)[0].key} color={findTaskById(day.taskId, sprint.tasks)[0].buttonColor} />
                                  )}
                              </TableCell>
                          ) }
                        </>
                    )}
                  </>
              ))}
              <TableCell className={classes.totalWorkDaysForEmployees}>
                {mainPage === true && findTotalWorkDaysForEmployee(findPlanByType(employee.plans)[0] ? findPlanByType(employee.plans)[0].allocations : [], sprint.tasks) === 0 ? "-" : findTotalWorkDaysForEmployee(employee.plans[0].allocations, sprint.tasks)}
              </TableCell>
            </TableRow>
        ))}
      </TableBody>
  );
};

const TableHeadEmptyLines = ({ classes }) => {
  const emptyLines = [
    "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"
  ];

  return (
      <TableHead>
        <TableRow>
          <StyledTableCell />
          {emptyLines.map((line, index) => (
              <StyledTableCell key={index}>
                {line}
              </StyledTableCell>
          ))}
          <TableCell className={classes.totalWorkDays}>
            Total work days
          </TableCell>
        </TableRow>
      </TableHead>
  );
};

const TableSecondHeadEmptyLines = ({ classes }) => {
  const emptyLines = [
    "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"
  ];

  return (
      <TableHead>
        <TableRow>
          <StyledTableCell />
          {emptyLines.map((line, index) => (
              <StyledTableCell key={index}>
                {line}
              </StyledTableCell>
          ))}
          <TableCell className={classes.totalWorkDays}>
            -
          </TableCell>
        </TableRow>
      </TableHead>
  );
};

const TableBodyEmptyEmployees = ({ classes, sprintEmployees }) => {
  return (
      <TableBody>
        {sprintEmployees.map((employee) => (
            <TableRow>
              <TableCell className={classes.styleForEmployeeTaskAndName}>{employee.fullName}
              </TableCell>
            </TableRow>
        ))}
      </TableBody>
  );
};

export default ({ sprint, disableDateFields, mainPage, notEditable, currentPlan, initialPlan }) => {
  const classes = PlanStyles();
  const tasks = sprint.carryovers === undefined ? sprint.tasks : [...sprint.tasks, ...sprint.carryovers];

  return (
      <TableContainer component={Paper}>
        {sprint.startDate === null || sprint.endDate === null || tasks.length === 0 ? (
            <Table sx={{ minWidth: 650 }}>
              <TableHeadEmptyLines classes={classes} />
              <TableSecondHeadEmptyLines classes={classes} />
              <TableBodyEmptyEmployees classes={classes} sprintEmployees={sprint.membersList} />
            </Table>
        ) : (
            <Table sx={{ minWidth: 650 }}>
              <TableHeadDates classes={classes} startDate={sprint.startDate} endDate={sprint.endDate} />
              <TableHeadDatesInWords classes={classes} sprint={sprint} currentPlan={currentPlan} mainPage={mainPage} />
              <TableBodyEmployees
                classes={classes}
                sprint={sprint}
                disableDateField={disableDateFields}
                mainPage={mainPage}
                notEditable={notEditable}
                currentPlan={currentPlan}
                initialPlan={initialPlan}
              />
            </Table>
        )}
      </TableContainer>
  );
};
