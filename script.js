
var userscore=0;
var computerscore=0;
var userscore_span= document.getElementById("user-score");
var computerscore_span= document.getElementById("computer-score");
const scoreboard_div= document.querySelector(".score-board");
const result_div= document.querySelector(".result");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");


function convert(letter)
{
    if(letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    return "scissors";

}

function win(user, computer){
      
    userscore++;
    userscore_span.innerHTML=userscore;
    const small_user="user".fontsize(3).sup ;
    const small_computer="computer".fontsize(3).sup ;
    result_div.innerHTML=convert(user)+" beats "+convert(computer)+" You won ";  
    

}


function lose(user, computer){
    
    computerscore++;
    computerscore_span.innerHTML=computerscore;
    result_div.innerHTML=convert(computer)+" beats "+ convert(user)+" You lost ";
        
}
    

function draw(){

    result_div.innerHTML="ITS A DRAW PHEWW!!";
    }

function getcomputerchoice(){
    const choices= ['r', 'p', 's'];
    const randomnumber= Math.floor(Math.random()*3);
    return choices[randomnumber];


}
function game(userchoice){
    const computerchoice= getcomputerchoice();
    switch(userchoice + computerchoice)
    {
        case "rs":
        case "pr":
        case "sp":
        win(userchoice, computerchoice);

        break;

        case "rp":
        case "sr":
        case "ps":
        lose(userchoice, computerchoice);
        break;

        case "ss":
        case "rr":
        case "pp":
        draw();
        break;



    }
}





rock_div.addEventListener('click', function(){

 game("r");
 })


paper_div.addEventListener('click', function(){
    
    game("p");
        
    })

    
scissors_div.addEventListener('click', function(){
    
    game("s");
        
    })
