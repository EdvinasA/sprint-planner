import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  color: "#404CFA",
  alignItems: "center",
  justifyContent: "center",
  '&:hover': {
    color: "white"
  },
}));

export default StyledAddIcon;
