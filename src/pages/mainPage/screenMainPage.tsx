import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OrderList } from "../../componets/orderList/orderList";
import { Page } from "../../componets/page/page";
import { useAppSelector } from "../../core/redux/hooks";
import { selectOrderListData, selectOrderListIsLoading } from "../../modules/orderList/orderListSelect";
import { fetchOrdersList } from "../../modules/orderList/orderListThunk";

export const MainPage: React.FC = () => {
  const dispach = useDispatch();
  const orderListIsLoading = useAppSelector(selectOrderListIsLoading);
  const orderList = useAppSelector(selectOrderListData);

  useEffect(()=>{
    dispach(fetchOrdersList())
  },[dispach])

  return (
    <Page>
      {!orderListIsLoading && <OrderList orderList={orderList}/>}
    </Page>
  );
};
