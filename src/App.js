import Field from './components/Field/Field';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='leftSide'>
          <p>leftside</p>
        </div>
        <div className='rightSide'>
          <Field />
        </div>
      </div>
    </div>
  );
}

export default App;
