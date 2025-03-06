let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choise");
let msg=document.querySelector(".msg");
let msg_container=document.querySelector(".msg-container");
let your_score=document.querySelector(".your-score");
let comp_score=document.querySelector(".comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const usrchoice=choice.getAttribute("id");
        game(usrchoice);
    })
})
const count=(usrwin)=>{
    if(usrwin===true)
        your_score.innerText++;
    else
        comp_score.innerText++;
}
const show_winner=(usrwin,usrchoice,compchoice)=>{
    if(usrwin===true){
        msg.innerText=(`You win! Your ${usrchoice} beats ${compchoice}`);
        msg.style.backgroundColor="green";
    }    
    else{
        msg.innerText=(`You Lose! ${compchoice} beats your ${usrchoice}`);
        msg.style.backgroundColor="red";
    }
}
const game=(usrchoice)=>{
    const compchoice=gencompchoice();
    console.log("user choose",usrchoice);
    console.log("comp choose",compchoice);
    if(usrchoice===compchoice){
        //draw
        msg.innerText=("Draw! Play Again");
        msg.style.backgroundColor="blue";
    }
    else{
        let usrwin=true;
        if(usrchoice==="rock"){
            if(compchoice==="paper"){
                usrwin=false;
            }
            else{
                usrwin=true;
            }
        }
        else if(usrchoice==="paper"){
            if(compchoice==="rock"){
                usrwin=true;
            }
            else{
                usrwin=false;
            }
        }
        else{
            if(compchoice==="rock"){
                usrwin=false;
            }
            else{
                usrwin=true;
            }
        }
        show_winner(usrwin,usrchoice,compchoice);
        count(usrwin);
    }
}
