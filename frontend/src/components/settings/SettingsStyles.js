import { makeStyles } from "@mui/styles";

const SettingsStyles = makeStyles({
  topRectangleStyle: {
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "60px"
  },
  bottomRectangleStyle: {
    paddingLeft: "20px",
    paddingRight: "70px"
  },
  headerStyle: {
    backgroundColor: "#404CFA",
    textAlign: "center"
  },
  headerLetterStyle: {
    fontWeight: 300,
    color: "white",
    fontSize: 10,
  },
  userSettingsStyle: {
    paddingLeft: "20px",
    paddingBottom: "25px",
  },
  liftText: {
    position: "relative",
    bottom: "3.5px"
  }
});

export default SettingsStyles;
