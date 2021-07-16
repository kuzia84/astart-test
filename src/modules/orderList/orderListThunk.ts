import { createAsyncThunk } from "@reduxjs/toolkit";
import { ordersList } from "../../api/dto/orderList.g";
import { ordersListUrl } from "../../api/urls";

export const fetchOrdersList = createAsyncThunk(
  "player/fetchPlayerPosition",
  async () => {
    const response = await fetch(ordersListUrl, {
      method: "GET",
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await response.json()) as ordersList;
  }
);

// const fetchList = async () => {
//   const response = await fetch("https://u38027.netangels.ru/api/orders.php", {
//     method: "GET",
//     mode: "no-cors", // no-cors, *cors, same-origin
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const string = await response.text();
//   const json = string === "" ? [] : JSON.parse(string);
//   console.log("json: ", json);
//   // return json;

//   // return response.json();
// };
// fetchList();
