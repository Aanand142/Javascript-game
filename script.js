
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
    var str1= "user";
    var str2= " computer";
    var result= convert(user)+ str1.sub().fontsize(5)+" beats "+ convert(computer)+ str2.sub().fontsize(5);
    result_div.innerHTML= result;
    

}


function lose(user, computer){
    
    computerscore++;
    computerscore_span.innerHTML=computerscore;
    var str1= "user";
    var str2= " computer";
    var result= convert(computer)+ str2.sub().fontsize(5)+" beats "+ convert(user)+ str1.sub().fontsize(5);
    result_div.innerHTML= result;
        
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
