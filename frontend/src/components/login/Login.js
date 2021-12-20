import React from "react";
import { Container, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import loginStyles from "./LoginStyles";

export default () => {
  const classes = loginStyles();

  return (
      <Container maxWidth={false} style={{ maxWidth: "400px", marginTop: "300px" }}>
          <div className={classes.container} style={{ backgroundColor: "white" }}>
              <Stack style={{ alignItems: "center" }}>
                  <h2>Login</h2>
                  <TextField
                    label="Username"
                    variant="filled"
                  />
                  <TextField
                    style={{ marginTop: "20px" }}
                    label="Password"
                    variant="filled"
                  />
                  <Link to="/">
                  <Button style={{ marginTop: "20px", marginBottom: "20px" }}>
                      Log in
                  </Button>
                  </Link>
              </Stack>
          </div>
      </Container>
  );
};
