import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpenedTrue,
  setIsOpenedFalse,
  setIsEnabledFalse,
  selectDif,
  selectTiles,
} from "../../redux/levelSlice";
import Tile from "../Tile/Tile";
import style from "./Field.module.css";

export default function Field() {
  const [currentClick, setCurrentClick] = useState(0);
  const [currentTileId, setCurrentTileId] = useState([]);

  const tiles = useSelector(selectTiles);
  const dif = useSelector(selectDif);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentClick === dif) {
      const matchedTiles = tiles.filter((tile) =>
        currentTileId.includes(tile.id)
      );
      const isAllTypeMached = matchedTiles
        .map((tile) => tile.type)
        .every((el) => el === matchedTiles[0].type);

      console.log("isAllTypeMached", isAllTypeMached);
      setTimeout(() => {
        isAllTypeMached
          ? dispatch(setIsEnabledFalse(currentTileId))
          : dispatch(setIsOpenedFalse(currentTileId));
      }, 700);

      setCurrentClick(0);
      setCurrentTileId([]);
      // clearTimeout(tileDelay);
    }
    // eslint-disable-next-line
  }, [currentClick, dif]);

  const tileClickHandler = (id) => {
    dispatch(setIsOpenedTrue(id));
    setCurrentTileId([...currentTileId, id]);
    setCurrentClick(currentClick + 1);
  };

  return (
    <div className={style.field}>
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} click={tileClickHandler} />
      ))}
    </div>
  );
}
