let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetbutton");
let newGameButton = document.querySelector("#newbutton")
let msgContainer = document.querySelector(".msg-container")
let winnerName = document.querySelector("#msg");
let  turn = 0;
const  winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    // resetButton.style.backgroundColor = "white";
    // resetButton.style.color = "black";
    turn = 0;
    enableButtons();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click" , () => {
        if(turn%2===0){ 
            box.innerText = "X";
            turn++;
        }
        else{
            box.innerText = "O";
            box.style.color = "#0000FF";
            turn++;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const winner = (ourWinner)=>{
        winnerName.innerText = `Congratulation, Winner is ${ourWinner}`;
        msgContainer.classList.remove("hide");
        disableButtons();
};

const checkWinner = ()=>{
    for(let pattern of  winningPattern){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if(a != "" && b != "" && c != ""){
            if(a === b && b === c){
                winner(a);
            }
        }
    }
};

resetButton.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);