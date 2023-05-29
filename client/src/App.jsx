import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

// TODO: Make actual time start to tick from for example 10:00 at first.
function App() {
  const [minutes, setMinutes] = useState(0.2);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  const [countDownDate, setCountDownDate] = useState(null);

  // TODO: Change refactor stringSetting to a function that returns a string
  //       That way we can use it for when meditatiion has not started and when it has
  function updateCountdown() {
    // Getting the current time and calculating the time left to the deadline
    const now = new Date().getTime();
    const timeLeftToDeadLine = countDownDate - now;
    const totalMinutes = Math.floor(timeLeftToDeadLine / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor((timeLeftToDeadLine % (1000 * 60)) / 1000);
  
    if (hours > 0) {
      setTimeLeftString(hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
    } else {
      setTimeLeftString(minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
    }
    
    if (timeLeftToDeadLine > 0) {
      requestAnimationFrame(updateCountdown);
    } else {
      setTimeLeftString('00:00');
      setMinutes(0);
    }

  }
  
  

  useEffect( () => {
    // TODO: Change to handle when meditation has started instead of when minutes is changed
    updateCountdown(minutes);  
  }, [countDownDate] )

  
  useEffect(() => {
    // TODO: Change to handle when meditation has started instead of when minutes is changed
      if(minutes > 0) setCountDownDate(addMinutes(new Date(), minutes));
  }, [minutes]);



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
        <p className="TimeView"> {timeLeftString} </p>
    </div>
  );
}

export default App;
