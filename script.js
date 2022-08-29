
let turn = "X";
let isgameOver = false;

//Funtion To Change The Turn

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
//Function To Check For A Win

const checkWin = ()=>{
   let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4 ,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =boxtext[e[0]].innerText + "  Won 👑 "
            isgameOver = true;
            document.querySelector('.imgBox').getElementsByTagName( "img")[0].style.width = "75px"
        }
    })
}
//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
           if(!isgameOver) {
           document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
           } 
        }
    })
})
//Add OnClick Listener To Reset Button

 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameOver = false
    document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
    document.querySelector('.imgBox').getElementsByTagName( "img")[0].style.width = "0px"
})
