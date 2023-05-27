import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";

let hours;
let minutes;
let seconds;

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

const timeView = (date, minutesFrom) => {
  const deadline = addMinutes(date, minutesFrom);
  const timeLeft = deadline - date;
  hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  let timeLeftString = '';
  if (hours != 0) {
      minutes = hours * 60 + minutes;
  }
  if (minutes < 10 && seconds < 10) {
      timeLeftString = '0' + minutes + ':0' + seconds;
  } else if (minutes < 10 && seconds >= 10) {
          timeLeftString = '0' + minutes + ':' + seconds;
  } else if (minutes >= 10 && seconds < 10) {
          timeLeftString = minutes + ':0' + seconds;
  } else {
          timeLeftString = minutes + ':' + seconds;
  }
  return timeLeftString;
}

function App() {
  const [minutes, setMinutes] = useState(10);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);

  useEffect(() => {
    if (meditationStart) {
        setInterval( function()  {
          var now = new Date();
          setTimeLeftString(timeView(now, minutes));
          console.log(timeLeftString);
        }, 1000);
    }
  }, [meditationStart]);



  useEffect(() => {
  }, [minutes, timeLeftString]);



  return (
    <div className="App">
      <div className='Navbar'>
        <div className='LogoDiv'>
        { <img src={icon} className="App-logo" alt="logo" />}
        </div>
        <div className='OptionsDiv'>
          <Options setMins={setMinutes} mins={minutes} setString={setTimeLeftString}/>
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
