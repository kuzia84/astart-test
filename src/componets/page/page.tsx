import { BurgerBtn } from "../burgerBtn/burgerBtn";
import s from "./style.module.css";

export const Page: React.FC = (props) => {
  return (
    <div className={s.pageWrapper}>
      <BurgerBtn />
      {props.children}
    </div>
  );
};
