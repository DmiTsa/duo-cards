import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpenedTrue,
  setIsOpenedFalse,
  setIsEnabledFalse,
  setCurrentLevel,
  selectDif,
  selectTiles,
  selectImgLib,
} from "../../redux/levelSlice";
import {
  decrementLive,
  setLivesFromState,
  incrementCurrentLevel,
  setActivePage,
  selectNumberCurrentLevel,
  selectCurrentLevel,
  selectLives,
} from "../../redux/gameSlice";
import Tile from "../Tile/Tile";
import imgLibController from "../../lib/tileImages";
import fullLevelCreator from "../../utils/fullLevelCreator";
import style from "./Field.module.css";

const DELAY_MS = 700;

export default function Field() {
  const [currentClick, setCurrentClick] = useState(0);
  const [currentTileId, setCurrentTileId] = useState([]);

  const lives = useSelector(selectLives);
  const currentLevel = useSelector(selectCurrentLevel);
  const tiles = useSelector(selectTiles);
  const dif = useSelector(selectDif);
  const imgLib = useSelector(selectImgLib);
  const numberCurrentLevel = useSelector(selectNumberCurrentLevel);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("render field");

    lives === 0
      ? dispatch(setActivePage("gameOver"))
      : dispatch(decrementLive());

    if (currentClick === dif) {
      const matchedTiles = tiles.filter((tile) =>
        currentTileId.includes(tile.id)
      );
      const isAllTypeMached = matchedTiles
        .map((tile) => tile.type)
        .every((el) => el === matchedTiles[0].type);

      setTimeout(() => {
        isAllTypeMached
          ? dispatch(setIsEnabledFalse(currentTileId))
          : dispatch(setIsOpenedFalse(currentTileId));
      }, DELAY_MS);

      setCurrentClick(0);
      setCurrentTileId([]);
    }
    // eslint-disable-next-line
  }, [currentClick]);

  useEffect(() => {
    setTimeout(() => {
      if (tiles) {
        const isEndLevel = tiles
          .map((tile) => tile.isEnabled)
          .every((el) => el === false);
        if (isEndLevel) {
          dispatch(incrementCurrentLevel());
          dispatch(setLivesFromState());
        }
      }
    }, DELAY_MS);
    // eslint-disable-next-line
  }, [tiles]);

  useEffect(() => {
    if (numberCurrentLevel < 10) {
      dispatch(setCurrentLevel(fullLevelCreator(currentLevel)));
    } else {
      dispatch(setActivePage("gameOver"));
    }
    // eslint-disable-next-line
  }, [numberCurrentLevel]);

  const tileClickHandler = (id) => {
    dispatch(setIsOpenedTrue(id));
    setCurrentTileId([...currentTileId, id]);
    setCurrentClick(currentClick + 1);
  };

  if (numberCurrentLevel >= 0 && numberCurrentLevel < 10) {
    return (
      <div className={style.field}>
        {tiles?.map((tile) => (
          <Tile
            key={tile.id}
            tile={tile}
            imgLib={imgLibController(imgLib)}
            click={tileClickHandler}
          />
        ))}
      </div>
    );
  } else {
    return <p>no level</p>;
  }
}
