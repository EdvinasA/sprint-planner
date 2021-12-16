import { makeStyles } from "@mui/styles";

const defaultFontStyle = "Open Sans";

const PlanStyles = makeStyles({
  totalWorkDays: {
    textAlign: "center",
    background: "linear-gradient(0.9deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1",
    borderTop: "1px solid rgba(33, 33, 33, 0.08)",
  },
  totalWorkDaysForEmployees: {
    fontFamily: defaultFontStyle,
    borderLeft: "1px solid rgba(33, 33, 33, 0.08)",
    width: "200px",
    textAlign: "center",
    padding: "0 24px 0 0"
  },
  styleForEmployeeTaskAndName: {
    fontFamily: defaultFontStyle,
    borderTop: "1px solid rgba(33, 33, 33, 0.08)",
    borderBottom: "1px solid rgba(33, 33, 33, 0.08)",
    textAlign: "left"
  },
  selectTaskForDay: {
    width: "88px",
    height: "30px"
  }

});

export default PlanStyles;
