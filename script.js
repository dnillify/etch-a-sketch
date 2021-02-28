const grid = document.getElementById("grid");
let numSquares = 0;
let numRowsAndCols = 0;
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let gridWidth = parseInt(htmlStyles.getPropertyValue("--gridWidth"));

startGrid();

function populateGrid() {
    for (let i = 0; i < numSquares; i++){
        let squareSize = gridWidth / numRowsAndCols;
        let squareString = '';
        squareString = squareSize + "px";
        document.documentElement.style.setProperty("--sizeSquare", squareString);

        let newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.addEventListener('mouseover', fillSquare);
        grid.appendChild(newSquare);
    }
}

function fillSquare(e){
    e.target.classList.add('squareFilled');
}

function startGrid() {
    let askRowsAndCols = parseInt(prompt('How many rows and columns should the grid be? (1 - 100)'));

    if (askRowsAndCols < 1) {
        numRowsAndCols = 1;
    }
    else if (askRowsAndCols > 100) {
        numRowsAndCols = 100;
    }
    else {
        numRowsAndCols = askRowsAndCols;
    }


    document.documentElement.style.setProperty("--numRowsAndCols", numRowsAndCols);

    numSquares = numRowsAndCols * numRowsAndCols;

    populateGrid();
}

function clearGrid() {
    let squareFilledList = document.getElementsByClassName("squareFilled");

    while (squareFilledList.length > 0){
        squareFilledList[0].classList.remove("squareFilled");
    }
}

function resetGridSize() {
    let squareList = document.getElementsByClassName("square");

    while (squareList.length > 0) {
        squareList[0].parentNode.removeChild(squareList[0]);
    }

    startGrid();
}