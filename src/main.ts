// Capture Elements
const themeBtn: HTMLElement = document.getElementById("themeBtn");
const form: HTMLFormElement = document.querySelector("form");
const user_letters: any = document.getElementById("letters");
const user_numbers: any = document.getElementById("numbers");
const user_symbols: any = document.getElementById("symbols");
// --------------------------------------------------------------------------------------- \\

// Initial Theme
let theme: string = localStorage.getItem("theme") || "dark";
localStorage.setItem("theme", theme);

// Function to apply theme + Invoke 
function applyTheme(): void {
    document.documentElement.setAttribute("data-theme", theme);
};
applyTheme();

// Theme toggle event listener
themeBtn.addEventListener("click", (): void => {
    
    if(localStorage.getItem("theme") === "dark"){
        theme = "light";
    }else{
        theme = "dark";
    }

    applyTheme();
    localStorage.setItem("theme", theme);

    console.log("clicked!");
});

// Limit number of input digits
user_letters.addEventListener("input", (e): void => {
    const value = e.target.value;
    const regex = /^\d{0,2}$/;

    if (!regex.test(value)) {
        e.target.value = value.slice(0, 2);
      }
})

// Password Generation Logic
const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols: string[] = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

const quantity_letters: number = 0;
const quantity_numbers: number = 0;
const quantity_symbols: number = 0;

form.addEventListener("submit", (e): void =>{
    e.preventDefault();


})