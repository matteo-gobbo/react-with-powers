import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./features/snackbarSlice";

export const store = configureStore({
  reducer: {
    snackbar: snackbarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
