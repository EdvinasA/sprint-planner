import { makeStyles } from "@mui/styles";

const defaultFontFamily = "Open Sans";
const defaultFontStyle = "normal";
const defaultFontWeight = "600";
const greyTextColor = "#979797";

const ErrorStyles = makeStyles({
  errorText: {
    position: "relative",
    display: "flex",
    width: "1200px",
    top: "120px",
    justifyContent: "center",
    fontFamily: defaultFontFamily,
    fontStyle: defaultFontStyle,
    fontWeight: defaultFontWeight,
    fontSize: "36px",
    color: greyTextColor,
  },
  image: {
    position: "relative",
    display: "flex",
    top: "120px",
    justifyContent: "center",
    marginLeft: "353px"
  },
  smallerErrorText: {
    position: "relative",
    display: "flex",
    width: "1200px",
    top: "130px",
    justifyContent: "center",
    fontFamily: defaultFontFamily,
    fontStyle: defaultFontStyle,
    fontWeight: defaultFontWeight,
    fontSize: "24px",
    color: greyTextColor,
  },
  buttonDiv: {
    position: "relative",
    display: "flex",
    width: "1200px",
    top: "160px",
    justifyContent: "center",
    paddingBottom: "60px",
    "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "#404CFA"
    }
  }
});

export default ErrorStyles;
