import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";
import { AiFillSound  } from "react-icons/ai";



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
  const [minutes, setMinutes] = useState(10);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [countDownDate, setCountDownDate] = useState(null);
  const [buttonText, setButtonText] = useState('Start');
  const [requestID, setRequestID] = useState(null);
  const [meditationComplete, setMeditationComplete] = useState(null);
  const [bell, setBell] = useState(null);
  const [sound, setSound] = useState(null);
  const [bellVolume, setBellVolume] = useState(5);
  const [soundVolume, setSoundVolume] = useState(5);

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
      if (bell) bell.play();
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
    }
  }

  useEffect(() => {
    setMinutes(minutes);
    setTimeLeftString(getMeditationTime(minutes));
  }, [minutes]);

  //TODO: If user want to meditate again, make sure h1 meditation complete is gone.
  useEffect(() => {
    if (meditationStart) {
      setButtonText('Stop');
      updateCountdown();
      if (bell) {
        bell.play();
      }
      if (sound) {
        setTimeout(() => {

          sound.play();
          sound.loop = true;
        }, 5000);
      }
    }
    else {
      if (requestID) {
        window.cancelAnimationFrame(requestID);
        setRequestID(null);
      }
      setButtonText('Start');
    }
  }, [meditationStart]);

  useEffect(() => {
    if (bell) bell.play();
  }, [bell] );

  useEffect(() => {
    if (bell) bell.volume = bellVolume / 10;
  }, [bellVolume, bell]);

  useEffect(() => {
    if (sound) sound.play();
  }, [sound] );

  useEffect(() => {
    if (sound) sound.volume = soundVolume / 10;
  }, [sound, soundVolume]);

  // TODO: Add text upon meditation completion
  return (
    <div className="App">
      <div className='Navbar'>
        <div className='LogoDiv'>
        { <img src={icon} className="App-logo" alt="logo" />}
        </div>
        <div className='OptionsDiv'>
          <Options setMins={setMinutes} mins={minutes} setBell={setBell} setSound={setSound} 
          setBellVolume={setBellVolume} setSoundVolume={setSoundVolume} setString={setTimeLeftString} 
          bell={bell} sound={sound} bellVolume={bellVolume} soundVolume={soundVolume}
          setTimeVisible={setTimeVisible} setButtonVisible={setButtonVisible} setMeditationComplete={setMeditationComplete}/>
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
