import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { BsChatSquareHeart } from "react-icons/bs";
import style from "./ProgressPart.module.css";

export default function ProgressPart({ dif, sets, lives, isActive, isEnded }) {
  return (
    <div
      className={`${style.progressPart} ${
        dif === 2
          ? style.easy
          : dif === 3 || dif === 4
          ? style.normal
          : style.hard
      } ${isActive ? style.active : ""} ${isEnded ? style.ended : ""}`}
    >
      <MdOutlineStackedBarChart />
      <strong>{dif}</strong>
      <div className={style.delimeter}></div>
      <FaLayerGroup />
      <strong>{sets}</strong>
      <div className={style.delimeter}></div>
      <BsChatSquareHeart />
      <strong>{lives}</strong>
    </div>
  );
}
