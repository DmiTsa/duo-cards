import { useSelector } from "react-redux";
import { selectIsWinner } from "../../redux/userSlice";
import style from "./GameOver.module.css";

export default function GameOver() {
  const isWinner = useSelector(selectIsWinner);
  return (
    <div className={style.gameOver}>
      <div className={style.h1}>{isWinner ? "Winner !!!" : "Game over"}</div>
      //LeaderBoard
      <div className={style.text}>Еще раз? Обнови страницу)</div>
    </div>
  );
}
