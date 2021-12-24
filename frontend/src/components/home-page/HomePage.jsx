import React, { useEffect } from "react";
import "typeface-open-sans";
import { Box, Button, Collapse, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import Footer from "../footer/Footer";
import homePageStyles from "./homePageStyles";
import Arrow from "../icons/arrow.png";
import Plan from "../plan/Plan";
import RotatingExpandContent from "../shared/expand-content/RotatingExpandContent";
import { getSprint, startSprint } from "../../redux/sprints/sprintActions";
import { carryOverTasks } from "../../redux/newSprint/newSprintActions";
import TasksTable from "../tasks/TasksTable";
import { getTeam } from "../../redux/manageTeams/manageTeamActions";
import EndSprintButton from "../buttons/end-sprint-button/EndSprintButton";
import StartSprintButton from "../buttons/start-sprint-button/StartSprintButton";
import EndSprintModule from "../sprints/EndSprintModule";

function HomePage() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedCurrentPlan, setExpandedCurrentPlan] = React.useState(false);
  const [expandedInitialPlan, setExpandedInitialPlan] = React.useState(false);
  const [endSprintOpen, setEndSprintOpen] = React.useState(false);
  const [mainPage] = React.useState(true);
  const [currentPlan] = React.useState(true);
  const [initialPlan] = React.useState(true);
  const [notEditable] = React.useState(true);
  const [editable] = React.useState(false);

  const handleExpandClickTask = () => {
    setExpanded(!expanded);
  };

  const sprint = useSelector((state) => state?.sprints.sprint);
  const activeSprintTemp = useSelector((state) => state?.sprintList.activesprint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeam(1));
  }, [dispatch]);

  useEffect(() => {
    if (activeSprintTemp) {
      dispatch(getSprint(activeSprintTemp.id));
    }
  }, [activeSprintTemp]);

  const handleExpandClickCurrentPlan = () => {
    setExpandedCurrentPlan(!expandedCurrentPlan);
  };

  const handleExpandClickInitialPlan = () => {
    setExpandedInitialPlan(!expandedInitialPlan);
  };

  const handleOpenEndSprintModal = () => {
    setEndSprintOpen(true);
    dispatch(carryOverTasks(sprint.tasks));
  };

  const handleStartSprint = () => {
    dispatch(startSprint(sprint.id));
  };

  const classes = homePageStyles();

  return (
    <Box className={classes.startPage}>
      {sprint.startDate === undefined ? (null) : (
          <>
            {sprint.isActive === true && (
<EndSprintButton
  variant="outlined"
  onClick={handleOpenEndSprintModal}
>
              END SPRINT
</EndSprintButton>
            ) }

            {sprint.isActive === false && sprint.isHistorical === false && <StartSprintButton variant="outlined" onClick={handleStartSprint}>START SPRINT</StartSprintButton>}
      <Container maxWidth={false} className={classes.displayingSprintTitle}>
        <EndSprintModule
          currentSprint={sprint}
          isOpen={endSprintOpen}
          setOpen={setEndSprintOpen}
        />
        <h1>{sprint.title}</h1>
        <h4><Moment format="DD/MM/YYYY">{sprint.startDate}</Moment> - <Moment format="DD/MM/YYYY">{sprint.endDate}</Moment></h4>
      </Container>
          </>
      )}
      <Box className={classes.mainTemplate} component="main">
        {sprint.startDate === undefined ? (<h1 style={{ paddingTop: "50vh" }}>No sprint selected.</h1>) : (
            <>
        <div className={classes.taskStyle}>
          <div className={classes.displaying}>
            <span className={classes.taskText}>Tasks</span>
          </div>
          <div className={classes.displaying}>
            <RotatingExpandContent
              expand={expanded}
              onClick={handleExpandClickTask}
              aria-expanded={expanded}
            >
              <img src={Arrow} alt="arrow" />
            </RotatingExpandContent>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <TasksTable
              tasks={sprint.tasks}
              editableBoolean={editable}
            />
          </Collapse>
          <div className={classes.taskStyle}>
            <div className={classes.displaying}>
              {sprint.isHistorical ? (<span className={classes.taskText}>Final Plan</span>) : (<span className={classes.taskText}>Current Plan</span>)}
            </div>
            <div className={classes.displaying}>
              <RotatingExpandContent
                expand={expandedCurrentPlan}
                onClick={handleExpandClickCurrentPlan}
                aria-expanded={expandedCurrentPlan}
              >
                <img src={Arrow} alt="arrow" />
              </RotatingExpandContent>
            </div>
            <Collapse in={expandedCurrentPlan} timeout="auto" unmountOnExit>
              <Plan sprint={sprint} mainPage={mainPage} currentPlan={currentPlan} />
            </Collapse>
            <div className={classes.taskStyle} style={{ marginTop: "35px" }}>
              {expandedInitialPlan === false ? (
                <div className={classes.displaying} style={{ marginBottom: "88px" }}>
                  <span className={classes.taskText}>Initial Plan</span>
                </div>
              ) : (
                <div className={classes.displaying}>
                  <span className={classes.taskText}>Initial Plan</span>
                </div>
              )}
              <div className={classes.displaying}>
                <RotatingExpandContent
                  expand={expandedInitialPlan}
                  onClick={handleExpandClickInitialPlan}
                  aria-expanded={expandedInitialPlan}
                >
                  <img src={Arrow} alt="arrow" />
                </RotatingExpandContent>
              </div>
              <Collapse
                in={expandedInitialPlan}
                timeout="auto"
                unmountOnExit
                style={{ marginBottom: "88px" }}
              >
                <Plan sprint={sprint} mainPage={mainPage} notEditable={notEditable} initialPlan={initialPlan} />
              </Collapse>
            </div>
          </div>
        </div>
            </>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
