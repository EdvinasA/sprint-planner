import * as React from "react";
import Popover from '@mui/material/Popover';
import { Box, Button, FormControlLabel, FormGroup, IconButton } from "@mui/material";
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SettingsHeader from "./SettingsHeader";
import { getSettings, toggleDarkMode, toggleNotificationAlert } from "../../redux/settingsState/settingsStateActions";

function Settings() {
  const iconColor = "rgba(255, 255, 255, 0.74)";

  const settings = useSelector((state) => state?.settingsReducer.settings);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(false);

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    localStorage.setItem("access_token", "");
    history.push("/login");
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  const open = anchorEl;
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton style={{ color: iconColor }} aria-describedby={id} onClick={handleClick}><AccountCircleIcon /></IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <SettingsHeader />
        <FormGroup>
          <FormControlLabel control={<Switch checked={settings.notificationAlert} onClick={() => dispatch(toggleNotificationAlert())} />} label="Notification alert" />
          <FormControlLabel control={<Switch checked={settings.darkMode} onClick={() => dispatch(toggleDarkMode())} />} label="Dark mode" />
          <Button>
            User settings
          </Button>
          <Button color="error" onClick={handleLogOut}>
            Log out
          </Button>
        </FormGroup>
      </Popover>
    </Box>
  );
}

export default Settings;
