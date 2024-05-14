import { useDispatch, useSelector } from 'react-redux';
import { incrementCurrentLevel, setGameSet, selectorActivePage, setActivePage } from './redux/gameSlice'
import Greeting from './pages/Greeting/Greeting';
import CurrentGame from './pages/CurrentGame/CurrentGame';
import Levels from './pages/Levels/Levels';
import GameOver from './pages/GameOver/GameOver';
import './App.css';

function App() {
  const activePage = useSelector(selectorActivePage)
  const dispatch = useDispatch()

  const gameClickHandler = (target) => {
    switch (target.id) {
      case 'easy':
        dispatch(setGameSet('easy'))
        break;
      case 'normal':
        dispatch(setGameSet('normal'))
        break;
      case 'hard':
        dispatch(setGameSet('hard'))
        break;
      // case 'custom':
      //   dispatch(setGameSet('custom'))
      //   break;

      default:
        console.log('Error');
        break;
    }

    dispatch(incrementCurrentLevel());
    dispatch(setActivePage("currentGame"));
  }

  return (
    <div className="App">
      <div className='container'>
        {activePage === 'greeting' ? <Greeting gameClick={gameClickHandler} /> :
          activePage === 'levels' ? <Levels /> :
            activePage === 'currentGame' ? <CurrentGame /> :
              activePage === 'gameOver' ? <GameOver /> :
                < span > no page</span>
        }
      </div>
    </div >
  );
}

export default App;