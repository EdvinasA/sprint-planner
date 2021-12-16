import React, { useEffect } from "react";
import {
  Button,
  CssBaseline, Icon,
  IconButton, Stack, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PeopleIcon from '@mui/icons-material/People';
import MuiDrawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./SideBarStyles";
import Elipse from "./icons/elipse.png";
import { getSprintList } from "../../redux/sprintList/sprintListActions";
import { getSprint } from "../../redux/sprints/sprintActions";

const drawerWidth = 304;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "visible",
  boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
  overflowY: "visible"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "visible",
  overflowY: "visible",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",

    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: "25px",
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function SideBar() {
  const sprintList = useSelector((state) => state?.sprintList.sprintlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSprintList());
  }, [dispatch]);

  const classes = useStyles();
  const handleChangeSprint = (id) => {
    dispatch(getSprint(id));
  };

  function ButtonAddSprint() {
    return (
        <Button
          className={classes.buttonAddSprint}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <Link to="/add-sprint" style={{ color: "white", textDecoration: "none" }}>
            <AddCircleRoundedIcon className={classes.iconAddSprint} fontSize="large" />
          </Link>
          <Link to="/add-sprint" style={{ color: "white", textDecoration: "none" }}>
            <span className={classes.letterStyleAddButton}>ADD</span>
            <span style={{ paddingLeft: "7px" }} className={classes.letterStyle}>SPRINT</span>
          </Link>
        </Button>
    );
  }

  function ButtonAllSprints() {
    return (
        <Stack direction="row" spacing={3}>
          <Button
            className={classes.openDrawerButton}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <div className={classes.buttonAllSprints}><DateRangeIcon /></div>
            <span className={classes.letterStyle} style={{ paddingLeft: 13 }}>ALL</span>
            <span className={classes.letterStyle}>SPRINTS</span>
          </Button>
        </Stack>
    );
  }

  function ButtonManageTeam() {
    return (
        <Link to="/manage-team" style={{ color: "white", textDecoration: "none" }}>
          <Stack direction="row" spacing={3}>
            <Button
              className={classes.manageTeamButton}
              sx={{ ...(open && { display: 'none' }) }}
            >
              <div className={classes.manageTeamButtonInside}><PeopleIcon /></div>
              <span className={classes.letterStyle}>MANAGE</span>
              <span className={classes.letterStyle} style={{ paddingLeft: 7 }}>TEAM</span>
            </Button>
          </Stack>
        </Link>
    );
  }

  function AddSprintButtonInDrawer() {
    return (
        <Button
          style={{ textAlign: "center", marginTop: "-250px" }}
          sx={{ ...(!open && { display: 'none' }) }}
        >
          <Link to="/add-sprint" style={{ color: "white", textDecoration: "none" }}>
            <AddCircleRoundedIcon style={{ color: "#404CFA" }} fontSize="large" />
          </Link>
          <Link to="/add-sprint" style={{ color: "white", textDecoration: "none" }}>
          <span
            className={classes.letterStyleForOpenBar}
            style={{ paddingTop: 5, paddingRight: 5, paddingLeft: 10 }}
          >ADD
          </span>
          </Link>
          <Link to="/add-sprint" style={{ color: "white", textDecoration: "none" }}>
            <span className={classes.letterStyleForOpenBar} style={{ paddingTop: 5 }}>SPRINT</span>
          </Link>
        </Button>
    );
  }

  function DisplayingAllSprints() {
    return (
      <div className={classes.displayingAllSprints}>
        <span className={classes.displayingAllSprintsLetterStyle}>
          ALL SPRINTS
        </span>
        <br />
        <>
          {sprintList !== null ? (
              <>
              {sprintList.map((sprint) => (
                  <div className={classes.displayingAllSprintsBackgroundStyle}>
                    <Typography
                      className={classes.displayingAllSprintsLetterStyleButton}
                      onClick={() => handleChangeSprint(sprint.id)}
                    >{sprint.title}
                    </Typography>
                  </div>
              ))}
              </>
          ) : (null)}

        </>
      </div>
    );
  }

  function CloseDrawerButton() {
    return (
        <IconButton
          style={{ marginTop: "80px" }}
          className={classes.iconCircleStyle}
          onClick={handleDrawerClose}
          sx={{ ...(!open && { display: 'none' }) }}
        >
          <img src={Elipse} alt="asdasdsvv" style={{ position: "absolute" }} />
          <ArrowLeftIcon className={classes.arrowDropDownCircleIconStyle} />
        </IconButton>
    );
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div style={{ zIndex: -1 }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <CloseDrawerButton />
          </DrawerHeader>
          <div className={classes.drawerStyle}>
            <ButtonAddSprint />
            <br />
            <ButtonAllSprints />
            <br />
            <ButtonManageTeam />
            <br />
            <AddSprintButtonInDrawer />
            {open === true ?
                <DisplayingAllSprints />
              : ""}
          </div>
        </Drawer>
      </div>
  );
}

export default SideBar;
