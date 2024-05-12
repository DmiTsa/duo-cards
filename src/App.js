// import CurrentGame from './pages/CurrentGame/CurrentGame';
import Levels from './pages/Levels/Levels';
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
          {/* <CurrentGame /> */}
          <Levels />
        </div>
      </section>
    </div >
  );
}

export default App;
