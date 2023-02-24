

//main app container
let main = document.getElementById('main');
main.setAttribute('class', "container");

//header - append to main
let gameName = document.createElement('row');
gameName.setAttribute('class', "h1", "text-center");
gameName.textContent = "Tic-Tac-Toe";
  console.log(gameName.textContent);
main.appendChild(gameName);

//infoText - append to main
let infoText = document.createElement('row');
infoText.setAttribute('class', "row", "callout-info", "text-center");
infoText.textContent = "Do you want to play a game?";
  console.log(infoText.textContent);
main.appendChild(infoText);

//gameBoard - append to main
let gameBoard = document.createElement('container');
gameBoard.setAttribute('class', "container", "text-center");
main.appendChild(gameBoard);

//first row of buttons
let row1 = document.createElement('btn-group');
row1.setAttribute('role', "group");
row1.setAttribute('class', "row");
gameBoard.appendChild(row1);

  //first tile in row 1
  let tile0 = document.createElement('button');
  tile0.style.height = '50px';
  tile0.style.width = '50px';
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
row2.setAttribute('class', "row");
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
row3.setAttribute('class', "row");
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

let p1 = document.createElement('p1');
let p2 = document.createElement('p2');

let p1_symbol = '\uF659';
let p2_symbol = '\uF28A';

let currentPlayer = "p1";
  console.log(currentPlayer);

// //this lets me click on tile0 and get an X
// let tiles= document.getElementsByTagName('button');
// for (let i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener('click', (myMove));
// }
//   function myMove() {  
//   document.getElementsByTagName("button")[0].innerHTML = "X";
// }

//this works but doesn't retain the X & O's
let tiles= document.getElementsByTagName('button');
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function() {
    if (currentPlayer == "p1") {
      document.getElementsByTagName("button")[i].innerHTML = "X";
      document.getElementsByTagName("button")[i].disabled = true;
    }  
    else if (currentPlayer == "p2") {
      (document.getElementsByTagName("button")[i].innerHTML = "O");
    }  
    else {
      (document.getElementsByTagName("button")[i].innerHTML = " ");
    }
});
}


// let p1_moves = new Array();
// let p2_moves = new Array();












//create states based on player turn
// let state() {
//   switch(turn) {
//     case p1_0:

//     case p2_0:

//     case p1_1:

//     case p2_1:

//     case p1_2:

//     case p2_2:

//     case p1_3:

//     case p2_3:

//     case p1_4:

//   }
// }



// function init() {
//   console.log("i got here");
// }

