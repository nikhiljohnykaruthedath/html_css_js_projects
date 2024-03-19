(() => {
	let input = document.getElementById("input");
	let eye = document.getElementById("eye");

	eye.onclick = () => {
		if (input.type == "password") {
			input.type = "text";
			eye.src = "images/eye-open.png";
		} else {
			input.type = "password";
			eye.src = "images/eye-close.png";
		}
	};
})();
