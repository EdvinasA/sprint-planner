import styled from "@emotion/styled";
import { Button } from "@mui/material";

const EndSprintButton = styled(Button)(({ theme }) => ({
  borderColor: "#404CFA",
  color: "#404CFA",
  backgroundColor: "transparent",
  '&:hover': {
    color: "white",
    borderColor: "#404CFA",
    backgroundColor: "#404CFA",
  },
  position: "absolute",
  top: "80px",
  right: "20px"
}));

export default EndSprintButton;
