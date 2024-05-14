import { useDispatch } from "react-redux";
import {
  incrementCurrentLevel,
  setLevels,
  setGameSet,
  setActivePage,
} from "../../redux/gameSlice";
import { setCurrentUser } from "../../redux/userSlice";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import style from "./Greeting.module.css";
import { useState } from "react";

export default function Greeting() {
  const [userName, setUserName] = useState("user");
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
    dispatch(setCurrentUser(userName));
    dispatch(incrementCurrentLevel());
    dispatch(setActivePage("currentGame"));
  };

  return (
    <>
      <div className={style.greeting}>
        <div className={style.user}>
          <span>Добро пожаловать,</span>
          <input
            className={style.userInput}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
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
      </div>
    </>
  );
}
