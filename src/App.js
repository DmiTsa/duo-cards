import { useSelector } from 'react-redux';
import { selectorActivePage } from './redux/gameSlice'
import Greeting from './pages/Greeting/Greeting';
import CurrentGame from './pages/CurrentGame/CurrentGame';
import Levels from './pages/Levels/Levels';
import GameOver from './pages/GameOver/GameOver';
import './App.css';

function App() {
  const activePage = useSelector(selectorActivePage)

  return (
    <div className="App">
      <div className='container'>
        {activePage === 'greeting' ? <Greeting /> :
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