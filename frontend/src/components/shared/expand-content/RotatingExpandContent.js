import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import React from "react";

const RotatingExpandContent = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default RotatingExpandContent;
