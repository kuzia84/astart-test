import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../../api/dto/app.g";

const initialState: appState = {
  openOrder: false,
  openOrderId: "",
};

const appSlise = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setOpenOrder: (state, action) => {
      state.openOrder = action.payload;
    },
    setOpenOrderId: (state, action) => {
      state.openOrderId = action.payload;
    },
  },
});

export const { setOpenOrder, setOpenOrderId } = appSlise.actions;

export const appReducer = appSlise.reducer;
