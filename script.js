/* clock and date text */
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      dateWeek = document.getElementById('date-day-week'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth()

    // Show a zero before hours
    if(hh < 10) {hh = `0${hh}`}

    // Show time
    textHour.innerHTML = `${hh}:`
    
    // Show a zero before the minutes
    if(mm < 10) {mm = `0${mm}`}
    
    // Show minutes
    textMinutes.innerHTML = mm

    // We get the months of the year and show it
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // We show the day, the month and the year
    dateWeek.innerHTML = `${week[dayweek]},`
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]}`
}
setInterval(clockText, 1000)


/* dark & light theme */
const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 10)
}


/* battery percentage */
/* function batteryPercentage() {
    document.getElementById('battery').innerHTML = Math.floor(Math.random() * 100) + 1;
}

batteryPercentage.addEventListener */