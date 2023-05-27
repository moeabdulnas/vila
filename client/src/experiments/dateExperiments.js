function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }

const timeView = (date, minutesFrom) => {
    const deadline = addMinutes(date, minutesFrom);
    const timeLeft = deadline - date;
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

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
console.log(timeView(new Date(), 120));