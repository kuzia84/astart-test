import { createSlice } from "@reduxjs/toolkit";
import { orderListState } from "../../api/dto/orderList.g";
import { fetchOrdersList } from "./orderListThunk";

const initialState: orderListState = {
  orderListIsLoading: true,
  orderListResult: [],
  orderListError: null,
};

const orderListSlise = createSlice({
  name: "orderList",
  initialState,
  reducers: { orderListReset: (state) => initialState },
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersList.pending, (state) => {
      state.orderListIsLoading = true;
    });
    builder.addCase(fetchOrdersList.fulfilled, (state, action) => {
      state.orderListIsLoading = false;
      state.orderListResult = action.payload;
    });
    builder.addCase(fetchOrdersList.rejected, (state, action) => {
      state.orderListIsLoading = false;
      state.orderListError = action.error;
    });
  },
});

export const { orderListReset } = orderListSlise.actions;

export const orderListReducer = orderListSlise.reducer;
