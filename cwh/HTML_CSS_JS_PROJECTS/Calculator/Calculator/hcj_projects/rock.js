const btns=document.querySelectorAll("button")
const result = document.getElementById("result");
const playerScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let ps=0   //initialise player and comp score
let cs=0
btns.forEach(button => {
    button.addEventListener('click',()=>{
        const Result=play(button.id,compplay())  //we are calculating a Result for each button pressed and then displaying it on screen
        result.textContent=Result    //since we are changing the conteent of text written in para everytime
        //search diff between innertext innerhtml and text content
    });
});
function compplay() {
    options=["rock","scissors","paper"]
    randomc=Math.floor(Math.random()*options.length)   //selecting random choice for computer
    return options[randomc]
}
function play(playerselection,compselection){
    if(playerselection===compselection) return "It's a tie!";
    else if((playerselection==="rock" && compselection==="scissors") || (playerselection === "paper" && compselection === "rock") ||
    (playerselection === "scissors" && compselection === "paper")){
         ps++;
         playerScore.textContent=ps;  //if player wins then his score increased
         return "You win " + playerselection + " beats "+compselection
    }
    else{
        cs++;
        computerScore.textContent=cs;   //else comps score increased
         return "You loose " + compselection + " beats "+playerselection

    }
}
