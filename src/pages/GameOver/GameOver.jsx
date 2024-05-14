import style from "./GameOver.module.css";

export default function GameOver() {
  return (
    <div className={style.gameOver}>
      <div className={style.h1}>Game over</div>
      <div className={style.text}>Еще раз? Обнови страницу)</div>
    </div>
  );
}
