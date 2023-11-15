// Random Colors Checkerboard

// Helper Functions
function generateRgbValue(){
    return Math.floor(Math.random() * (255 - 0)) + 0
}

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

function generateSquare(){
    var squareTile = document.createElement('div');
    squareTile.className = "square";
    squareTile.style.width = '12.5%';
    squareTile.style.height = '12.5%';
    squareTile.style.backgroundColor = 'rgb(' + generateRgbValue() + ',' + generateRgbValue() + ',' + generateRgbValue() + ')';
    return squareTile
}

function generateBoard(){
    for (let i =0; i < 64; i++){
        boardContainer.appendChild(generateSquare())
    }
}

// Main Block
var boardContainer = generateContainer();
generateBoard();