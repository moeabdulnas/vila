import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";

function App() {
  const [minutes, setMinutes] = useState(10);

  useEffect(() => {
    console.log(minutes);
  }, [minutes]);
  return (
    <div className="App">
      <div className='Navbar'>
        <div className='LogoDiv'>
        { <img src={icon} className="App-logo" alt="logo" />}
        </div>
        <div className='OptionsDiv'>
          <Options setMins={setMinutes} mins={minutes}/>
        </div>
      </div>
      <div className="Sun">
        <div>
          {<img src={sun} className="Sun-logo" alt="sun" />}
        </div>
      </div>
    </div>
  );
}

export default App;
