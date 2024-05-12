import style from "./LevelCardInfo.module.css";

export default function LevelCardInfo({ dif }) {
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

      case 5:
        typeStyle = style.levelCard + " " + style.hard;
        break;

      default:
        console.log("unreal");

        typeStyle = style.levelCard + " " + style.unreal;
        break;
    }
  } else {
    typeStyle = style.levelCard;
  }

  return (
    <div className={typeStyle}>
      <div className={style.name}>Default easy</div>
      <div>
        <div className={style.p}>Сложность: 2</div>
        <div className={style.p}>Групп: 4</div>
        <div className={style.p}>Набор: Hearts</div>
      </div>
    </div>
  );
}
