import styled from "@emotion/styled";
import { Button } from "@mui/material";

const SaveButton = styled(Button)(({ theme }) => ({
  borderColor: "#404CFA",
  color: "#404CFA",
  backgroundColor: "transparent",
  '&:hover': {
    color: "white",
    borderColor: "#404CFA",
    backgroundColor: "#404CFA",
  },
}));

export default SaveButton;
