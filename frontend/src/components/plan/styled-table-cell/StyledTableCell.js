import { styled } from "@mui/material/styles";
import { TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#C2C9D1",
  fontStyle: "normal",
  fontWeight: 600,
  alignItems: "center",
  color: "rgba(0, 0, 0, 0.5)",
  background: "linear-gradient(0.9deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1",
  borderTop: "1px solid rgba(33, 33, 33, 0.08)",
  textAlign: "left",
  fontSize: 14,
  fontFamily: "Open Sans",
  padding: "14px 36px 14px 10px"
}));

export default StyledTableCell;
