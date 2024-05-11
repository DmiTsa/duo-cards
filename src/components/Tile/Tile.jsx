import imgClosed from "./svg/n.svg";
import img1 from "./svg/1.svg";
import img2 from "./svg/2.svg";
import img3 from "./svg/3.svg";
import img4 from "./svg/4.svg";
import img5 from "./svg/5.svg";
import img6 from "./svg/6.svg";
import img7 from "./svg/7.svg";
import img8 from "./svg/8.svg";
import img9 from "./svg/9.svg";
import img10 from "./svg/10.svg";
import style from "./Tile.module.css";

export default function Card({ type, isOpened, isEnabled }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  if (images[type] && isOpened) {
    return (
      <div className={style.card}>
        <img src={images[type]} className={style.img} alt="heart" />
      </div>
    );
  } else {
    return (
      <div className={style.card}>
        <img src={imgClosed} className={style.img} alt="heart" />
      </div>
    );
  }
}
