const moves=["rock","paper","scissors"];
let humans=0;
let bots=0;
let sc=document.querySelectorAll(".counter div");
let res=document.getElementById("result");
document.getElementById("rock").addEventListener("click", ()=>gameplay("rock"));
document.getElementById("paper").addEventListener("click", ()=>gameplay("paper"));
document.getElementById("scissors").addEventListener("click", ()=>gameplay("scissors"));
function compchoice(){
    let choice=Math.floor(Math.random()*moves.length);
    return moves[choice];
}
function gameplay(playerchoice){
let computer=compchoice();
let result="";
if(computer==playerchoice){
    result="It's a draw!";
}
else if(
      (playerchoice=='paper')&&(computer=='rock') ||
      (playerchoice=='rock')&&(computer=='scissors') ||
      (playerchoice=='scissors')&&(computer=='paper')
){
    result="You Win this round";
    humans++;
}
else{
    result="You Loose this round";
    bots++;
}
end();
updateresult(result);
updatescore();

}
function end(){
    if(humans==5||bots==5){
        let finalmsg= (humans==5)?"Yay you won the game!":"Damn lost to a bot" ;
        popup(finalmsg);
    }
}
function updatescore(){
sc[0].innerHTML=`A SCORE:<br>${humans}`;
sc[1].innerHTML=`B SCORE:<br>${bots}`;
}
function updateresult(result){
    res.innerHTML=`<b>This Round</b><br>${result}</br>`;
    setTimeout(()=>{
        res.innerHTML=`<b>current score</b><br></br>`;
    },750);
    
}

function popup(finalmsg){
    let a= document.getElementById("popup");
    a.innerHTML=`<b>${finalmsg}</b><br></br><small>click here to close</small>`;
    a.style.display="flex";
    a.onclick=()=>{
        a.style.display="none";
        reset();
    };
    
}
function reset(){
    humans=0;
    bots=0;
    updatescore();
    a.style.display="none";
}
