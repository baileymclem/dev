//Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
	document.documentElement.setAttribute("data-theme", "dark");

	//Get button switcher
	var themeSwitcher = document.getElementById("theme-switcher");

	//When button is clicked
	themeSwitcher.onclick = function () {
		//Get the current selected theme, on the first run it should be 'light'
		var currentTheme = document.documentElement.getAttribute("data-theme");

		//Switch between 'light' and 'dark'
		var switchToTheme = currentTheme === "dark" ? "light" : "dark";

		//Set current theme to the new one
		document.documentElement.setAttribute("data-theme", switchToTheme);
	};
});