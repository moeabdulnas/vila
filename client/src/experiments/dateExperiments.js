function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }

const countDownToZero = (minutesLeft) => {
    const countDownDate = addMinutes(new Date(), minutesLeft);
    let timeLeftString = '';
    var x = setInterval( function()  {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
        console.log(timeLeftString);

        if (distance < 0) {
            clearInterval(x);
            console.log('Countdown finished');
        }
      }, 1000);
}

countDownToZero(10);

// Skips first second, but works
// Try requestAnimationFrame in application
