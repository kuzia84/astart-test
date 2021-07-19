import { RootState } from "../../core/redux/store";

export const selectOpenOrderSate = (state: RootState) => state.app.openOrder;
export const selectedOpenOrderId = (state: RootState) => state.app.openOrderId;
