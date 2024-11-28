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
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
//# sourceMappingURL=main.js.map