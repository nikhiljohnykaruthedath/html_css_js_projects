(() => {
	let listItems = document.getElementsByClassName("list-item");
	let leftPanel = document.getElementById("left-panel");
	let rightPanel = document.getElementById("right-panel");

	for (listItem of listItems) {
		listItem.addEventListener("dragstart", (e) => {
			console.log("here");
			let selected = e.target;

			rightPanel.addEventListener("dragover", (e) => {
				e.preventDefault();
			});
			rightPanel.addEventListener("drop", (e) => {
				rightPanel.appendChild(selected);
				selected = null;
			});

			leftPanel.addEventListener("dragover", (e) => {
				e.preventDefault();
			});
			leftPanel.addEventListener("drop", (e) => {
				leftPanel.appendChild(selected);
				selected = null;
			});
		});
	}
})();
