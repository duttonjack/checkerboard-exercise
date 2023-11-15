// Gradient Checkerboard
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
    var otherColor;
    if (color === 'yellow'){
      otherColor = 'blue';
    } else {
      otherColor = 'yellow';
    }
    var squareTile = document.createElement('div');
    squareTile.className = "square";
    squareTile.style.width = '12.5%';
    squareTile.style.height = '12.5%';
    squareTile.style.backgroundImage = "linear-gradient(to left bottom, "+ color +", "+ otherColor +")";
    return squareTile
}

function generateRow(startingColor){
    var otherColor;
    if (startingColor === 'yellow'){
      otherColor = 'blue';
    } else {
      otherColor = 'yellow';
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
            generateRow('blue');
        } else {
            generateRow('yellow');
        }
    }
}

var boardContainer = generateContainer();
generateBoard();
console.log(boardContainer);