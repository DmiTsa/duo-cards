import { useDispatch, useSelector } from "react-redux";
import {
  // incrementCurrentLevel,
  setLevels,
  selectorGameSet,
  setActivePage,
} from "../../redux/gameSlice";
// import { isEnd } from "../../redux/levelSlice";
import GameProgress from "../../components/GameProgress/GameProgress";
import Field from "../../components/Field/Field";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import style from "./CurrentGame.module.css";

export default function CurrentGame() {
  const dispatch = useDispatch();
  const gameSet = useSelector(selectorGameSet);

  switch (gameSet) {
    case "easy":
      dispatch(setLevels(EASY_GAMESET));
      break;
    case "normal":
      dispatch(setLevels(NORMAL_GAMESET));
      break;
    case "hard":
      dispatch(setLevels(HARD_GAMESET));
      break;
    // case "custom":
    //   dispatch(setLevels(CUSTOM_GAMESET));
    //   break;

    default:
      console.log("Error");
      break;
  }

  dispatch(setActivePage("currentGame"));

  return (
    <>
      <div className={style.leftSide}>
        <div className={style.gameInfo}>
          <span>gameinfo</span>
        </div>
        <GameProgress />
        <div className={style.buttons}>
          <span>buttons</span>
        </div>
      </div>
      <div className={style.rightSide}>
        <Field />
      </div>
    </>
  );
}

// id: 1,
// name: 'template',
// dif: 2,
// sets: 4,
// tiles: [
//     { id: "1", type: 0, isOpened: false, isEnabled: true },
//     { id: "2", type: 0, isOpened: false, isEnabled: true },
//     { id: "3", type: 1, isOpened: false, isEnabled: true },
//     { id: "4", type: 1, isOpened: false, isEnabled: true },
//     { id: "5", type: 2, isOpened: false, isEnabled: true },
//     { id: "6", type: 2, isOpened: false, isEnabled: true },
//     { id: "7", type: 3, isOpened: false, isEnabled: true },
//     { id: "8", type: 3, isOpened: false, isEnabled: true },
// ],
// // status: 'playing', // 'ended'
// imgLib: 'Hearts'
