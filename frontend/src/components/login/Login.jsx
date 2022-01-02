import React from "react";
import {
  Alert,
  Container,
  FormControl,
  Input,
  InputLabel, Snackbar,
  Stack
} from "@mui/material";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import sendRequest from "../../api/sendRequest";
import { setTrue } from "../../redux/slices/loginAlertSlice/loginAlertSlice";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = { email: "edvinasalimas98@gmail.com", password: "123456" };
  const [loginForm, setLoginFormValues] = React.useState(initialValues);
  const [loginFormError, setLoginFormError] = React.useState({});
  const [failed, setFailed] = React.useState(false);

  const handleLoginFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setLoginFormValues({ ...loginForm, [fieldName]: fieldValue });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    setLoginFormError(validate(loginForm));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm)
    };
    const response = sendRequest('member/login', requestOptions);
    response.then(response => {
      localStorage.setItem("access_token", response.access_token);
      if (response.status === "OK") {
        dispatch(setTrue());
        history.push("");
        console.log(response);
      }
    });
    setFailed(true);
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
    return errors;
  };

  return (
      <Container maxWidth={false} style={{ maxWidth: "500px", marginTop: "280px" }}>
          <form onSubmit={handleLoginFormSubmit} style={{ backgroundColor: "white" }}>
             <Stack style={{ alignItems: "center" }}>
                 <Snackbar
                   open={failed}
                   autoHideDuration={2000}
                   onClose={() => setFailed(false)}
                   anchorOrigin={{ vertical: "top", horizontal: "right" }}
                 >
                     <Alert onClose={() => setFailed(false)} severity="error" sx={{ width: '100%' }}>
                         Failed!
                         <br />
                         <strong>Wrong username or password</strong>
                     </Alert>
                 </Snackbar>
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
                  <Button style={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleLoginFormSubmit}>
                      Log in
                  </Button>
             </Stack>
          </form>
      </Container>
  );
};
