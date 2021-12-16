import { useTheme } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogButton from "../../buttons/dialog-button/DialogButton";

function DialogRemoveMember(props) {
  const { onCloseSelected, onCloseBack, open, selectedMember } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    onCloseSelected(selectedMember);
  };

  const handleCancel = () => {
    onCloseBack();
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCancel}
        style={{ borderRadius: "8px" }}
      >
        <DialogTitle>
          Are you sure to delete this member?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ color: "black" }}>{selectedMember.name}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogButton autoFocus onClick={handleClose}>
            Remove
          </DialogButton>
          <DialogButton onClick={handleCancel} autoFocus>
            Back
          </DialogButton>
        </DialogActions>
      </Dialog>
  );
}

export default DialogRemoveMember;
