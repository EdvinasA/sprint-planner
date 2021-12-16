import React from "react";
import { Button, Collapse } from "@mui/material";
import ColorizeIcon from '@mui/icons-material/Colorize';
import { SketchPicker } from "react-color";

const style = {
  cover: {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    right: "0px",
    left: "0px",
  },
  collapse: {
    display: "inline-block",
    position: "absolute",
    zIndex: 250
  }
};

export default ({ selectedColor, handleColorChange }) => {
  const [currentColor, setCurrentColor] = React.useState(selectedColor);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(false);
    handleColorChange(currentColor);
  };

  const handleColorPick = (color) => {
    setCurrentColor(color.hex);
  };

  const handleContent = () => {
    setExpanded(true);
  };

  return (
    <div style={{ maxWidth: "64px", marginRight: "5px" }}>
      <Button
        style={{ color: "grey", backgroundColor: "rgba(0, 0, 0, 0.04)", maxHeight: "32px", maxWidth: "54px" }}
        onClick={handleContent}
      >
        <div style={{ backgroundColor: selectedColor, height: "18px", width: "18px" }} />
        <ColorizeIcon />
      </Button>
      <Collapse in={expanded} style={style.collapse}>
        <div style={style.cover} onClick={handleChange} aria-hidden="true" />
        <SketchPicker
          disableAlpha
          presetColors={[]}
          color={currentColor}
          onChange={handleColorPick}
        />
      </Collapse>
    </div>
  );
};
