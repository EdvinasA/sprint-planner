import React from "react";
import { Typography } from "@mui/material";
import useStyles from "./SettingsStyles";

function SettingsHeader() {
  const classes = useStyles();

  return (
    <Typography variant="h6" component="div" style={{ backgroundColor: "#404CFA", color: "white", flexGrow: 1, paddingLeft: 10 }}>
      <span className={classes.headerLetterStyle}>Settings</span>
    </Typography>
  );
}

export default SettingsHeader;
