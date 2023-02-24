# PSEUDOCODE

## VARIABLES

- **gameName** - header with game name

- **infoText** - text that tells player info 
  - Enter player names
  - Player name_x has been selected to go first
  - p1_name select your symbol
  - p2_name select your symbol (or p2_name your symbol is)
  - p1_name it is your turn.
  - p2_name it is your turn.
- **name_a** - input for name of player a - var name_a = prompt("Enter player name");
- **name_b** - input for name of player b
- **p1_name** - name of player 1 (either name_a or name_b depending on random number assignment)
- **p2_name** - name of player 2 (other name option depending on what is assigned to p1_name)
- **random_num** - random number assign to name_a
  - returns random number either 1 or 2 (assigns 0 & 1 so we have to add 1 to make 1 or 2)  
    - *function generateRandomInteger(max) {return math.floor(math.random()* max) + 1;};*
    - *let random_num = generateRandomInteger(1);*
- **symbols** - array of symbols for player to choose from
  - let symbols = [X, O]
- **p1_symbol** - selected from symbols and  removes from the symbols array
- **filtered_symbols** - new array with p1_symbol filtered out. 
  - *let filtered_symbols = symbols.filter(function(value, index, arr){return value != p1_symbol}*
- **p2_symbol** - selected from the filtered_symbols array that doesn’t contain the p1_symbol
- **p1_moves** - array to hold player one’s moves
- **p2_moves** - array to hold payer two’s moves
- **play_button** - button to load empty game
- **p1_moves** - array to hold which tiles player one clicked
- **p2_moves** - array to hold which tiles player two clicked
- **p1_win** - alert(p1_name + " is the winner!!");
  - if p1_moves includes [0,1,2] || [3,4,5] || [6,7,8] || [0,3,6] || [1,4,7] || [2,5,8] || [0,4,8] || [2,4,6];
  - then display p1_name wins
  - else move to player 2 turn
- **p2_win** - alert(p2_name + " is the winner!!");
  - if p2_moves includes [0,1,2] || [3,4,5] || [6,7,8] || [0,3,6] || [1,4,7] || [2,5,8] || [0,4,8] || [2,4,6];
  - then display p1_name wins
  - else move to player 2 turn
- **catGame** - alert("The cat won this game! (=^･ｪ･^=) Better luck next time...");
- TILES
  - **tile0**
  - **tile1**
  - **tile2**
  - **tile3**
  - **tile4**
  - **tile5**
  - **tile6**
  - **tile7**
  - **tile8**

  let gameBoard = {
    tile0: (),
    tile1: (),
    tile2: (),
    tile3: (),
    tile4: (),
    tile5: (),
    tile6: (),
    tile7: (),
    tile8: (),
  };
  
