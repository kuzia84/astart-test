import { orderListItemComponetProps } from "../../api/dto/orderList.g";
import s from "./style.module.css";
export const OrderListItem: React.FC<orderListItemComponetProps>=({ number, date, goods, sale })=>{
    let price = 0;
    goods.forEach(element => {
        price += element.price * element.count
    });
    let goodsCount = 0
    goods.forEach(element => {
        goodsCount += element.count
    })
       
    return(
        <li className={s.orderItem}>
            <div className={s.orderTop}>
                <div className={s.orderNumber}>Заказ №{number}</div>
                <div className={s.orderPrice}>{Math.floor(price * sale)} Р</div>
                <div className={s.orderDate}>{date}</div>
            </div>
            <div className={s.orderBottom}>            
                <ul className={s.orderInfo}>
                    <li className={s.orderInfoItem}>товаров {goodsCount} шт.</li>
                    <li className={s.orderInfoItem}>наименований  {goods.length} шт</li>
                </ul>            
            </div> 
        </li>
    )
}