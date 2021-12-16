import styled from "@emotion/styled";
import { Button } from "@mui/material";

const GenericButton = styled(Button)(({ theme }, widthInPixels) => ({
  marginTop: "20px",
  width: widthInPixels,
  height: "36px",
  color: "#404CFA",
  backgroundColor: "white",
  border: "1px solid",
  borderColor: "#C4C4C4",
  borderRadius: "5px",
  justifyContent: "center",
  alignItems: "center",
  '&:hover': {
    borderColor: "#404CFA"
  },
}));

export default GenericButton;
