import { RootState } from "../../core/redux/store";

export const selectOrderListData = (state: RootState) =>
  state.orderList.orderListResult;
export const selectOrderListIsLoading = (state: RootState) =>
  state.orderList.orderListIsLoading;
export const selectOrderListerror = (state: RootState) =>
  state.orderList.orderListError;
