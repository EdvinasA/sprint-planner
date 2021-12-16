import React from "react";
import { IconButton, Toolbar, AppBar, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import SprintPlannerIcon from "./icons/sprint-planner-icon.png";
import useStyles from "../side-bar/SideBarStyles";
import Settings from "../settings/Settings";

function TopBar() {
  const classes = useStyles();
  const iconColor = "rgba(255, 255, 255, 0.74)";
  return (
    <div className={classes.navBar}>
      <AppBar position="fixed" className={classes.headerLetterStyle} style={{ backgroundColor: "#404CFA" }}>
        <Toolbar>
          <div>
            <Link to="/">
              <img src={SprintPlannerIcon} alt="planner" />
            </Link>
          </div>
          <Typography variant="h6" component="div" style={{ color: "white", flexGrow: 1, paddingLeft: 10 }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <span className={classes.headerLetterStyle}>Sprint planner</span>
            </Link>
          </Typography>
          <IconButton className={classes.iconStyleBell} style={{ color: iconColor }}><NotificationsIcon /></IconButton>
          <IconButton className={classes.iconStyle} style={{ color: iconColor }}><AccountCircleIcon /></IconButton>
          <Settings />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
