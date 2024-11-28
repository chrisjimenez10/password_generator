// Capture Elements
var themeBtn = document.getElementById("themeBtn");
// --------------------------------------------------------------------------------------- \\
// Initial Theme
var theme = localStorage.getItem("theme") || "dark";
localStorage.setItem("theme", theme);
// Function to apply theme + Invoke 
function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
}
;
applyTheme();
// Theme toggle event listener
themeBtn.addEventListener("click", function () {
    if (localStorage.getItem("theme") === "dark") {
        theme = "light";
    }
    else {
        theme = "dark";
    }
    applyTheme();
    localStorage.setItem("theme", theme);
    console.log("clicked!");
});
// Password Generation Logic
//# sourceMappingURL=main.js.map