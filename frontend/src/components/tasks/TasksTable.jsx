import React from "react";
import {
  Container, FormControl,
  IconButton,
  Input, MenuItem, Select, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import taskTableStyles from "./TasksTableStyle";
import TaskKeyButton from "./task-key-button/TaskKeyButton";
import "typeface-open-sans";
import { updateTask } from "../../redux/newSprint/newSprintActions";
import ColorPicker from "../shared/color-picker/ColorPicker";
import { updateTaskPointsInMainPage } from "../../redux/sprints/sprintActions";

const TasksTableHeader = ({ classes, editableBoolean }) => {
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
        { editableBoolean ? (
          <TableCell>Delete&nbsp;
          </TableCell>
        ) : null }
      </TableRow>
    </TableHead>
  );
};

const TasksTable = ({ classes, editableBoolean, tasks, onDelete }) => {
  const [editTask, setEditTask] = React.useState(null);

  const handleColorChange = (color, task) => {
    const newFormData = { ...task };
    newFormData.buttonColor = color;
    dispatch(updateTask(newFormData));
  };

  const onDeleteTask = (id) => {
    onDelete(id);
  };

  const dispatch = useDispatch();

  const handleExistingTaskEditablePoints = (event, task) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...task };
    newFormData[fieldName] = fieldValue;
    dispatch(updateTaskPointsInMainPage(task.id, newFormData));
  };

  const handleLeaveTaskTable = () => {
    setEditTask(null);
  };

  const handleSetTask = (event, task) => {
    const index = tasks.findIndex(e => e.id === task.id);
    setEditTask(index);
  };

  const handleChangeInput = (event, task) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...task };
    newFormData[fieldName] = fieldValue;
    dispatch(updateTask(newFormData));
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

  const typeOptions = [
    { key: 0, value: "-" },
    { key: 1, value: "Goal" },
    { key: 2, value: "Technical" }
  ];

  const line = "-";

  const footerBackgroundColor = "#F9FAFA";

  return (
    <Table key="static">
      <TasksTableHeader classes={classes} editableBoolean={editableBoolean} />
      { editableBoolean ? (
        <TableBody key="static">
          { tasks.map((task) => (
              <>
            {task.show === true ? (
<TableRow
  key={task.id}
  className={classes.tableBodyBorders}
>
              <TableCell
                align="center"
                className={classes.tableBodyKey}
                style={{ maxWidth: "170px", maxHeight: "100%", paddingLeft: "8px", paddingRight: "-2px" }}
              ><Stack direction="row" spacing={2}>
                <Input
                  name="key"
                  variant="outlined"
                  value={task.key}
                  onChange={(event) => handleChangeInput(event, task)}
                />
                <ColorPicker
                  expanded={task.colorPickerExpand}
                  handleColorChange={(color) => handleColorChange(color, task)}
                  selectedColor={task.buttonColor}
                />
               </Stack>
              </TableCell>
              <TableCell
                className={classes.tableBodyDescription}
              >
                <FormControl>
                  <Input
                    style={{ width: "350px" }}
                    name="description"
                    variant="outlined"
                    value={task.description}
                    onChange={(event) => handleChangeInput(event, task)}
                  />
                </FormControl>
              </TableCell>
              <TableCell
                className={classes.tableBodyType}
              ><Select
                name="type"
                label="Type"
                onChange={(event) => handleChangeInput(event, task)}
                value={task.type}
              >
                { typeOptions.map(option => (
                    <MenuItem key={option.key} value={option.value}>
                      { option.value }
                    </MenuItem>
                )) }
               </Select>
              </TableCell>
              <TableCell
                className={classes.tableBodyOldPoints}
              ><Input
                name="oldPoints"
                variant="outlined"
                type="number"
                value={task.oldPoints}
                onChange={(event) => handleChangeInput(event, task)}
              />
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
              <TableCell>
                <IconButton onClick={() => onDeleteTask(task.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
</TableRow>
            ) : null}
              </>
          )) }
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
      ) : (
        <TableBody>
          { tasks.map((task, index) => (
              <>
              {task.show === true ? (
            <TableRow
              classesName={classes.tableBodyBorders}
              key={index}
            >
              <TableCell component="th" scope="row" align="center" className={classes.tableBodyKey}>
                <TaskKeyButton text={task.key} color={task.buttonColor} />
              </TableCell>
              <TableCell
                className={classes.tableBodyDescription}
              >{ task.description }
              </TableCell>
              <TableCell
                className={classes.tableBodyType}
              >{ task.type }
              </TableCell>
              <TableCell
                className={classes.tableBodyOldPoints}
              >{ task.oldPoints === 0 ? line : task.oldPoints }
              </TableCell>
              {editTask === index ? (
                  <TableCell
                    className={classes.tableBodyRemainingPoints}
                    onMouseLeave={handleLeaveTaskTable}
                  ><Input
                    name="remainingPoints"
                    variant="outlined"
                    type="number"
                    value={task.remainingPoints}
                    onChange={(event) => handleExistingTaskEditablePoints(event, task)}
                  />
                  </TableCell>
              ) : (
                  <TableCell
                    className={classes.tableBodyRemainingPoints}
                    onMouseEnter={(event) => handleSetTask(event, task)}
                  >{ task.remainingPoints === 0 ? line : task.remainingPoints }
                  </TableCell>
              )}
              {editTask === index ? (
                  <TableCell
                    onMouseLeave={handleLeaveTaskTable}
                    className={classes.tableBodyNewPointsInput}
                  ><Input
                    name="newPoints"
                    variant="outlined"
                    type="number"
                    value={task.newPoints}
                    onChange={(event) => handleExistingTaskEditablePoints(event, task)}
                  />
                  </TableCell>
              ) : (
                  <TableCell
                    className={classes.tableBodyNewPoints}
                    onMouseEnter={(event) => handleSetTask(event, task)}
                  >{ task.newPoints === 0 ? line : task.newPoints }
                  </TableCell>
              )}
            </TableRow>
              ) : null }
              </>
          )) }
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
      ) }
    </Table>
  );
};

export default ({ tasks, editableBoolean, onDelete }) => {
  const classes = taskTableStyles();

  return (
    <TableContainer component={Paper} key="static">
      { tasks === undefined || tasks.length === 2 ?
        <Container maxWidth={false} className={classes.noTasksText}><span>No tasks created.</span></Container> : (
          <TasksTable classes={classes} editableBoolean={editableBoolean} tasks={tasks} onDelete={onDelete} />
        ) }
    </TableContainer>
  );
};
