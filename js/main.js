

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
gameBoard.appendChild(row1);

//first tile in row 1
let tile0 = document.createElement('button');
tile0.setAttribute('class', "btn-outline", "col-2");
tile0.setAttribute('type', "button");
tile0.textContent = "\uF584";
row1.appendChild(tile0);

//second tile in row 1
let tile1 = document.createElement('button');
tile1.setAttribute('class', "btn-outline", "col-2");
tile1.setAttribute('type', "button");
tile1.innerHTML = "O";
row1.appendChild(tile1);

//third tile in row 1
let tile2 = document.createElement('button');
tile2.setAttribute('class', "btn-outline", "col-2");
tile2.setAttribute('type', "button");
tile2.innerHTML = "O";
row1.appendChild(tile2);

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

let blankImg = document.getElementById('img');
blankImg.setAttribute('src', "img/Square_-_black_simple.svg.png");


let p1_symbol = "\uF659";
let p2_symbol = "\uF28A";
let currentPlayer = "p1";

let tiles = document.getElementsByTagName('button');
for(let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', function() {
    if (currentPlayer === p1) {
      document.getElementById(tiles).innerHTML = "p1_symbol";
      tiles.disabled = true;
    }  
    else if (currentPlayer === p2) {
      document.getElementById(tiles).innerHTML = "p2_symbol";
      tiles.disabled = true;
    }
    else {document.getElementById(tiles).innerHTML = "blankImg";
    }
  });
}

  






// tile0.classList.add(btn);
// tile0.classList.add(btn-outline-info);
// tile0.setAttribute('type', 'button');


// let tile1 = document.createElement('tile1');
// tile1.setAttribute("type", "button");
// btnGroup1.appendChild(tile1);

// let tile2 = document.createElement('tile2');
// tile2.setAttribute("type", "button");
// btnGroup1.appendChild(tile2);

// let btnGroup2 = document.createElement('btnGroup2');
// gameBoard.appendChild(btnGroup2);

// let tile3 = document.createElement('tile3');
// tile3.setAttribute("type", "button");
// btnGroup2.appendChild(tile3);

// let tile4 = document.createElement('tile4');
// tile4.setAttribute("type", "button");
// btnGroup2.appendChild(tile4);

// let tile5 = document.createElement('tile5');
// tile5.setAttribute("type", "button");
// btnGroup2.appendChild(tile5);

// let btnGroup3 = document.createElement('btnGroup3');
// gameBoard.appendChild(btnGroup3);

// let tile6 = document.createElement('tile6');
// tile6.setAttribute("type", "button");
// btnGroup3.appendChild(tile6);

// let tile7 = document.createElement('tile7');
// tile7.setAttribute("type", "button");
// btnGroup3.appendChild(tile7);

// let tile8 = document.createElement('tile8');
// tile8.setAttribute("type", "button");
// btnGroup3.appendChild(tile8);




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



function init() {
  console.log("i got here");
}