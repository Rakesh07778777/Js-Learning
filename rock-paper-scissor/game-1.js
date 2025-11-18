function computerMove(){
    const randomNumber = Math.floor(Math.random() * 3)
    let computer = ''
    switch (randomNumber){
        case 0: 
        computer = 'Rock'
        break
        case 1:
        computer = 'Paper'
        break
        case 2:
        computer = 'Scissor'
        break
    }

    return computer

}


function playerMove(move){
    let computer = computerMove()
    let playerChoose = ''

    if(move === 'Rock'){
        if(computer === 'Scissor'){
            playerChoose = 'Win'
        }else if(computer === 'Rock'){
            playerChoose = 'Tie'
        }else{
            playerChoose = 'Loose'
        }
    }
    
    
    else if(move === 'Paper'){
        if(computer === 'Rock'){
            playerChoose = 'Win'
        }else if(computer === 'Paper'){
            playerChoose = 'Tie'
        }else{
            playerChoose = 'Loose'
        }
    }
    
    
    
    else if(move === 'Scissor'){
        if(computer === 'Paper'){
            playerChoose = 'Win'
        }else if(computer === 'Scissor'){
            playerChoose = 'Tie'
        }else{
            playerChoose = 'Loose'
        }
    }



    let resultShow = document.querySelector('.result-texts')
    resultShow.innerText = playerChoose
}


const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')

rockBtn.addEventListener('click' ,() => {
    playerMove('Rock')
})
paperBtn.addEventListener('click' ,() => {
    playerMove('Paper')
})
scissorBtn.addEventListener('click' ,() => {
    playerMove('Scissor')
})


