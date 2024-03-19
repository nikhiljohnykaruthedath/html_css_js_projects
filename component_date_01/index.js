(() => {
	let date = document.getElementById("date");
	let day = document.getElementById("day");
	let month = document.getElementById("month");
	let year = document.getElementById("year");

	const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];
	let currentDate = new Date();

	date.textContent = currentDate.getDate();
	day.textContent = days[currentDate.getDay()];
	month.textContent = months[currentDate.getMonth()];
	year.textContent = currentDate.getFullYear();
})();
