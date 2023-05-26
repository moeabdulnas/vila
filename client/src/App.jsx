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
          <dialog  open>
            <p>choose amount of minutes to meditate</p>
            <form method="dialog">
              <button>OK</button>
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
