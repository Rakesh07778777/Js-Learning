const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId 
    function changeColor(){
    document.body.style.backgroundColor = randomColor()

    }
const startChanginColor = function (){
    intervalId = setInterval(changeColor , 1000)
}

const stopChanginColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start')
.addEventListener('click' , startChanginColor)

document.getElementById('stop')
.addEventListener('click' , stopChanginColor)

console.log(randomColor())