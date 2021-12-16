import styled from "@emotion/styled";
import { Button } from "@mui/material";

const RemoveButton = styled(Button)(({ theme }) => ({
  borderColor: "#E66465",
  color: "#E66465",
  backgroundColor: "transparent",
  '&:hover': {
    color: "white",
    borderColor: "#E66465",
    backgroundColor: "#E66465",
  },
}));

export default RemoveButton;
