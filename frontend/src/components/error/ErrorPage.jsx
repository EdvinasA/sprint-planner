import React from 'react';
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ErrorStyles from "./ErrorStyles";
import image404 from "./icons/404image.jpg";
import image500 from "./icons/error500.jpg";

function ErrorPage({ errorCode }) {
  const classes = ErrorStyles();
  document.body.style = 'background: white';
  let imageName = "";
  let errorText = "";
  if (errorCode === "404") {
    imageName = image404;
    errorText = "Error: 404 Page Not Found";
  }
  if (errorCode === "500") {
    imageName = image500;
    errorText = "500 Initial server error";
  }
  return (
    <Container>
      <Box>
        <h1 className={classes.errorText}>Oops!</h1>
        <img className={classes.image} src={imageName} alt="errorImage" />
        <h2 className={classes.smallerErrorText}>{errorText}</h2>
        <div className={classes.buttonDiv}>
          <Link to="/">
            <Button variant="contained">
              BACK TO MAIN PAGE
            </Button>
          </Link>
        </div>
      </Box>
    </Container>
  );
}

export default ErrorPage;
