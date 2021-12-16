import React from "react";
import { Container } from "@mui/material";
import AddSprintStyles from "../../components/sprints/AddSprintStyles";
import AddSprintForm from "../../components/sprints/AddSprintForm";

export default () => {
  const classes = AddSprintStyles();

  return (
    <Container maxWidth={false} className={classes.containerRoot}>
      <div><h1>Add new sprint</h1></div>
      <AddSprintForm />
    </Container>
  );
};
