import ProgressPart from "../ProgressPart/ProgressPart";
import style from "./GameProgress.module.css";

export default function GameProgress({ levels, numberCurrentLevel }) {
  return (
    <div className={style.GameProgress}>
      {levels.map((lev, i) => {
        return (
          <ProgressPart
            key={lev.id}
            lives={lev.lives}
            dif={lev.dif}
            sets={lev.sets}
            isActive={i === numberCurrentLevel}
            isEnded={i < numberCurrentLevel}
          />
        );
      })}
    </div>
  );
}

//levels
// dif:2
// imgLib:"Hearts"
// name:"easy game 1"
// sets:2
