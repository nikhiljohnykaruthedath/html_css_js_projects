(() => {
	let d = document.getElementById("d");
	let hrs = document.getElementById("hrs");
	let mins = document.getElementById("mins");
	let secs = document.getElementById("secs");

	let countDownDate = new Date("Aug 20, 2024 00:00:00").getTime();
	let interval = setInterval(() => {
		let now = new Date().getTime();
		let difference = countDownDate - now;

		let days = Math.floor(difference / (1000 * 60 * 60 * 24));
		let hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((difference % (1000 * 60)) / 1000);

		d.textContent = (days < "10" ? "0" : "") + days;
		hrs.textContent = (hours < "10" ? "0" : "") + hours;
		mins.textContent = (minutes < "10" ? "0" : "") + minutes;
		secs.textContent = (seconds < "10" ? "0" : "") + seconds;

		if (difference == 0) {
			clearInterval(interval);

			d.textContent = "00";
			hrs.textContent = "00";
			mins.textContent = "00";
			secs.textContent = "00";
		}
	}, 1000);
})();
