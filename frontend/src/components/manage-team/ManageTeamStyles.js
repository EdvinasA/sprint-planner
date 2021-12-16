import { makeStyles } from "@mui/styles";
import "typeface-poppins";
import "typeface-open-sans";
import "typeface-roboto";

const ManageTeamStyles = makeStyles({
  containerRoot: {
    paddingTop: "75px",
    maxWidth: "1620px",
    "& h1": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "34px",
      lineHeight: "112px",
      letterSpacing: "-1.5px",
      color: "black"
    }
  },
  manageTeamHeaderTableStyles: {
    height: "60px",
    top: "206px",
    background: "#FFFFFF",
    display: "flex",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    "& tr": {
      paddingTop: "13px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
      textAlign: "left",
    }
  },
  manageTeamHeaderStyles: {
    width: "1320px",
    height: "60px",
    top: "206px",
    background: "#FFFFFF",
    border: "1px solid rgba(33, 33, 33, 0.08)",
    "& div": {
      "& span": {
        paddingTop: "13px",
        paddingLeft: "16px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
      }
    }
  },
  manageTeamBodyStyles: {
    height: "60px",
    background: "#FFFFFF",
    display: "flex",
    "& tr": {
      paddingTop: "13px",
      paddingLeft: "16px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
      color: "#212121",
    }
  },
  displaying: {
    paddingTop: "5px",
    display: "inline-block",
  },
  headerTeamName: {
  },
  headerMembers: {
    marginInlineEnd: "200px",
  },
  bodyTeamName: {
    marginInlineStart: "64px"
  },
  bodyMembers: {
    marginInlineEnd: "200px",
    marginInlineStart: "300px"
  },
  bodyProjects: {
    marginInlineStart: "115px"
  },
  bodyTasks: {
    marginInlineStart: "195px"
  },
  manageTeamDisplayTeamHeaderStyles: {
    marginTop: "60px",
    maxWidth: "1318px",
    background: "#FFFFFF",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    paddingBottom: "10px",
    marginLeft: "1px",
    "& div": {
      "& span": {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "36px",
        color: "#000000",
        display: "inline-block",
        alignItems: "center",
      },
      "& button": {
        width: "187px",
        height: "36px",
        marginLeft: "830px",
        paddingRight: "10px",
        display: "flex"
      },
    }
  },
  displayTeamHeaderName: {
    marginInlineStart: "145px"
  },
  displayTeamHeaderRole: {
    marginInlineStart: "258.5px"
  },
  displayPictureTableCell: {
    width: "158px",
    textAlign: "center"
  },
  displayFullNameAndRoleTableCell: {
    width: "385px",
    textAlign: "left"
  },
  displaySelectRoleTableCell: {
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.43"
  },
});

export default ManageTeamStyles;
