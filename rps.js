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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = computerPlay();
        console.log(round(playerSelection,computerSelection))
    }
}