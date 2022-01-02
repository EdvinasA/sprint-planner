import { createSlice } from "@reduxjs/toolkit";

export const loginAlertSlice = createSlice({
  name: "loginAlert",
  initialState: {
    alert: false
  },
  reducers: {
    setTrue: (state) => {
      state.alert = true;
    },
    setFalse: (state) => {
      state.alert = false;
    }
  }
});

export const { setTrue, setFalse } = loginAlertSlice.actions;

export default loginAlertSlice.reducer;
