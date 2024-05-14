import { useDispatch } from "react-redux";
import {
  incrementCurrentLevel,
  setLevels,
  setGameSet,
  setActivePage,
} from "../../redux/gameSlice";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import style from "./Greeting.module.css";

export default function Greeting() {
  const dispatch = useDispatch();

  const gameClickHandler = (target) => {
    switch (target.id) {
      case "easy":
        dispatch(setGameSet("easy"));
        dispatch(setLevels(EASY_GAMESET));

        break;
      case "normal":
        dispatch(setGameSet("normal"));
        dispatch(setLevels(NORMAL_GAMESET));
        break;
      case "hard":
        dispatch(setGameSet("hard"));
        dispatch(setLevels(HARD_GAMESET));
        break;
      // case 'custom':
      //   dispatch(setGameSet('custom'))
      //   break;

      default:
        console.log("Error");
        break;
    }

    dispatch(incrementCurrentLevel());
    dispatch(setActivePage("currentGame"));
  };

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
            onClick={(e) => gameClickHandler(e.currentTarget)}
          />
          <input
            id="normal"
            className={style.button + " " + style.normal}
            type="button"
            value={"Обычная игра"}
            onClick={(e) => gameClickHandler(e.currentTarget)}
          />
          <input
            id="hard"
            className={style.button + " " + style.hard}
            type="button"
            value={"Сложная игра"}
            onClick={(e) => gameClickHandler(e.currentTarget)}
          />
          <input
            disabled
            id="custom"
            className={style.button + " " + style.custom}
            type="button"
            value={"Создать игру"}
            onClick={(e) => gameClickHandler(e.currentTarget)}
          />
        </div>
        {/* <div className={style.user}>
          Добро пожаловать,{" "}
          <input className={style.userInput} type="text" value={"user"}></input>
          !
        </div> */}
      </div>
    </>
  );
}
