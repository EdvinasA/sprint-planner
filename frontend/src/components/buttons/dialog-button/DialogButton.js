import styled from "@emotion/styled";
import { Button } from "@mui/material";

const DialogButton = styled(Button)(({ theme }) => ({
  borderColor: "transparent",
  color: "#404CFA",
  backgroundColor: "transparent",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  '&:hover': {
    color: "#404CFA",
    borderColor: "#EBECFF",
    backgroundColor: "#EBECFF",
  },
}));

export default DialogButton;
