export const secondToTime = (time) => { 
    const minutes = time / 60
    const minutesFixed = minutes.toFixed(0)
    var minutesFormat = minutesFixed
    if (minutesFixed.length == 1) {
        minutesFormat = "0" + minutesFixed
    }
    const seconds = time % 60
    var secondsFormat = seconds

    if(seconds < 10) {
        secondsFormat = "0" + seconds
    }

    return minutesFormat + ":" + secondsFormat
}
