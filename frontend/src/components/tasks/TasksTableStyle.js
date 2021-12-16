import { makeStyles } from "@mui/styles";
import "typeface-open-sans";

const borderTopDefault = "1px solid rgba(33, 33, 33, 0.08)";
const letterColorDefault = "rgba(0, 0, 0, 0.5)";
const tableDefaultFontFamily = "Open Sans";
const defaultFontStyle = "normal";
const defaultFontWeight = 600;
const defaultFontSize = "12px";
const defaultLineHeight = "16px";
const defaultTextAlign = "left";

const taskTableStyles = makeStyles({

  noTasksText: {
    height: "96px",
    paddingTop: "40px",
    textAlign: "center",
    alignItems: "center",
    "& span": {
      fontFamily: tableDefaultFontFamily,
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
    }
  },
  tableHead: {
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),linear-gradient(0deg, #C2C9D1, #C2C9D1)",
  },
  headerRow: {
    '& th': {
      borderTop: borderTopDefault,
      color: letterColorDefault,
      fontFamily: tableDefaultFontFamily,
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      lineHeight: defaultLineHeight,
      textAlign: defaultTextAlign,
    }
  },
  tableBodyKey: {
    fontFamily: tableDefaultFontFamily,
    border: borderTopDefault,
    fontWeight: defaultFontWeight,
    fontSize: defaultFontSize,
    maxWidth: "17px",
    margin: 0,
    padding: 0,
  },
  tableBodyDescription: {
    textAlign: "left",
    fontFamily: tableDefaultFontFamily,
    maxWidth: "380px",
    border: borderTopDefault,
    fontSize: defaultFontSize,

  },
  tableBodyType: {
    textAlign: "left",
    fontFamily: tableDefaultFontFamily,
    border: borderTopDefault,
    fontSize: defaultFontSize,
    width: "150px"
  },
  tableBodyOldPoints: {
    textAlign: "center",
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    border: borderTopDefault
  },
  tableBodyRemainingPoints: {
    textAlign: "center",
    fontFamily: tableDefaultFontFamily,
    width: "168px",
    fontSize: defaultFontSize,
    border: borderTopDefault
  },
  tableBodyNewPoints: {
    textAlign: "center",
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    border: borderTopDefault
  },
  tableBodyNewPointsInput: {
    alignItems: "center",
    textAlign: "center",
    maxWidth: "65px",
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    border: borderTopDefault
  },
  tableBodyKeyButton: {
    fontSize: defaultFontSize,
    margin: 0,
    padding: "2px 0 2px 0",
    maxHeight: "24px"
  },
  tableBodyBorders: {
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    border: borderTopDefault,
  },
  tableBodyTotal: {
    textAlign: "right",
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    fontWeight: defaultFontWeight,
  },
  tableBodyTotalPoints: {
    textAlign: "center",
    fontFamily: tableDefaultFontFamily,
    fontSize: defaultFontSize,
    fontWeight: defaultFontWeight,
    border: "1px solid rgba(33, 33, 33, 0.08)"
  },
});

export default taskTableStyles;
