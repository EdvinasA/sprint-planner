import React from "react";
import { Container, FormControl, Input, InputLabel, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import sendRequest from "../../api/sendRequest";
import { setTrue } from "../../redux/slices/loginAlertSlice/loginAlertSlice";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = { email: "edvinasalimas98@gmail.com", password: "123456", fullName: "Edvinas Alimas" };
  const [registerForm, setLoginFormValues] = React.useState(initialValues);
  const [registerFormError, setRegisterFormError] = React.useState({});

  const handleLoginFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setLoginFormValues({ ...registerForm, [fieldName]: fieldValue });
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    setRegisterFormError(validate(registerForm));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerForm)
    };
    const response = sendRequest('member/register', requestOptions);
    response.then(response => {
      localStorage.setItem("access_token", response.access_token);
      if (response.status === "OK") {
        dispatch(setTrue());
        history.push("");
      }
    });
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
    if (!values.fullName) {
      errors.fullName = "full name is required!";
    }
    return errors;
  };

  return (
        <Container maxWidth={false} style={{ maxWidth: "500px", marginTop: "280px" }}>
            <form onSubmit={handleRegisterFormSubmit} style={{ backgroundColor: "white" }}>
                <Stack style={{ alignItems: "center" }}>
                    <h2>Register</h2>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="fullName">Full name</InputLabel>
                        <Input
                          style={{ marginTop: "20px", width: "300px" }}
                          id="fullName"
                          label="Full name"
                          name="fullName"
                          variant="filled"
                          value={registerForm.fullName}
                          onChange={handleLoginFormChange}
                        />
                        <span style={{ color: "red" }}>{registerFormError.fullName}</span>
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="Email">Email</InputLabel>
                        <Input
                          style={{ marginTop: "20px", width: "300px" }}
                          id="Email"
                          label="Email"
                          name="email"
                          variant="filled"
                          value={registerForm.email}
                          onChange={handleLoginFormChange}
                        />
                        <span style={{ color: "red" }}>{registerFormError.email}</span>
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="Password">Password</InputLabel>
                        <Input
                          style={{ marginTop: "20px", width: "300px" }}
                          id="Password"
                          label="Password"
                          name="password"
                          variant="filled"
                          type="password"
                          value={registerForm.password}
                          onChange={handleLoginFormChange}
                        />
                        <span style={{ color: "red" }}>{registerFormError.password}</span>
                    </FormControl>
                    <Button style={{ marginTop: "20px", marginBottom: "20px" }} type="submit">
                        Register
                    </Button>
                </Stack>
            </form>
        </Container>
  );
};
