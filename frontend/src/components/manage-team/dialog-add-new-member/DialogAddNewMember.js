import { useTheme } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogButton from "../../buttons/dialog-button/DialogButton";

function DialogAddNewMember(props) {
  const { onClose, onCloseToAdd, open, handleChangeInputMember, member, role, handleChangeRole, listOfRoles } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    onClose();
  };

  const handleChangeRoleValue = (value) => {
    handleChangeRole(value);
  };

  const handleChangeMember = (value) => {
    handleChangeInputMember(value);
  };

  const handleListItemClick = () => {
    onCloseToAdd(member, role);
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        style={{ borderRadius: "8px" }}
      >
        <DialogTitle style={{ textAlign: "center", fontSize: "16px" }}>
          Create new member
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <TextField
                  label="Name"
                  variant="filled"
                  value={member || ""}
                  onChange={event => handleChangeMember(event)}
                  style={{ marginRight: "60px", width: "173px", height: "58px" }}
                />
              </FormControl>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="filled"
                  label="Role"
                  onChange={(event) => handleChangeRoleValue(event)}
                  value={role || ""}
                  style={{ marginRight: "30px", width: "168px", height: "54px" }}
                >
                  {listOfRoles.map((role, key) => (
                    <MenuItem key={key} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogButton autoFocus onClick={handleListItemClick}>
            Create
          </DialogButton>
          <DialogButton style={{ color: "#979797" }} onClick={handleClose} autoFocus>
            Cancel
          </DialogButton>
        </DialogActions>
      </Dialog>
  );
}

export default DialogAddNewMember;
