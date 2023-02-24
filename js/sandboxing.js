//main app container
let main = document.getElementById('main');
let gameInfo = document.createElement('gameInfo');
gameInfo.setAttribute('class', "text-center");


//header - append to main
let gameName = document.createElement('gameName');
gameName.setAttribute('class', "h1")
gameName.textContent = "Tic-Tac-Toe"
main.appendChild(gameName);

//infoText - append to main
let infoText = document.createElement('infoText');
main.appendChild(playerInfo);

//gameBoard - append to main
let gameBoard = document.createElement('gameBoard');
gameBoard.setAttribute('class', "text-center", "max-width:200px");
main.appendChild(gameBoard);

let btnGroup1 = document.createElement('btnGroup1');
gameBoard.appendChild(btnGroup1)

let tile0 = document.createElement('tile0');
tile0.setAttribute("type", "button");
tile0.textContent = "&nbsp;&nbsp;&nbsp;"
btnGroup1.appendChild(tile0);

let tile1 = document.createElement('tile1');
tile1.setAttribute("type", "button");
btnGroup1.appendChild(tile1);

let tile2 = document.createElement('tile2');
tile2.setAttribute("type", "button");
btnGroup1.appendChild(tile2);

let btnGroup2 = document.createElement('btnGroup2');
gameBoard.appendChild(btnGroup2)

let tile3 = document.createElement('tile3');
tile3.setAttribute("type", "button");
btnGroup2.appendChild(tile3);

let tile4 = document.createElement('tile4');
tile4.setAttribute("type", "button");
btnGroup2.appendChild(tile4);

let tile5 = document.createElement('tile5');
tile5.setAttribute("type", "button");
btnGroup2.appendChild(tile5);

let btnGroup3 = document.createElement('btnGroup3');
gameBoard.appendChild(btnGroup3)

let tile6 = document.createElement('tile6');
tile6.setAttribute("type", "button");
btnGroup3.appendChild(tile6);

let tile7 = document.createElement('tile7');
tile7.setAttribute("type", "button");
btnGroup3.appendChild(tile7);

let tile8 = document.createElement('tile8');
tile8.setAttribute("type", "button");
btnGroup3.appendChild(tile8);








p1
p2


p1_symbol
p2_symbol

p1_moves
p2_moves

play_button




function generateRandomInteger(max) {
  return math.floor(math.random () * max) +1;
}
let random_num = generateRandomInteger(1);













//create states based on player turn
function state() {
  switch(turn) {
    case p1_0:

    case p2_0:

    case p1_1:

    case p2_1:

    case p1_2:

    case p2_2:

    case p1_3:

    case p2_3:

    case p1_4:

  }
}


//create state for who's turn it is

