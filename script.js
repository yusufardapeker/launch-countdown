const countdownElements = document.querySelectorAll(".countdown-number");

const [daysElement, hoursElement, minutesElement, secondsElement] = countdownElements;

const startingDays = 14;
let time = startingDays * 24 * 60 * 60;

const updateCountDown = () => {
	const days = Math.floor(time / 60 / 60 / 24);
	const hours = Math.floor((time / 60 / 60) % 24);
	const minutes = Math.floor((time / 60) % 60);
	const seconds = time % 60;

	days < 10 ? (daysElement.innerText = `0${days}`) : (daysElement.innerText = days);
	hours < 10 ? (hoursElement.innerText = `0${hours}`) : (hoursElement.innerText = hours);
	minutes < 10 ? (minutesElement.innerText = `0${minutes}`) : (minutesElement.innerText = minutes);
	seconds < 10 ? (secondsElement.innerText = `0${seconds}`) : (secondsElement.innerText = seconds);

	time--;

	if (time < 0) {
		alert("Here We Go!");
		clearInterval(countDownInterval);
	}
};

const countDownInterval = setInterval(updateCountDown, 1000);
