const inputField = document.getElementById("input")
const del = document.getElementById("delete")
const dark = document.getElementById("dark")
const main = document.getElementById("main")
function appendToInput(value){
    inputField.value += value;
}

const display = document.getElementById("display")

del.addEventListener("click", ()=>{
    display.innerHTML = "";
    inputField.value = ""
})

function calculate() {
    const answer = eval(inputField.value)
    display.innerHTML= answer;
}
dark.addEventListener("click", ()=>{
    document.main.style.background ="fff"
})

function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}