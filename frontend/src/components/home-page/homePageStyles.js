import { makeStyles } from "@mui/styles";

const fontFamilyPoppins = "Poppins";
const fontFamilyOpenSans = "Open Sans";
const defaultBackground = "#FFFFFF";
const defaultBackgroundColor = "#E5E5E5";
const defaultFontStyle = "normal";

const homePageStyles = makeStyles({
  mainTemplate: {
    fontFamily: fontFamilyPoppins,
    backgroundColor: defaultBackgroundColor,
    height: "100%",
    fontStyle: defaultFontStyle,
    fontSize: "16px",
    letterSpacing: "-1.5px",
    display: "flex",
    justifyContent: "center"
  },
  startPage: {
    width: "100%",
    height: "100%"
  },
  taskStyle: {
    fontFamily: fontFamilyOpenSans,
    width: "1320px",
    height: "60px",
    left: "124px",
    top: "206px",
    marginTop: "33px",
    background: defaultBackground,
    border: "1px solid rgba(224, 224, 224, 1)",
  },
  taskText: {
    paddingTop: "13px",
    paddingLeft: "16px",
    fontFamily: fontFamilyPoppins,
    fontStyle: defaultFontStyle,
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "36px",
    display: "flex",
    alignItems: "center",
  },
  displaying: {
    display: "inline-block",
  },
  displayingSprintTitle: {
    maxWidth: "1365px",
    paddingTop: "80px",
    paddingRight: "50px",
    textAlign: "left",
    position: "relative"
  }
});

export default homePageStyles;
