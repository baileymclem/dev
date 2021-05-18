//Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
	document.documentElement.setAttribute("data-theme", "light");

	//Get button switcher
	var themeSwitcher = document.getElementById("theme-switcher");

	//When button is clicked
	themeSwitcher.onclick = function () {
		this.classList.toggle('active');
		//Get the current selected theme, on the first run it should be 'light'
		var currentTheme = document.documentElement.getAttribute("data-theme");

		//Switch between 'light' and 'dark'
		var switchToTheme = currentTheme === "dark" ? "light" : "dark";

		//Set current theme to the new one
		document.documentElement.setAttribute("data-theme", switchToTheme);

		const favicon = document.getElementById("favicon");

		function sparkles() {
			favicon.setAttribute(
				"href",
				"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2275%22>✨</text></svg>"
			);
		}

		function moon() {
			favicon.setAttribute(
				"href",
				"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2275%22>🌙</text></svg>"
			);
		}

		if (currentTheme === "dark") {
			sparkles();
		} else if (currentTheme === "light") {
			moon();
		}
	};
});