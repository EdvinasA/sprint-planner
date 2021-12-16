import { makeStyles } from "@mui/styles";
import "typeface-roboto";

const fontFamilyRoboto = "Roboto";
const fontSize12px = "12px";
const fontStyleNormal = "normal";
const fontWeightNormal = "normal";

const letterColor = "white";

const footerStyles = makeStyles({

  madeBy: {
    fontFamily: fontFamilyRoboto,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize12px,
    marginRight: 250,
    color: letterColor,
  },
  sprintPlanner: {
    fontFamily: fontFamilyRoboto,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize12px,
    marginLeft: 120,
    color: letterColor,
  },
  stayAtTheBottom: {
    fontFamily: "Poppins",
    bottom: 0,
    width: "100%",
    marginLeft: -50,
    height: "56px",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
  },
  toolBarStyle: {
    paddingBottom: 15
  }
});

export default footerStyles;
