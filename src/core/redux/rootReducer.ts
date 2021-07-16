import { appReducer } from "../../modules/app/appSlice";
import { orderListReducer } from "../../modules/orderList/orderListSlice";

export const rootReducer = {
  reducer: {
    app: appReducer,
    orderList: orderListReducer,
  },
};
