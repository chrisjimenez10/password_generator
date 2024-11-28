// Capture Elements
const themeBtn = document.getElementById("themeBtn");



// --------------------------------------------------------------------------------------- \\

// Initial Theme
let theme = localStorage.getItem("theme") || "dark";
localStorage.setItem("theme", theme);

// Function to apply theme + Invoke 
function applyTheme(){
    document.documentElement.setAttribute("data-theme", theme);
};
applyTheme();

// Theme toggle event listener
themeBtn.addEventListener("click", ()=>{
    
    if(localStorage.getItem("theme") === "dark"){
        theme = "light";
    }else{
        theme = "dark";
    }

    applyTheme();
    localStorage.setItem("theme", theme);

    console.log("clicked!");
});
