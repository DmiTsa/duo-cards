import ProgressPart from "../ProgressPart/ProgressPart";
import style from "./GameProgress.module.css";

export default function GameProgress() {
  //нужен стейт для отслеживания активной ячейки и пройденных
  //можно сделать как массив с остальными значениями
  return (
    <div className={style.GameProgress}>
      <ProgressPart dif={2} sets={4} />
      <ProgressPart dif={3} sets={9} />
      <ProgressPart dif={3} sets={15} />
    </div>
  );
}
