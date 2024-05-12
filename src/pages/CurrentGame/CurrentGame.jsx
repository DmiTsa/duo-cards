import Field from "../../components/Field/Field";
import style from "./CurrentGame.module.css";

export default function CurrentGame() {
  return (
    <>
      <div className={style.leftSide}>
        <p>leftside</p>
      </div>
      <div className={style.rightSide}>
        <Field />
      </div>
    </>
  );
}
