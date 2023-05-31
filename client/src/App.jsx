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

function App() {
  const [minutes, setMinutes] = useState(0.1);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [countDownDate, setCountDownDate] = useState(null);
  const [buttonText, setButtonText] = useState('Start');
  const [requestID, setRequestID] = useState(null);
  const [meditationComplete, setMeditationComplete] = useState(false);

  function updateCountdown() {
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
  
    if (timeLeftToDeadLine > 0 && meditationStart) {
      if (!requestID) {
        // Request ID to cancel the animation frame
        setRequestID(window.requestAnimationFrame(updateCountdown));
      }
    } else {
      setTimeLeftString('00:00');
      setMinutes(0);
      setButtonVisible(false);
      setMeditationStart(false);
      setMeditationComplete(true);
    }
  }

  useEffect(() => {
    setMinutes(minutes);
    setTimeLeftString(getMeditationTime(minutes));
  }, [minutes]);

  useEffect(() => {
    if (meditationStart) {
      setButtonText('Stop');
      updateCountdown();
    }
    else {
      if (requestID) {
        window.cancelAnimationFrame(requestID);
        setRequestID(null);
      }
      setButtonText('Start');
    }
  }, [meditationStart]);

  // TODO: Add text upon meditation completion
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
            // Resetting to the original time
            setMinutes(minutes);
            setTimeLeftString(getMeditationTime(minutes));
            setMeditationComplete(false);
          }
          else {
            setMeditationStart(true);
            if(minutes > 0) setCountDownDate(addMinutes(new Date(), minutes));
          }
          // updateCountdown();
        }}>{buttonText}</button>: null
      }
      {
        meditationComplete ? <h1 className="MeditationComplete"> Meditation Complete! </h1> : null
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
