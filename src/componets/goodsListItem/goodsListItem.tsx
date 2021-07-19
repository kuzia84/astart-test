import { good } from "../../api/dto/orderList.g";
import s from "./style.module.css";
export const GoodsListItem: React.FC<good> = ({ name, price, count }) => {
  return (
    <li className={s.goodsListItem}>
      <div className={s.goodsListItemText}>
        <div className={s.goodsListItemName}>{name}</div>
        <div className={s.goodsListItemQuantity}>
          Количество
          <span>{count} шт</span>
        </div>
      </div>
      <div className={s.goodsListItemPrice}>
        {Math.floor(price * count * 100) / 100} Р
      </div>
    </li>
  );
};
