import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, createTheme, CssBaseline, Snackbar, Alert } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./components/top-bar/Top-bar";
import SideBar from "./components/side-bar/Side-bar";
import ErrorBoundary from "./components/error/ErrorBoundary";
import routes from "./config/routes";
import { setFalse } from "./redux/slices/loginAlertSlice/loginAlertSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#404CFA"
    },
  },
  overrides: {
    MuiInput: {
      input: {
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          display: "none"
        }
      }
    }
  }
});

function App() {
  const dispatch = useDispatch();
  const LoginAlert = () => {
    const isSubmit = useSelector(state => state?.loginAlertSlice.alert);
    return (
        <Snackbar
          open={isSubmit}
          autoHideDuration={2000}
          onClose={() => dispatch(setFalse())}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={() => dispatch(setFalse())} severity="success" sx={{ width: '100%' }}>
            Success!
            <br />
            <strong>Login worked</strong>
          </Alert>
        </Snackbar>
    );
  };
  document.body.style = "background: #E5E5E5";
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box style={{ display: "flex" }}>
          <LoginAlert />
          <ErrorBoundary>
            <Router>
              <Switch>
                {routes.map((route, key) => (
                    <Route key={key} {...route}>
                      {route.showMenu &&
                      (
                          <>
                            <TopBar />
                            <div style={{ zIndex: 1 }}>
                              <SideBar />
                            </div>
                          </>
                      )}
                      <route.component />
                    </Route>
                ))}
              </Switch>
            </Router>
          </ErrorBoundary>
        </Box>
      </ThemeProvider>
  );
}

export default App;
