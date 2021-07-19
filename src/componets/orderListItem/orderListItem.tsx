import { order } from "../../api/dto/orderList.g";
import { useAppDispatch } from "../../core/redux/hooks";
import { setOpenOrder, setOpenOrderId } from "../../modules/app/appSlice";
import s from "./style.module.css";
export const OrderListItem: React.FC<order> = ({
  id,
  number,
  date = Date.now(),
  goods,
  sale,
}) => {
  const dispach = useAppDispatch();
  let price = 0;
  goods.forEach((element) => {
    price +=
      Math.floor(element.price * element.count * ((100 - sale) / 100) * 100) /
      100;
  });
  let goodsCount = 0;
  goods.forEach((element) => {
    goodsCount += element.count;
  });
  const orderDate = new Date(date).toLocaleString();
  const handleClick = (): void => {
    dispach(setOpenOrder(true));
    dispach(setOpenOrderId(id));
  };

  return (
    <li className={s.orderItem} onClick={handleClick}>
      <div className={s.orderTop}>
        <div className={s.orderNumber}>Заказ №{number}</div>
        <div className={s.orderPrice}>{price} Р</div>
        <div className={s.orderDate}>{orderDate}</div>
      </div>
      <div className={s.orderBottom}>
        <ul className={s.orderInfo}>
          <li className={s.orderInfoItem}>товаров {goodsCount} шт.</li>
          <li className={s.orderInfoItem}>наименований {goods.length} шт</li>
        </ul>
      </div>
    </li>
  );
};
