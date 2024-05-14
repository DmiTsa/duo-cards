import { BsChatSquareHeart } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import style from "./GameInfo.module.css";

export default function GameInfo() {
  return (
    <div className={style.gameInfo}>
      <div className={style.user}>Dmitry</div>
      <div className={style.info}>
        <div>
          <BsChatSquareHeart /> 200
        </div>
        <div className={style.divider}></div>
        <div>
          <SiSecurityscorecard /> 2390
        </div>
      </div>
    </div>
  );
}
