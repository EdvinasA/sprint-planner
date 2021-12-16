import produce from "immer";
import * as actions from "./settingsStateActionType";

const initialState = {
  settings: {
    notificationAlert: true,
    darkMode: false,
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_SETTINGS:
      return state;
    case actions.TOGGLE_NOTIFICATION_ALERT:
      return produce(state, draftState => {
        draftState.settings.notificationAlert = !state.settings.notificationAlert;
      });
    case actions.TOGGLE_DARK_MODE:
      return produce(state, draftState => {
        draftState.settings.darkMode = !state.settings.darkMode;
      });
    default:
      return state;
  }
};
