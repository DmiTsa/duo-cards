import Tile from './components/Tile/Tile'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='leftSide'>
          <p>leftside</p>
        </div>
        <div className='rightSide'>
          <Tile type={0} isOpened={true} />
          <Tile type={1} isOpened={true} />
          <Tile type={2} isOpened={true} />
          <Tile type={3} isOpened={true} />
          <Tile type={4} isOpened={true} />
          <Tile type={5} isOpened={true} />
          <Tile type={6} isOpened={true} />
          <Tile type={7} isOpened={true} />
          <Tile type={8} isOpened={true} />
          <Tile type={9} isOpened={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
