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
// TODO: Implement working stop function for the timer to stop
function App() {
  const [minutes, setMinutes] = useState(10);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  const [countDownDate, setCountDownDate] = useState(null);

  // let countDownDate;
  let timeLeft = '';
  // console.log(timeLeft);
  let t = 0
  let intervalTime = 1 // 1 second interval
  const interval = intervalTime * 60 

  function updateCountdown() {
    if (++t % interval == 0) {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const totalMinutes = Math.floor(distance / (1000 * 60));
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (hours > 0) {
        timeLeft = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      } else {
        timeLeft = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      }
      setTimeLeftString(timeLeft);
      console.log(timeLeft);
    }
    requestAnimationFrame(updateCountdown); // Call updateCountdown on the next animation frame
  }

  useEffect( () => {
    // console.log(countDownDate);
    updateCountdown(minutes);  
  }, [countDownDate] )

  
  
  useEffect(() => {
    // if (!meditationStart) {
      // if (!timeLeft.includes("-") )
      setCountDownDate(addMinutes(new Date(), minutes));
    // }
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
