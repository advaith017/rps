function computerPlay()
{
    let options=['Rock','Paper','Scissors']
    let choice=options[Math.floor(Math.random()*3)]
    return choice
}


function round(playerSelection,computerSelection)
{
    let result;
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase())
        result=`Both played ${computerSelection}. Try again! `
    else if(playerSelection.toLowerCase()==="rock")
        {
            if(computerSelection==="Scissors")
                result="Rock beats Scissors. You Win!"
            else    
                result ="Paper beats Rock.You Lose!"
        }
    else if(playerSelection.toLowerCase()==="paper")
    {
        if(computerSelection==="Scissors")
            result="Scissors beats Paper.You Lose!"
        else    
            result ="Paper beats Rock.You Win!"
    }
    else
    {
        if(computerSelection==="Rock")
        result="Rock beats Scissors. You Lose!"
        else    
            result ="Scissors beats Paper.You Win!"
    }
    return result
}

/* const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */

function game(){
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = computerPlay();
        console.log(round(playerSelection,computerSelection))
    }
}

const show = document.querySelector('.show')
const buttons = document.querySelectorAll('button');
console.log('gomma')
const compChoice = document.getElementById('compChoice')
const result = document.createElement('h1')
show.appendChild(result)
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    const computerSelection = computerPlay();
    compChoice.textContent = computerSelection;
    result.textContent=(round(button.value,computerSelection))
  });
});




