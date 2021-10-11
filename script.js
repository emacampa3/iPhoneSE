/* random battery percentage (between 60 and 90) */
const batteryPercentage = document.querySelector('#battery-percentage').innerHTML = `${Math.floor(Math.random() * 29) + 70}%`

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


/* date text calendar */
/*
const calendarWeek = document.getElementById('calendar-day-week'),
      calendarDay = document.getElementById('calendar-day')

const clock = () => {
    let date = new Date()

    let calDay = date.getDate(),
        calDayweek = date.getDay()

    let calWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    calendarWeek.innerHTML = `${calWeek[calDayweek]}`
    calendarDay.innerHTML = calDay
}
setInterval(clock, 1000)


/* dark & light theme */
/* const checkbox = document.querySelector('input[name=theme]');

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
} */


const createState = (state) => {
	return new Proxy(state, {
		set(target, property, value) {
			target[property] = value;
			render();
			return true;
		},
	});
};

const state = createState({
	name: "Branko",
	message: "Let's have lunch tommorow!",
});

const listeners = document.querySelectorAll("[data-model]");

listeners.forEach((listener) => {
	const name = listener.dataset.model;
	listener.addEventListener("keyup", (event) => {
		state[name] = listener.value;
		console.log(state);
	});
});

const render = () => {
	const bindings = Array.from(document.querySelectorAll("[data-binding]")).map(
		(e) => e.dataset.binding
	);
	bindings.forEach((binding) => {
		document.querySelector(`[data-binding='${binding}']`).innerHTML =
			state[binding];
		document.querySelector(`[data-model='${binding}']`).value = state[binding];
	});
};

render();
