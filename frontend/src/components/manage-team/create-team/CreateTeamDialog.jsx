import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { FormControl, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import React from "react";
import DialogButton from "../../buttons/dialog-button/DialogButton";

function CreateTeamDialog(props) {
  const { onClose, open, onCloseAdd } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [teamName, setTeamName] = React.useState("");

  const handleClose = () => {
    onClose();
  };

  const handleChangeTeamName = (event) => {
    setTeamName(event.target.value);
  };

  const handleCreateNewTeam = () => {
    onCloseAdd(teamName);
  };

  return (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          style={{ borderRadius: "8px" }}
        >
            <DialogTitle style={{ textAlign: "center", fontSize: "16px" }}>
                Create team
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <form>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{ textAlign: "center" }}>
                            <TextField
                              label="Team name"
                              variant="filled"
                              value={teamName}
                              onChange={event => handleChangeTeamName(event)}
                              style={{ height: "58px" }}
                            />
                        </FormControl>
                    </form>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <DialogButton autoFocus onClick={handleCreateNewTeam}>
                    Create
                </DialogButton>
                <DialogButton style={{ color: "#979797" }} onClick={handleClose} autoFocus>
                    Cancel
                </DialogButton>
            </DialogActions>
        </Dialog>
  );
}

export default CreateTeamDialog;
