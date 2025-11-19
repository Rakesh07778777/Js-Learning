const inputElm = document.getElementById('input')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const display = document.getElementById('display')

let remaining = 0
let intervalId = null;

function timerStart(){
    let value = parseInt(inputElm.value , 10)
    remaining = value
    display.innerText = remaining

    if(isNaN(value) || value <= 0) return ;
    if(intervalId) return clearInterval(intervalId)

    intervalId = setInterval(() => {
        remaining --
        display.innerText = remaining

        if(remaining <= 0) {
        clearInterval(intervalId)
        intervalId = null
        display.innerText = 'Done'
        }
    } ,1000)
}

start.addEventListener('click' , () => {
    timerStart()
})

stop.addEventListener('click' , () => {
    clearInterval(intervalId)
    intervalId = null
    display.innerText = ''
})