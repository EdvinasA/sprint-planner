import React from "react";
import { Container, FormControl, Input, InputLabel, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  const handleLoginSuccess = () => {
    history.push("/");
  };

  return (
        <Container maxWidth={false} style={{ maxWidth: "400px", marginTop: "300px" }}>
            <form>
                <Stack style={{ alignItems: "center" }}>
                    <h2>Register</h2>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="Email">Email</InputLabel>
                        <Input
                          id="Email"
                          label="Email"
                          variant="filled"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="Username">Username</InputLabel>
                        <Input
                          style={{ marginTop: "20px" }}
                          id="Username"
                          label="Username"
                          variant="filled"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="Password">Password</InputLabel>
                        <Input
                          style={{ marginTop: "20px" }}
                          id="Password"
                          type="password"
                          variant="filled"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                    </FormControl>
                    <Button style={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleLoginSuccess}>
                        Register
                    </Button>
                </Stack>
            </form>
        </Container>
  );
};
