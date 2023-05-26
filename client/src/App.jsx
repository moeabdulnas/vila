import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div className='Navbar'>
        <div className='LogoDiv'>
        { <img src={icon} className="App-logo" alt="logo" />}
        </div>
        <div className='OptionsDiv'>
          <Options />
          <dialog className='TimeOption' open>
            <p className='MinutesParagraph'>minutes</p>
            <div className='MinuteStepper'>
              <button className='Minus'>-</button>
              <input 
                type='number' className='Minutes' 
                value='10' min='1' max='120' step='5' readOnly
                />
              <button className='Plus'>+</button>
            </div>
            <form method="dialog">
              <button className='Ok'>OK</button>
            </form>
          </dialog>

        </div>
      </div>
      {/* </header> */}
      <div className="Sun">
        <div>
          {<img src={sun} className="Sun-logo" alt="sun" />}
        </div>
      </div>
    </div>
  );
}

export default App;
