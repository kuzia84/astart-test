import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OpenedOrder } from "../../componets/openedOrder/openedOrder";
import { OrderList } from "../../componets/orderList/orderList";
import { Page } from "../../componets/page/page";
import { useAppSelector } from "../../core/redux/hooks";
import { selectedOpenOrderId } from "../../modules/app/appSelect";
import {
  selectOrderListData,
  selectOrderListIsLoading,
} from "../../modules/orderList/orderListSelect";
import { fetchOrdersList } from "../../modules/orderList/orderListThunk";

export const MainPage: React.FC = () => {
  const dispach = useDispatch();
  const orderListIsLoading = useAppSelector(selectOrderListIsLoading);
  const orderList = useAppSelector(selectOrderListData);
  const selectedOrderId = useAppSelector(selectedOpenOrderId);
  const selectedOrder = orderList.filter((item) => item.id === selectedOrderId);

  useEffect(() => {
    dispach(fetchOrdersList());
  }, [dispach]);

  return (
    <Page>
      {!orderListIsLoading && <OrderList orderList={orderList} />}
      {selectedOrderId && (
        <OpenedOrder
          id={selectedOrder[0].id}
          number={selectedOrder[0].number}
          date={selectedOrder[0].date}
          goods={selectedOrder[0].goods}
          sale={selectedOrder[0].sale}
        />
      )}
    </Page>
  );
};
