import s from "./style.module.css";
import cn from "classnames";
import { useAppSelector } from "../../core/redux/hooks";
import { selectOpenOrderSate } from "../../modules/app/appSelect";
import { useAppDispatch } from "../../core/redux/store";
import { setOpenOrder } from "../../modules/app/appSlice";
import { order } from "../../api/dto/orderList.g";
import { GoodsListItem } from "../goodsListItem/goodsListItem";

export const OpenedOrder: React.FC<order> = ({
  id,
  number,
  date = Date.now(),
  goods,
  sale,
}) => {
  const dispach = useAppDispatch();
  const openOrder = useAppSelector(selectOpenOrderSate);
  const handleClick = (): void => {
    dispach(setOpenOrder(false));
  };
  const orderDate = new Date(date).toLocaleString();
  let totalPrice = 0;
  const goodsListContent = goods.map((item) => {
    totalPrice +=
      Math.floor(item.price * item.count * ((100 - sale) / 100) * 100) / 100;
    return (
      <GoodsListItem
        key={item.id}
        name={item.name}
        price={item.price}
        count={item.count}
      />
    );
  });
  return (
    <div className={cn(s.wrapper, { [s.active]: openOrder })}>
      <div className={s.order}>
        <div className={s.top}>
          <div className={s.topText}>
            <div className={s.title}>Заказ {number}</div>
            <div className={s.date}>{orderDate}</div>
          </div>
          <button className={s.close} onClick={handleClick}></button>
        </div>
        <div className={s.name}>
          Товар
          <div className={s.nameDesc}>Название наименование товара</div>
        </div>
        <ul className={s.goodsList}>{goodsListContent}</ul>
        <div className={s.discount}>
          Скидка по заказу составила {100 - sale} %
        </div>
        <div className={s.totolPrice}>ИТОГО : {totalPrice}</div>
        <div className={s.note}>
          Дата выдачи заказа 10 дней с момента оплаты
        </div>
      </div>
    </div>
  );
};
