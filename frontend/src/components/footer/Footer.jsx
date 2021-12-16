import React from "react";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import footerStyles from "./FooterStyles";

const footerBackgroundColor = "#0D0F32";

function Footer() {
  const classes = footerStyles();
  return (
    <Box className={classes.stayAtTheBottom}>
      <CssBaseline />
      {/* Added style element to AppBar because for some reason when using React styles the color does not change. */}
      <AppBar style={{ backgroundColor: footerBackgroundColor }} position="static">
        <Toolbar className={classes.toolBarStyle}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className={classes.sprintPlanner}>2021 | Sprint Planner</span>
          </Typography>
          <Typography variant="h6" component="div">
            <span className={classes.madeBy}>Made by team Justas-Fall</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
