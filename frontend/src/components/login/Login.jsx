import React from "react";
import { Container, FormControl, Input, InputLabel, Stack } from "@mui/material";
import Button from "@mui/material/Button";

export default () => {
  const initialValues = { email: "", password: "" };
  const [loginForm, setLoginFormValues] = React.useState(initialValues);
  const [loginFormError, setLoginFormError] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleLoginFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setLoginFormValues({ ...loginForm, [fieldName]: fieldValue });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    setLoginFormError(validate(loginForm));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
    return errors;
  };

  return (
      <Container maxWidth={false} style={{ maxWidth: "500px", marginTop: "280px" }}>
          <form onSubmit={handleLoginFormSubmit} style={{ backgroundColor: "white" }}>
             <Stack style={{ alignItems: "center" }}>
                  <h2>Login</h2>
                 <FormControl variant="filled">
                     <InputLabel htmlFor="Email">Email</InputLabel>
                     <Input
                       style={{ marginTop: "20px", width: "300px" }}
                       id="Email"
                       label="Email"
                       name="email"
                       variant="filled"
                       value={loginForm.email}
                       onChange={handleLoginFormChange}
                     />
                     <span style={{ color: "red" }}>{loginFormError.email}</span>
                 </FormControl>
                 <FormControl variant="filled">
                     <InputLabel htmlFor="Password">Password</InputLabel>
                     <Input
                       style={{ marginTop: "20px", width: "300px" }}
                       id="Password"
                       type="password"
                       name="password"
                       variant="filled"
                       value={loginForm.password}
                       onChange={handleLoginFormChange}
                     />
                     <span style={{ color: "red" }}>{loginFormError.password}</span>
                 </FormControl>
                  <Button style={{ marginTop: "20px", marginBottom: "20px" }} type="submit">
                      Log in
                  </Button>
             </Stack>
          </form>
      </Container>
  );
};
