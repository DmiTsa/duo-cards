import { useSelector } from "react-redux";
import { BsChatSquareHeart } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import { selectLives } from "../../redux/gameSlice";
import style from "./GameInfo.module.css";

export default function GameInfo() {
  const gameLives = useSelector(selectLives);
  return (
    <div className={style.gameInfo}>
      <div className={style.user}>Dmitry</div>
      <div className={style.info}>
        <div>
          <BsChatSquareHeart /> {gameLives}
        </div>
        <div className={style.divider}></div>
        <div>
          <SiSecurityscorecard /> 2390
        </div>
      </div>
    </div>
  );
}
