import { orderListComponentProps } from "../../api/dto/orderList.g";
import { OrderListItem } from "../orderListItem/orderListItem";
import s from "./style.module.css";
export const OrderList:React.FC<orderListComponentProps> = ({ orderList }) => {
    
    const orderListContent = orderList.map(item => {        
        return <OrderListItem key={item.id} number={item.number} date={item.date} goods={item.goods} sale={item.sale}/>
    })
    
    return(
        <div className={s.orderListContainer}>
            <div className={s.title}>Список заказов</div>
            <button className={s.filter}></button>
            <div className={s.orderListWrapper}>
                <ul className={s.orderList}>
                {orderListContent}
            </ul> 
            </div>
            
        </div>
    )
}