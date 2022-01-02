import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./SettingsStyles";

function SettingsHeader() {
  const classes = useStyles();
  const member = useSelector((state) => state?.member.member);

  return (
    <Typography variant="h6" component="div" style={{ backgroundColor: "#404CFA", color: "white", flexGrow: 1, paddingLeft: 10 }}>
      <span className={classes.headerLetterStyle}>{member.fullName} Settings</span>
    </Typography>
  );
}

export default SettingsHeader;
