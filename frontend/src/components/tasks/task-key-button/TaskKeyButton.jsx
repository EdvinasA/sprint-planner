import { Button } from "@mui/material";
import React from "react";
import TaskKeyButtonStyle from "./TaskKeyButtonStyle";
import "typeface-open-sans";

const TaskKeyButton = ({ text, color, onClick = () => {} }) => {
  const classes = TaskKeyButtonStyle();

  return (
    <>
      <Button
        className={classes.buttonStyle}
        style={{ backgroundColor: color || "green", color: "white" }}
        onClick={onClick}
      >{text}
      </Button>
    </>
  );
};

export default TaskKeyButton;
