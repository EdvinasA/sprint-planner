import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Modal
} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import endSprintStyles from "./EndSprintStyles";
import CarryoverTable from "../tasks/CarryoverTable";
import { carryOverTasks } from "../../redux/newSprint/newSprintActions";
import { endSprint } from "../../redux/sprints/sprintActions";
import GenericButton from "../buttons/generic-button/GenericButton";

const EndSprintModule = ({ currentSprint, isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sprint = useSelector(state => state.newSprint.newSprint);
  const [isCarryover, setCarryover] = React.useState();

  useEffect(() => {
    if (sprint.carryovers === undefined) {
      return;
    }
    setCarryover(sprint.carryovers.some(x => x.remainingPoints > 0));
  }, [sprint.carryovers]);

  const handleClose = () => {
    setOpen(false);
    dispatch(carryOverTasks([]));
  };

  const onDone = () => {
    setOpen(false);
    dispatch(endSprint(currentSprint.id));
    dispatch(carryOverTasks([]));
  };

  const onContinueToSprintCreation = () => {
    setOpen(false);
    dispatch(endSprint(currentSprint.id));
    dispatch(carryOverTasks(sprint.carryovers.filter(x => x.remainingPoints > 0)));
    history.push('/add-sprint');
  };

  const classes = endSprintStyles();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={classes.endSprintBox}
      >
      {currentSprint.title !== undefined ? (<h1>End {currentSprint.title}</h1>) : (<h1>End current sprint</h1>)}
      <CarryoverTable
        tasks={sprint.carryovers}
      />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        { isCarryover ? (
        <GenericButton
          classes={classes.addNewSprintButton}
          onClick={onContinueToSprintCreation}
        >
          Continue to sprint creation
        </GenericButton>
        ) : (
        <GenericButton
          classes={classes.addNewSprintButton}
          onClick={onDone}
        >
          Done
        </GenericButton>
        )}
        <GenericButton
          classes={classes.addNewSprintButton}
          onClick={handleClose}
        >
          Cancel
        </GenericButton>
      </div>
      </Box>
    </Modal>
  );
};

export default EndSprintModule;
