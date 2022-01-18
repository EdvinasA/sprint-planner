import React, { useEffect } from "react";
import {
  Box,
  Button,
  Collapse, Snackbar,
  Stack,
  TextField,
  Toolbar
} from "@mui/material";
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import RotatingExpandContent from "../shared/expand-content/RotatingExpandContent";
import Arrow from "../icons/arrow.png";
import AddSprintStyles from "./AddSprintStyles";
import TasksTable from "../tasks/TasksTable";
import CarryoverTable from "../tasks/CarryoverTable";
import Plan from "../plan/Plan";
import {
  getNewSprint,
  addTask,
  removeTask,
  chooseEndDate,
  chooseStartDate, createUserDays, resetSprint, setUsersFromManageTeam, createSprint, chooseTitle
} from "../../redux/newSprint/newSprintActions";
import { getDates, getDatesWithoutWeekends, getDays, getDaysWithoutWeekends } from "../../utils/date";
import { getTeam } from "../../redux/manageTeams/manageTeamActions";

const AddSprintForm = () => {
  const dispatch = useDispatch();
  const sprint = useSelector(state => state.newSprint.newSprint);
  const team = useSelector(state => state?.manageTeam.memberTeam);
  const [expanded, setExpanded] = React.useState(false);
  const [editable] = React.useState(true);
  const [expandedUnfinishedTasks, setExpandedUnfinishedTasks] = React.useState(false);
  const [expandedInitialPlan, setExpandedInitialPLan] = React.useState(false);
  const [value, setValue] = React.useState([sprint.startDate, sprint.endDate]);
  const [newSprintTitle, setNewSprintTile] = React.useState("");
  const [displayTip, setDisplayTip] = React.useState(true);
  const [snackBarTryRemove, setSnackBarTryRemove] = React.useState(false);
  const [disableDateField, setDisableDateField] = React.useState(false);

  useEffect(() => {
    dispatch(getNewSprint());
    dispatch(getTeam(1));
  }, [dispatch]);

  const filteredMembers = team.membersList.filter(member => member.isDeleted === false);

  const onSave = () => {
    dispatch(resetSprint({
      title: sprint.title,
      startDate: sprint.startDate,
      endDate: sprint.endDate,
      tasks: [...sprint.tasks, ...sprint.carryovers],
      memberTeamId: 1,
      isActive: false,
      isHistorical: false,
      creationDate: null
    }));
    dispatch(createSprint(sprint));
    dispatch(resetSprint());
  };

  const handleChangeInputTitle = (event) => {
    setNewSprintTile(event.target.value);
    dispatch(chooseTitle(newSprintTitle));
  };

  const handleAddFields = () => {
    setExpanded(true);
    dispatch(addTask());
  };

  const onDelete = (id) => {
    let numberOfDayOccurrence = 0;
    sprint.membersList.forEach(user => {
      if (user.plans[0].allocations.filter(day => day.taskId === id).length > 0) {
        numberOfDayOccurrence += 1;
        setSnackBarTryRemove(true);
      }
    });
    if (numberOfDayOccurrence === 0) {
      dispatch(removeTask(id));
    }
  };

  const handleCloseRemoveSnackBar = () => {
    setSnackBarTryRemove(false);
  };

  const handleExpandClickTask = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickUnfinishedTasks = () => {
    setExpandedUnfinishedTasks(!expandedUnfinishedTasks);
  };

  const handleExpandClickInitialPlan = () => {
    setExpandedInitialPLan(!expandedInitialPlan);
    if (sprint.membersList.length === 0) {
      dispatch(setUsersFromManageTeam(filteredMembers));
    }
  };

  const handleDateRangePicker = (newValue) => {
    if (sprint.membersList.length === 0) {
      dispatch(setUsersFromManageTeam(filteredMembers));
    }
    setDisableDateField(false);
    setValue(newValue);
    dispatch(chooseStartDate(newValue[0]));
    dispatch(chooseEndDate(newValue[1]));
    if (newValue[0] !== null && newValue[1] !== null) {
      const arrayOfDaysWithoutWeekends =
          getDaysWithoutWeekends(getDays(getDates(newValue[0], newValue[1])));
      const workDayDates = getDatesWithoutWeekends(getDates(newValue[0], newValue[1]), getDays(getDates(newValue[0], newValue[1])));
      let arrayOfMemberDays = [];
      for (let j = 0; j < sprint.membersList.length; j += 1) {
        for (let i = 0; i < arrayOfDaysWithoutWeekends.length; i += 1) {
          const dayObject = { id: j * 10 + i,
            taskId: null,
            dayOfSprint: workDayDates[i],
            memberId: sprint.membersList[j].id };
          arrayOfMemberDays.push(dayObject);
        }
        const plans = [{ id: j,
          memberId: sprint.membersList[j].id,
          allocations: arrayOfMemberDays,
          planType: "INITIAL",
          creationDate: null,
          sprintId: null }];
        dispatch(createUserDays(sprint.membersList[j].id, plans));
        arrayOfMemberDays = [];
      }
    }
  };

  const handleDisableDateFields = (value) => {
    setDisableDateField(value);
  };

  const handleCancelNewSprint = () => {
    dispatch(resetSprint());
  };

  const classes = AddSprintStyles();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{ paddingBottom: "10px", width: "100%", margin: "8px 8px 0px 8px" }}
    >
      <TextField
        label="Sprint Name"
        variant="filled"
        className={classes.sprintNameInputField}
        value={newSprintTitle}
        onChange={event => handleChangeInputTitle(event)}
      />
      <div style={{ display: "inline-block" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            disabled={disableDateField}
            disablePast
            startText="Start Date"
            endText="End Date"
            value={value}
            onChange={(newValue) => { handleDateRangePicker(newValue); }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField variant="filled" {...startProps} className={classes.sprintDatesInputFields} />
                <div className={classes.separatorOfDates}> to </div>
                <TextField variant="filled" {...endProps} className={classes.sprintDatesInputFields} />
              </>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className={classes.addSprintTaskStyle}>
        <div className={classes.styleForDisplayInlineBlock}>
          <span className={classes.addSprintTaskText}>Tasks</span>
        </div>
        <div className={classes.styleForDisplayInlineBlock}>
          <RotatingExpandContent
            expand={expanded}
            onClick={handleExpandClickTask}
            aria-expanded={expanded}
          >
            <img src={Arrow} alt="arrow" />
          </RotatingExpandContent>
          <Stack direction="row" spacing={2} style={{ display: "inline-block", marginLeft: "1060px" }}>
            <Button variant="outlined" startIcon={<AddIcon style={{ color: "#404CFA" }} />} style={{ color: "#404CFA" }} onClick={() => handleAddFields()}>
              ADD A TASK
            </Button>
          </Stack>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit style={{ paddingTop: "5px" }} key="static">
          <TasksTable
            key="static"
            tasks={sprint.tasks}
            editableBoolean={editable}
            onDelete={onDelete}
          />
        </Collapse>
        <Snackbar
          open={snackBarTryRemove}
          message="Can't remove task set in plan."
          autoHideDuration={4000}
          onClose={handleCloseRemoveSnackBar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
        {sprint.carryovers.length !== 0 && (
          <div className={classes.addSprintTaskStyle} style={{ marginTop: "15px" }}>
            <div style={{ display: "inline-block" }}>
              <span className={classes.addSprintTaskText}>Unfinished tasks</span>
            </div>
            <div style={{ display: "inline-block" }}>
              <RotatingExpandContent
                expand={expandedUnfinishedTasks}
                onClick={handleExpandClickUnfinishedTasks}
                aria-expanded={expandedUnfinishedTasks}
              >
                <img src={Arrow} alt="arrow" />
              </RotatingExpandContent>
            </div>
          </div>
        )}
        <Collapse in={expandedUnfinishedTasks} timeout="auto" unmountOnExit>
          <CarryoverTable
            tasks={sprint.carryovers}
          />
        </Collapse>
        {displayTip ? (
            <div className={classes.informationStyle}>
              <span><InfoIcon />After<b style={{ marginInlineEnd: "5px" }}> adding Tasks </b> to Initial Plan <b> Sprint Dates cannot be changed</b>.
                Please remove the tasks from the dates you want to update.
                <Button variant="text" onClick={() => setDisplayTip(false)}>GOT IT</Button>
              </span>
            </div>
        ) : (null)}
        <div className={classes.addSprintTaskStyle} style={{ marginTop: "15px", marginBottom: "80px" }}>
          <div style={{ display: "inline-block" }}>
            <span className={classes.addSprintTaskText}>Initial Plan</span>
          </div>
          <div style={{ display: "inline-block" }}>
            <RotatingExpandContent
              expand={expandedInitialPlan}
              onClick={handleExpandClickInitialPlan}
              aria-expanded={expandedInitialPlan}
            >
              <img src={Arrow} alt="arrow" />
            </RotatingExpandContent>
          </div>
          <Collapse in={expandedInitialPlan} timeout="auto" unmountOnExit style={{ paddingTop: "7px", marginBottom: "80px" }}>
            <Plan
              sprint={sprint}
              disableDateFields={handleDisableDateFields}
            />
          </Collapse>
        </div>
      </div>
      <div className={classes.stayAtTheBottomFormAddAndCancel}>
        <Toolbar>
          <Button variant="contained" onClick={onSave} sx={{ mr: 2 }}>SAVE</Button>
          <Link to="/">
          <Button variant="outlined" onClick={handleCancelNewSprint}>CANCEL</Button>
          </Link>
        </Toolbar>
      </div>
    </Box>
  );
};

export default AddSprintForm;
