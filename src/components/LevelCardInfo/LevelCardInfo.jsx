import style from "./LevelCardInfo.module.css";

export default function LevelCardInfo({ name, dif, sets, imgLib }) {
  return (
    <div
      className={`${style.levelCard} ${
        dif === 2
          ? style.easy
          : dif === 3 || dif === 4
          ? style.normal
          : dif >= 5
          ? style.hard
          : ""
      }`}
    >
      <div className={style.name}>{name}</div>
      <div>
        <div className={style.p}>Сложность: {dif}</div>
        <div className={style.p}>Групп: {sets}</div>
        <div className={style.p}>Набор: {imgLib}</div>
      </div>
    </div>
  );
}
