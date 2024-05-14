import LevelCardInfo from "../../components/LevelCardInfo/LevelCardInfo";
import style from "./Levels.module.css";

export default function Levels() {
  return (
    <div className={style.levels}>
      <div className={style.createGame}>
        <span>createGame</span>
      </div>
      <div className={style.levelsSet}>
        <LevelCardInfo name={"Default"} dif={2} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={3} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={2} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={5} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={2} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={3} sets={4} imgLib={"Hearts"} />
        <LevelCardInfo name={"Default"} dif={5} sets={4} imgLib={"Hearts"} />
      </div>
    </div>
  );
}

// const initialState = {
//     id: 1,
//     name: 'template',
//     dif: 2,
//     sets: 4,
//     tiles: [
//         { id: "1", type: 0, isOpened: false, isEnabled: true },
//         { id: "2", type: 0, isOpened: false, isEnabled: true },
//         { id: "3", type: 1, isOpened: false, isEnabled: true },
//         { id: "4", type: 1, isOpened: false, isEnabled: true },
//         { id: "5", type: 2, isOpened: false, isEnabled: true },
//         { id: "6", type: 2, isOpened: false, isEnabled: true },
//         { id: "7", type: 3, isOpened: false, isEnabled: true },
//         { id: "8", type: 3, isOpened: false, isEnabled: true },
//     ],
//     status: 'playing' // 'ended'
// }
