import { createAsyncThunk } from "@reduxjs/toolkit";
import { ordersList } from "../../api/dto/orderList.g";
import { ordersListUrl } from "../../api/urls";

export const fetchOrdersList = createAsyncThunk(
  "player/fetchPlayerPosition",
  async () => {
    const response = await fetch(ordersListUrl);
    return (await response.json()) as ordersList;
  }
);
