import style from "./LevelCardInfo.module.css";

export default function LevelCardInfo({ name, dif, sets, imgLib }) {
  let typeStyle;

  if (dif >= 2) {
    switch (dif) {
      case 2:
        typeStyle = style.levelCard + " " + style.easy;
        break;

      case 3:
      case 4:
        typeStyle = style.levelCard + " " + style.normal;
        break;

      default:
        typeStyle = style.levelCard + " " + style.hard;
        break;
    }
  } else {
    typeStyle = style.levelCard;
  }

  return (
    <div className={typeStyle}>
      <div className={style.name}>{name}</div>
      <div>
        <div className={style.p}>Сложность: {dif}</div>
        <div className={style.p}>Групп: {sets}</div>
        <div className={style.p}>Набор: {imgLib}</div>
      </div>
    </div>
  );
}
