var boardContainer = document.createElement('div');
boardContainer.className = "board";
boardContainer.style.display = 'flex';
boardContainer.style.flexWrap = 'wrap';
boardContainer.style.width = '800px';
boardContainer.style.height = '800px';

function generateSquare(color){
    var squareTile = document.createElement('div');
    squareTile.className = "square";
    squareTile.style.width = '12.5%';
    squareTile.style.height = '12.5%';
    squareTile.style.backgroundColor = color;
    return squareTile
}
    

document.body.appendChild(boardContainer);
// 
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));

boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));

boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));

boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));

boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));

boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));

boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));

boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));
boardContainer.appendChild(generateSquare('black'));
boardContainer.appendChild(generateSquare('red'));




console.log(boardContainer);
console.log(squareTile);