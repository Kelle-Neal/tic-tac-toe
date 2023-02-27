
// var p1_name = prompt("Enter First Player's Name","");
// var p2_name = prompt("Enter Second Player's Name","");

var p1_name = "Abbie";
var p2_name = "Penny";

console.log(p1_name);
console.log(p2_name);

//main app container
let main = document.getElementById('main');
main.setAttribute('class', "container bg-info my-5");

//header - append to main
let gameName = document.createElement('div');
gameName.setAttribute('class', "h1 text-center");
gameName.textContent = "Tic-Tac-Toe";
  console.log(gameName.textContent);
main.appendChild(gameName);

//infoText - append to main
let infoText = document.createElement('div');
infoText.setAttribute('class', "row text-center justify-content-center mb-2");
infoText.textContent = "Let's play!";
  console.log(infoText.textContent);
main.appendChild(infoText);

//gameBoard - append to main
let gameBoard = document.createElement('div');
gameBoard.setAttribute('class', "container justify-content-center");
main.appendChild(gameBoard);

//first row of buttons
let row1 = document.createElement('btn-group');
row1.setAttribute('role', "group");
row1.setAttribute('class', "row justify-content-center");
gameBoard.appendChild(row1);

  //first tile in row 1
  let tile0 = document.createElement('button');
  // tile0.setAttribute('id', "tile0")
  tile0.style.height = '50px';
  tile0.style.width = '50px';
  tile0.setAttribute = ('alt', "row1,box1");
  row1.appendChild(tile0);

  //second tile in row 1
  let tile1 = document.createElement('button');
  tile1.style.height = '50px';
  tile1.style.width= '50px';
  row1.appendChild(tile1);

  //third tile in row 1
  let tile2 = document.createElement('button');
  tile2.style.height = '50px';
  tile2.style.width= '50px';
  row1.appendChild(tile2);


//second row of buttons
let row2 = document.createElement('btn-group');
row2.setAttribute('class', "row justify-content-center");
row2.setAttribute('role', "group");
gameBoard.appendChild(row2);

  //first tile in row 2
  let tile3 = document.createElement('button');
  tile3.style.height = '50px';
  tile3.style.width= '50px';
  row2.appendChild(tile3);
 
  //second tile in row 2
  let tile4 = document.createElement('button');
  tile4.style.height = '50px';
  tile4.style.width= '50px';
  row2.appendChild(tile4);

  //third tile in row 2
  let tile5 = document.createElement('button');
  tile5.style.height = '50px';
  tile5.style.width= '50px';
  row2.appendChild(tile5);

  //third row of buttons
let row3 = document.createElement('btn-group');
row3.setAttribute('class', "row justify-content-center");
row3.setAttribute('role', "group");
gameBoard.appendChild(row3);

  //first tile in row 3
  let tile6 = document.createElement('button');
  tile6.style.height = '50px';
  tile6.style.width= '50px';
  row3.appendChild(tile6);
 
  //second tile in row 3
  let tile7 = document.createElement('button');
  tile7.style.height = '50px';
  tile7.style.width= '50px';
  row3.appendChild(tile7);

  //third tile in row 3
  let tile8 = document.createElement('button');
  tile8.style.height = '50px';
  tile8.style.width= '50px';
  row3.appendChild(tile8);

let endInfo = document.createElement('div');
endInfo.setAttribute('class', "container text-center");
main.appendChild(endInfo);


//Restart Button
let restartGame = document.createElement('div');
restartGame.setAttribute('class', "btn btn-light text-center my-5 align-middle");
restartGame.innerText = "Restart Game";
restartGame.onclick = resetGame;
endInfo.appendChild(restartGame);


//Player selected symbols
// let p1_symbol = '\uF659';
// let p2_symbol = '\uF28A';

let currentPlayer = "p1";

// let p1_name = document.createElement("input");
// let p2_name = document.createElement("input");

let p1_moves = [];
// for (let j = 0; j < p1_moves.length; j++) {
// }


let p2_moves = [];
// for (let k = 0; k < p1_moves.length; k++) {
// }

// let p1_win = winConditions[l].includes(p1_moves);
// let p2_win = winConditions[l].includes(p2_moves);

const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function checkWin(){
  for (let l = 0; l < winConditions.length; l++) {
    if (winConditions[l].includes(p1_moves)) {
    infoText.textContent = p1_name + "wins!";
    }
    else if (winConditions[l].includes(p2_moves)) {
    infoText.textContent = p2_name + "wins!";
    }
    else {
    infoText.textContent = "The cat won this game! (=^･ｪ･^=)" + "\n" + "Better luck next time...";
      console.log(infoText)
  }
}}


  

// //this lets me click on tile0 and get an X
// let tiles= document.getElementsByTagName('button');
// for (let i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener('click', (myMove));
// }
//   function myMove() {  
//   document.getElementsByTagName("button")[0].innerHTML = "X";
// }

//this works!
let tiles= document.getElementsByTagName('button');
// const index = [...tiles.parentElement.children].indexOf(tiles);
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function() {
    if (currentPlayer == "p1") {
      document.getElementsByTagName("button")[i].innerHTML = "X";
      p1_moves.push(i)[i];
      currentPlayer = "p2";
      infoText.textContent = "It's your turn " + p2_name + ".";
      checkWin();
      console.log("Player One's Moves " + p1_moves);
    }  
    else if (currentPlayer == "p2") {
      document.getElementsByTagName("button")[i].innerHTML = "O";
      currentPlayer = "p1";
      infoText.textContent = "It's your turn " + p1_name + ".";
      p2_moves.push(i)[i];
      
      console.log("Player Two's Moves " + p2_moves);
    }  
    else {
      document.getElementsByTagName("button")[i].innerHTML = " ";
    }
}, {once: true});
} 

// console.log(tiles);







// function p1_win() {
//   if (p1_moves == winConditions);
//   infoText.textContent = "Player 1 wins!";
// }

// function p2_win() {
//   if (p2_moves == winConditions);
//   infoText.textContent = "Player 1 wins!";
// }


function resetGame() {
  document.getElementsByTagName('button').innerHTML = " ";
  infoText.textContent = "Let's play again!";
}









// function init() {
//   console.log("i got here");
// }