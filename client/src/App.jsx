import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

const getMeditationTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  const seconds = Math.floor((minutesLeft % 1) * 60);
  if (hours > 0) {
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  } else {
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }
}

// TODO: Make actual time start to tick from for example 10:00 at first.
function App() {
  const [minutes, setMinutes] = useState(10);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [countDownDate, setCountDownDate] = useState(null);
  const [buttonText, setButtonText] = useState('Start');

  function updateCountdown() {
    // Getting the current time and calculating the time left to the deadline
    const now = new Date().getTime();
    const timeLeftToDeadLine = countDownDate - now;
    const totalMinutes = Math.floor(timeLeftToDeadLine / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor((timeLeftToDeadLine % (1000 * 60)) / 1000);
  
    if (hours > 0) {
      setTimeLeftString(totalMinutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
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
    updateCountdown();  
    // setTimeLeftString(getMeditationTime(minutes));
  }, [countDownDate] )

  
  useEffect(() => {
    setMinutes(minutes);
    setTimeLeftString(getMeditationTime(minutes));
  }, [minutes]);

  useEffect(() => {
    if (meditationStart) {
      setButtonText('Stop');
      console.log(minutes);
      if(minutes > 0) setCountDownDate(addMinutes(new Date(), minutes));
    }
    else {
      setButtonText('Start');
    }
    
  }, [meditationStart]);

  return (
    <div className="App">
      <div className='Navbar'>
        <div className='LogoDiv'>
        { <img src={icon} className="App-logo" alt="logo" />}
        </div>
        <div className='OptionsDiv'>
          <Options setMins={setMinutes} mins={minutes} 
          setString={setTimeLeftString} setTimeVisible={setTimeVisible} setButtonVisible={setButtonVisible}/>
        </div>
      </div>
      <div className="Sun">
      {
        buttonVisible ? <button className="StartButton" onClick={() => {
          if (meditationStart) {
            setMeditationStart(false);
          }
          else {
            setMeditationStart(true);
          }
          // updateCountdown();
        }}>{buttonText}</button>: null
      }
      
        <div>
          {<img src={sun} className="Sun-logo" alt="sun" />}
        </div>
      </div>

      {
        timeVisible ? <p className="TimeView"> {timeLeftString} </p>: null
      }
      
    </div>
  );
}

export default App;
