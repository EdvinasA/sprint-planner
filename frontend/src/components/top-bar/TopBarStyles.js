import { makeStyles } from "@mui/styles";

const iconColor = "rgba(255, 255, 255, 0.74)";

const useStyles = makeStyles({

  navBar: {
    overflow: "hidden",
    fontFamily: "Poppins",
    position: "fixed",
    top: 0,
    width: "100%",
    height: "56px",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  iconStyle: {
    color: iconColor,
    height: "20px",
    width: "16px",
    justifyContent: "space-around",
    marginLeft: 1
  },
  iconStyleBell: {
    color: iconColor,
    height: "20px",
    width: "16px",
    justifyContent: "space-around",
    marginRight: 23,
  },
  headerLetterStyle: {
    color: "white",
    fontSize: 22
  },
  notiPolygon: {
    position: "absolute",
    width: "15px",
    height: "15px",
    left: "621px",
    top: "462px",
    background: "#404CFA"
  }

});

export default useStyles;
