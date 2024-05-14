import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import style from "./ProgressPart.module.css";

export default function ProgressPart({ dif, sets }) {
  let typeStyle;

  if (dif >= 2) {
    switch (dif) {
      case 2:
        typeStyle = style.progressPart + " " + style.easy;
        break;

      case 3:
      case 4:
        typeStyle = style.progressPart + " " + style.normal;
        break;

      default:
        typeStyle = style.progressPart + " " + style.hard;
        break;
    }
  } else {
    typeStyle = style.progressPart;
  }

  return (
    <div className={typeStyle}>
      <MdOutlineStackedBarChart />
      <strong>{dif}</strong>
      <div className={style.delimeter}></div>
      <FaLayerGroup />
      <strong>{sets}</strong>
    </div>
  );
}
