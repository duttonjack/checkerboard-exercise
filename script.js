// Basic Red & Black Checkerboard
function generateContainer(){
    var boardContainer = document.createElement('div');
    boardContainer.className = "board";
    boardContainer.style.display = 'flex';
    boardContainer.style.flexWrap = 'wrap';
    boardContainer.style.width = '800px';
    boardContainer.style.height = '800px';
    document.body.appendChild(boardContainer);
    return boardContainer
}

function generateSquare(color){
    var squareTile = document.createElement('div');
    squareTile.className = "square";
    squareTile.style.width = '12.5%';
    squareTile.style.height = '12.5%';
    squareTile.style.backgroundColor = color;
    return squareTile
}

function generateRow(startingColor){
    var otherColor;
    if (startingColor === 'red'){
      otherColor = 'black';
    } else {
      otherColor = 'red';
    }
    for (let i = 0; i < 8; i++){
        if (i % 2 === 0){
            boardContainer.appendChild(generateSquare(startingColor));
        } else {
            boardContainer.appendChild(generateSquare(otherColor));
        }
    }
}

function generateBoard(){
    for (let i =0; i < 8; i++){
        if (i % 2 ==0){
            generateRow('red');
        } else {
            generateRow('black');
        }
    }
}

var boardContainer = generateContainer();
generateBoard();
