/* random battery percentage (between 60 and 90) {return Math.random() * (max - min) + min} */
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

	/* 	display zero before hours*/	
	if(hh < 10) {hh = `0${hh}`}
	/* display time */
	textHour.innerHTML = `${hh}:`
	/* display zero before hours */
	if(mm < 10) {mm = `0${mm}`}
	/* display minutes */
	textMinutes.innerHTML = mm

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	/* displaying day,  day of the week and month */
	dateWeek.innerHTML = `${week[dayweek]},`
	dateDay.innerHTML = day
	dateMonth.innerHTML = `${months[month]}`
}
setInterval(clockText, 1000)

/* two-way data binding (between the form and iPhone) */
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
	message: "I love you!",
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
