import React from "react";
import {
  Container, FormControl,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import TaskKeyButton from "./task-key-button/TaskKeyButton";
import taskTableStyles from "./TasksTableStyle";
import "typeface-open-sans";
import { updateCarryoverTask } from "../../redux/newSprint/newSprintActions";

const CarryoverTableHeader = ({ classes }) => {
  return (
    <TableHead className={classes.tableHead}>
      <TableRow className={classes.headerRow}>
        <TableCell>Key
        </TableCell>
        <TableCell>Description
        </TableCell>
        <TableCell>Type&nbsp;
        </TableCell>
        <TableCell>Old pts.&nbsp;
        </TableCell>
        <TableCell>Remaining pts.&nbsp;
        </TableCell>
        <TableCell>New pts.&nbsp;
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const CarryoverTable = ({ classes, tasks }) => {
  const dispatch = useDispatch();

  const handleChangeInput = (event, task) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...task };
    newFormData[fieldName] = fieldValue;
    dispatch(updateCarryoverTask(newFormData));
  };

  const subtotalOldPoints = (items) => {
    if (items === undefined) {
      return 0;
    }
    return items.map(({ oldPoints }) => Number(oldPoints)).reduce((sum, i) => sum + i, 0);
  };

  const subtotalRemainingPoints = (items) => {
    if (items === undefined) {
      return 0;
    }
    return items.map(({ remainingPoints }) => Number(remainingPoints)).reduce((sum, i) => sum + i, 0);
  };

  function subtotalNewPoints(items) {
    if (items === undefined) {
      return 0;
    }
    return items.map(({ newPoints }) => Number(newPoints)).reduce((sum, i) => sum + i, 0);
  }

  const footerBackgroundColor = "#F9FAFA";

  return (
    <Table key="static">
      <CarryoverTableHeader classes={classes} />
        <TableBody key="static">
          { tasks.map((task) => (
            <>
              {task.show === false ? null : (
                <TableRow
                  key={task.id}
                  className={classes.tableBodyBorders}
                >
                  <TableCell component="th" scope="row" align="center" className={classes.tableBodyKey}>
                    <TaskKeyButton text={task.key} color={task.buttonColor} />
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyDescription}
                  >
                    <FormControl>
                      {task.description}
                    </FormControl>
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyType}
                  >
                    {task.taskType}
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyOldPoints}
                  >
                    {task.oldPoints}
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyRemainingPoints}
                  ><Input
                    name="remainingPoints"
                    variant="outlined"
                    type="number"
                    value={task.remainingPoints}
                    onChange={(event) => handleChangeInput(event, task)}
                  />
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyNewPoints}
                  ><Input
                    name="newPoints"
                    variant="outlined"
                    type="number"
                    value={task.newPoints}
                    onChange={(event) => handleChangeInput(event, task)}
                  />
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
          <TableRow style={{ background: footerBackgroundColor }}>
            <TableCell rowSpan={3} />
            <TableCell />
            <TableCell
              colSpan={1}
              className={classes.tableBodyTotal}
            >Total:
            </TableCell>
            <TableCell
              className={classes.tableBodyTotalPoints}
            >{ subtotalOldPoints(tasks)}
            </TableCell>
            <TableCell
              className={classes.tableBodyTotalPoints}
              colSpan={2}
            >{ (subtotalRemainingPoints(tasks) + subtotalNewPoints(tasks)) }
            </TableCell>
          </TableRow>
        </TableBody>
    </Table>
  );
};

export default ({ tasks, editableBoolean }) => {
  const classes = taskTableStyles();

  return (
    <TableContainer component={Paper} key="static">
      { tasks === undefined ?
        <Container maxWidth={false} className={classes.noTasksText}><span>No tasks created.</span></Container> : (
          <CarryoverTable classes={classes} editableBoolean={editableBoolean} tasks={tasks} />
        ) }
    </TableContainer>
  );
};
