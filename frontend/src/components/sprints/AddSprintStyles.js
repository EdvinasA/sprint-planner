import { makeStyles } from "@mui/styles";

const AddSprintStyles = makeStyles({
  containerRoot: {
    paddingTop: "95px",
    maxWidth: "1400px"
  },
  addSprintTaskStyle: {
    fontFamily: "Open Sans",
    width: "1320px",
    height: "60px",
    left: "124px",
    top: "206px",
    background: "#FFFFFF",
    border: "1px solid rgba(33, 33, 33, 0.08)",
    marginTop: "38px"
  },
  addSprintTaskText: {
    paddingTop: "13px",
    paddingLeft: "16px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "36px",
    display: "flex",
    alignItems: "center",
  },
  root: {
    "& .MuiFilledInput-root": {
      width: "348px"
    },
    "& .css-r9hudi-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#6200EE"
    },
  },
  informationStyle: {
    "& span": {
      paddingTop: "20px",
      display: "flex",
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      letterSpacing: "0.25px",
      alignItems: "center",
    },
    "& svg": {
      marginInlineEnd: "10px",
    },
    "& b": {
      marginInlineStart: "5px",
    },
    "& .MuiButton-root": {
      color: "#404CFA"
    }
  },
  stayAtTheBottomFormAddAndCancel: {
    fontFamily: "Poppins",
    height: "56px",
    justifyContent: "center",
    position: "fixed",
    background: "#FFFFFF",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    left: "64px",
    bottom: 0,
    width: "100%",
  },
  sprintNameInputField: {
    "& .css-r9hudi-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#6200EE"
    },
    "& .MuiFilledInput-root": {
      width: "348px"
    },
    display: "inline-block",
    paddingBottom: "10px",
    marginRight: "44px",
  },
  separatorOfDates: {
    paddingRight: "10px",
    paddingLeft: "10px"
  },
  sprintDatesInputFields: {
    "& .css-r9hudi-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#6200EE"
    },
  },
  styleForDisplayInlineBlock: {
    display: "inline-block"
  }
});

export default AddSprintStyles;
