import style from "./Greeting.module.css";

export default function Greeting({ gameClick }) {
  return (
    <>
      <div className={style.greeting}>
        <span className={style.bigText + " " + style.firstLetter}>D</span>
        <span className={style.bigText}>uo</span>
        <span className={style.bigText + " " + style.firstLetter}>C</span>
        <span className={style.bigText}>ards</span>
        <div className={style.buttons}>
          <input
            id="easy"
            className={style.button + " " + style.easy}
            type="button"
            value={"Легкая игра"}
            onClick={(e) => gameClick(e.currentTarget)}
          />
          <input
            id="normal"
            className={style.button + " " + style.normal}
            type="button"
            value={"Обычная игра"}
            onClick={(e) => gameClick(e.currentTarget)}
          />
          <input
            id="hard"
            className={style.button + " " + style.hard}
            type="button"
            value={"Сложная игра"}
            onClick={(e) => gameClick(e.currentTarget)}
          />
          <input
            id="custom"
            className={style.button + " " + style.custom}
            type="button"
            value={"Создать игру"}
            onClick={(e) => gameClick(e.currentTarget)}
          />
        </div>
      </div>
    </>
  );
}
