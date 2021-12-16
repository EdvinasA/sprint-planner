import * as actions from "./settingsStateActionType";

export const getSettings = () => ({
  type: actions.GET_SETTINGS
});

export const toggleNotificationAlert = () => ({
  type: actions.TOGGLE_NOTIFICATION_ALERT
});

export const toggleDarkMode = () => ({
  type: actions.TOGGLE_DARK_MODE
});
