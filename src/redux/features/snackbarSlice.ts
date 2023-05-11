import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Severity } from "~/models/Snackbar";

interface SnackbarState {
  title: string;
  show: boolean;
  severity: Severity;
}

const initialState: SnackbarState = {
  title: "",
  severity: "info",
  show: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{ title: string; severity: Severity }>
    ) => {
      state.show = true;
      state.title = action.payload.title;
      state.severity = action.payload.severity;
    },
    hideSnackbar: (state) => {
      state.show = false;
      state.title = "";
      state.severity = "info";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice;
