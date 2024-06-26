var board = [[0,8,0,0,0,2,4,0,0],
            [0,0,0,0,0,8,0,0,0],
            [0,0,0,0,0,0,6,9,0],
            [0,0,0,0,0,0,2,0,7],
            [0,0,0,0,0,0,0,0,9]
            [2,0,0,4,0,5,0,8,0],
            [0,0,0,0,0,6,0,0,0],
            [0,6,0,9,2,0,0,0,5],
            [0,0,4,0,8,0,0,0,0]];

var solution = [[7,8,9,6,5,2,4,3,1],
                [4,3,6,1,9,8,5,7,2],
                [5,1,2,7,4,3,6,9,8],
                [3,5,1,8,6,9,2,4,7],
                [6,4,8,2,7,1,3,5,9],
                [2,9,7,4,3,5,1,8,6],
                [9,7,5,3,1,6,8,2,4],
                [8,6,3,9,2,4,7,1,5],
                [1,2,4,5,8,7,9,6,3]];

var numbers = 0;

var currTile = null;

window.onload = function() {
    setGame();
}


function setGame() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
            }
        }
}

