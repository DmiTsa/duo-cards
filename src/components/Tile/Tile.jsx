import imgClosed from "../../lib/svg/n.svg";
import style from "./Tile.module.css";

export default function Card({ tile, imgLib, click }) {
  const { id, type, isOpened, isEnabled } = tile;
  // const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  if (isEnabled) {
    if (imgLib[type] && isOpened) {
      return (
        <div className={style.card + " " + style.opened}>
          <img src={imgLib[type]} className={style.img} alt="heart" />
        </div>
      );
    } else {
      return (
        <div className={style.card} onClick={() => click(id)}>
          <img src={imgClosed} className={style.img} alt="heart" />
        </div>
      );
    }
  } else {
    return (
      <div className={style.card + " " + style.disabled}>
        <img src={imgLib[type]} className={style.img} alt="heart" />
      </div>
    );
  }
}
