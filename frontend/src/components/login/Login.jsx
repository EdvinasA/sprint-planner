import React from "react";
import { Container, FilledInput, FormControl, Input, InputLabel, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import loginStyles from "./LoginStyles";

export default () => {
  const history = useHistory();

  const [name, setName] = React.useState("");
  const classes = loginStyles();

  const handleLoginSuccess = () => {
    history.push("/");
  };

  return (
      <Container maxWidth={false} style={{ maxWidth: "400px", marginTop: "300px" }}>
          <form>
             <Stack style={{ alignItems: "center" }}>
                  <h2>Login</h2>
                  <FormControl variant="filled">
                      <TextField
                        label="Email"
                        variant="filled"
                      />
                  </FormControl>
                 <FormControl>
                  <TextField
                    style={{ marginTop: "20px" }}
                    label="Password"
                    variant="filled"
                  />
                 </FormControl>
                  <Button style={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleLoginSuccess}>
                      Log in
                  </Button>
             </Stack>
          </form>
      </Container>
  );
};
