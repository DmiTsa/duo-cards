import CurrentGame from './pages/CurrentGame/CurrentGame';
// import LevelCreate from './pages/LevelCreate/LevelCreate';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <span>header</span>
        </div>
      </header>
      <section>
        <div className='container'>
          <CurrentGame />
          {/* <LevelCreate /> */}
        </div>
      </section>
    </div >
  );
}

export default App;
