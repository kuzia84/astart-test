import { Page } from "../../componets/page/page";

export const MainPage: React.FC = () => {
  return (
    <Page>
      <div className="orderListWrapper">
        <div className="title">Список заказов</div>
        <button className="filter"></button>
        <ul className="orderList">
          <li className="orderItem">
            <div className="orderTop">
              <div className="orderNumber"></div>
              <div className="orderPrice"></div>
              <div className="orderDate"></div>
            </div>
            <div className="orderBottom">
              <div className="ul">
                <div className="orderInfo">
                  <li className="orderInfoItem"></li>
                  <li className="orderInfoItem"></li>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Page>
  );
};
