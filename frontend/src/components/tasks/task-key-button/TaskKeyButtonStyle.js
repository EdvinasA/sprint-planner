import { makeStyles } from "@mui/styles";
import "typeface-open-sans";

const defaultFontSize = "12px";
const defaultFontFamily = "Open Sans";

const TaskKeyButtonStyle = makeStyles({
  buttonStyle: {
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    fontWeight: 600,
    margin: 0,
    height: "26px",
  },
});

export default TaskKeyButtonStyle;
