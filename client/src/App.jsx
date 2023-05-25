import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { <img src={icon} className="App-logo" alt="logo" />}
      </header>
      <div className="Sun">
        <div>
          {<img src={sun} className="Sun-logo" alt="sun" />}
        </div>
      </div>
    </div>
  );
}

export default App;
