import { makeStyles } from "@mui/styles";
import "typeface-poppins";

const defaultFontFamily = "Poppins";
const defaultPositionAbsolute = "absolute";
const sideNavigationBackgroundColor = "#FFFFFF";

const useStyles = makeStyles({

  sideNav: {
    width: "64px",
    position: defaultPositionAbsolute,
    zIndex: "1",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: sideNavigationBackgroundColor,
    border: "1px solid rgba(33, 33, 33, 0.08)",
    marginTop: "64px",
  },
  drawerStyle: {
    marginTop: "12px",
    maxWidth: "64px"
  },
  buttonAddSprint: {
    flexWrap: "wrap",
    textAlign: "center",
    padding: "0 0 0 11px",
    width: "71px",
    marginBottom: 10
  },
  iconAddSprint: {
    marginRight: 12,
    transform: "scale(1.1)",
    color: "#404CFA",
    justifyContent: "center",
  },
  letterStyle: {
    width: "64px",
    fontFamily: defaultFontFamily,
    fontStyle: "normal",
    fontWeight: "500px",
    fontSize: "10px",
    lineHeight: "13px",
    display: "flex",
    letterSpacing: "1.4px",
    color: "rgba(0, 0, 0, 0.87)",
    marginTop: 5,
  },
  letterStyleAddButton: {
    width: "64px",
    fontFamily: defaultFontFamily,
    fontStyle: "normal",
    fontWeight: "500px",
    fontSize: "10px",
    lineHeight: "13px",
    display: "flex",
    letterSpacing: "1.4px",
    color: "rgba(0, 0, 0, 0.87)",
    marginTop: 5,
    paddingLeft: 12
  },
  openDrawerButton: {
    marginBottom: "-15px",
    maxWidth: "74px",
    flexWrap: "wrap",
    marginLeft: 5
  },
  manageTeamButton: {
    maxWidth: "75px",
    marginLeft: "4px",
    flexWrap: "wrap"
  },
  manageTeamButtonInside: {
    color: "rgba(0, 0, 0, 0.6)",
    marginBottom: -10
  },
  buttonAllSprints: {
    paddingRight: 3,
    color: "rgba(0, 0, 0, 0.6)",
    marginBottom: -9
  },
  letterStyleForOpenBar: {
    fontFamily: defaultFontFamily,
    fontStyle: "normal",
    fontWeight: "600px",
    fontSize: "13px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    color: "rgba(0, 0, 0, 0.87)",
  },
  displayingAllSprintsLetterStyle: {
    fontFamily: defaultFontFamily,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    color: "rgba(0, 0, 0, 0.6)",
    paddingLeft: 16
  },
  displayingAllSprintsLetterStyleButton: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    letterSpacing: "0.8px",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.6)",
    paddingLeft: 16,
    justifyContent: "center",
    paddingTop: "10px",
    "&:hover": {
      color: "#3540DD"
    }
  },
  displayingAllSprintsBackgroundStyle: {
    color: "#3540DD",
    fontWeight: 500,
    width: "305px",
    height: "40px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#EBECFF",
      color: "#3540DD"
    }
  },
  displayingAllSprints: {
    marginTop: "-90px",
  },
  drawerHeaderStyle: {
    marginTop: "112px",
    maxWidth: "140px"
  },
  drawerAddSprintIconButton: {
    width: 50,
    height: 50,
    justifyContent: "center"
  },
  drawerCloseButton: {
    marginTop: 110,
    marginLeft: 10
  },
  arrowDropDownCircleIconStyle: {
    color: "#404CFA",
    transform: "scale(1.2)",
    paddingBottom: 5.5
  },
  iconCircleStyle: {
    marginTop: -260,
    left: 32.5,
  },
  addSpringCircleButtonInOpenDrawer: {
    transform: "scale(2.2)"
  },
});

export default useStyles;
