import { makeStyles } from "@mui/styles";

const endSprintStyles = makeStyles({
  endSprintBox: {
    '& :last-child': {
      marginTop: 'auto'
    },
    position: 'absolute',
    top: '10%',
    left: '10%',
    transform: 'translate(-50% -50%)',
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '8px',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default endSprintStyles;
