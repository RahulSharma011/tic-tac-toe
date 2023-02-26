console.log("welocme to tic tac toe");
let music = new Audio("old_alarm_clock_ticking-25966.mp3")
let audioTurn = new Audio("mixkit-plastic-bubble-click-1124.wav")
let gameover = new Audio("mixkit-arcade-space-shooter-dead-notification-272.wav")
let turn ="X";
let gameovers = false;

///Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"? "0":"X"
}
//Function to cheak Win
const cheakWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameovers =true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "15vh"
           }
    })
}

//Game logic
music.play();
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            cheakWin();
            if(!gameovers){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//add inclick listner to reset buton

reset.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn ="X";
    gameovers =false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0vh"
})
