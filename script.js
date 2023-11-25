const inputField = document.getElementById("input")
const del = document.getElementById("delete")
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
// const main = document.body.main
const main = document.getElementById("main")
function appendToInput(value){
    inputField.value += value;
}
alert("You can toggle between dark and light mode")

const display = document.getElementById("display")

del.addEventListener("click", ()=>{
    display.innerHTML = "";
    inputField.value = ""
})

function calculate() {
    const answer = eval(inputField.value)
    display.innerHTML= answer;
}
// dark.addEventListener("click", ()=>{
//     document.main.style.background ="fff"
// })

function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}
let isDarkMode = false;
if (isDarkMode) {
    enableDarkMode();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    isDarkMode = true;
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
    isDarkMode = false;
}
