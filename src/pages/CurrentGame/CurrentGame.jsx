import { useDispatch, useSelector } from "react-redux";
import {
  setActivePage,
  setLevels,
  selectorGameSet,
  selectLevels,
  selectNumberCurrentLevel,
} from "../../redux/gameSlice";
// import { isEnd } from "../../redux/levelSlice";
import GameProgress from "../../components/GameProgress/GameProgress";
import Field from "../../components/Field/Field";
import GameInfo from "../../components/GameInfo/GameInfo";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import style from "./CurrentGame.module.css";

export default function CurrentGame() {
  const dispatch = useDispatch();
  const gameSet = useSelector(selectorGameSet);
  const levels = useSelector(selectLevels);
  const numberCurrentLevel = useSelector(selectNumberCurrentLevel);

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
        <GameInfo />
        <GameProgress levels={levels} numberCurrentLevel={numberCurrentLevel} />
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
