import './App.css';
import icon from './assets/images/logo.png';
import sun from './assets/images/sun.svg';
import Timer from './components/Timer.jsx';
import Options from './components/Options.jsx';
import { useEffect, useState, useRef } from "react";

// let hours;
// let minutes;
// let seconds;

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

// const timeView = (date, minutesFrom) => {
//   const deadline = addMinutes(date, minutesFrom);
//   const timeLeft = deadline - date;
//   hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   let timeLeftString = '';
//   if (hours != 0) {
//       minutes = hours * 60 + minutes;
//   }
//   if (minutes < 10 && seconds < 10) {
//       timeLeftString = '0' + minutes + ':0' + seconds;
//   } else if (minutes < 10 && seconds >= 10) {
//           timeLeftString = '0' + minutes + ':' + seconds;
//   } else if (minutes >= 10 && seconds < 10) {
//           timeLeftString = minutes + ':0' + seconds;
//   } else {
//           timeLeftString = minutes + ':' + seconds;
//   }
//   return timeLeftString;
// }

// const countDownToZero = (minutesLeft) => {
//   const countDownDate = addMinutes(new Date(), minutesLeft);
//   let timeLeftString = '';
//   var x = setInterval( function()  {
//       var now = new Date().getTime();
//       var distance = countDownDate - now;
//       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       if (hours != 0) {
//           minutes = hours * 60 + minutes;
//       }
//       if (minutes < 10 && seconds < 10) {
//           timeLeftString = '0' + minutes + ':0' + seconds;
//       } else if (minutes < 10 && seconds >= 10) {
//               timeLeftString = '0' + minutes + ':' + seconds;
//       } else if (minutes >= 10 && seconds < 10) {
//               timeLeftString = minutes + ':0' + seconds;
//       } else {
//               timeLeftString = minutes + ':' + seconds;
//       }
//       console.log(timeLeftString);

//       // if (distance < 0) {
//       //     clearInterval(x);
//       //     console.log('Countdown finished');
//       // }
//       if (distance > 0) {
//         requestAnimationFrame(updateCountdown); // Call updateCountdown on the next animation frame
//       } else {
//         console.log('Countdown finished');
//       }
//     }, 1000);
// }

function App() {
  const [minutes, setMinutes] = useState(10);
  const [timeLeftString, setTimeLeftString] = useState(null);
  const [meditationStart, setMeditationStart] = useState(false);
  // const [countDownDate, setCountDownDate] = useState(null);

  let countDownDate;
  let timeLeft = '';
  console.log(timeLeft);
  let t = 0
  let intervalTime = 1
  const interval = intervalTime * 60 

  function render() {
  if (++t % interval == 0)
  requestAnimationFrame(render)
  }
  function updateCountdown() {
  if (!countDownDate) {
    countDownDate = addMinutes(new Date(), 10);
  }
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
  
    console.log(timeLeft);
  }
    requestAnimationFrame(updateCountdown); // Call updateCountdown on the next animation frame

  }

  
  useEffect(() => {
    if (!meditationStart) {
      updateCountdown(minutes);
        
    }
  }, [meditationStart, minutes]);



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
