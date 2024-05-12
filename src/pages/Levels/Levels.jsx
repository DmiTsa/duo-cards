import LevelCardInfo from "../../components/LevelCardInfo/LevelCardInfo";
// import style from "./Levels.module.css";

export default function Levels() {
  return (
    <>
      <LevelCardInfo dif={2} />
      <LevelCardInfo dif={3} />
      <LevelCardInfo dif={4} />
      <LevelCardInfo dif={5} />
      <LevelCardInfo dif={6} />
    </>
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
