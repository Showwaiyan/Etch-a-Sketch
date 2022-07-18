function pixalDelect() {
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
}

function boardInit(size) {
    board.appendChild(backgroundLayer);
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (let i=0; i < size*size; i++) {
        const square = document.createElement('div');
        //square.style.backgroundColor = "red"// document.getElementById('background-layer')
        //.style.backgroundColor;
        board.appendChild(square);
    }
}

function sizeNumberGlowRemove() {
    sizeNumbers.forEach((t)=>{
        t.classList.remove('glow');
    })
}

const board = document.getElementById('board');
const backgroundLayer = document.getElementById('background-layer');

const colorPicker = new iro.ColorPicker('#color-picker', 
                                {width:180,color:"#fff",
                                borderWidth:3,borderColor:"#DCD7C9"});

const boardSizeRange = document.getElementById('board-size');
const sizeNumbers = document.querySelectorAll('.size-number');

let colorMode = "pencolor"
let currentPenColor = "white"; // *default white
let boardSize = 16;

boardInit(boardSize);

boardSizeRange.addEventListener('change',function() {
    switch (boardSizeRange.value) {
        case "0":
            pixalDelect();
            boardSize = 8;
            boardInit(boardSize);
            sizeNumberGlowRemove();
            document.getElementById(`size-${boardSize}`).classList.add("glow");
            break;
        case "50":
            pixalDelect();
            boardSize = 16;
            boardInit(boardSize);
            sizeNumberGlowRemove();
            document.getElementById(`size-${boardSize}`).classList.add("glow");
            break;
        case "100":
            pixalDelect();
            boardSize = 32;
            boardInit(boardSize);
            sizeNumberGlowRemove();
            document.getElementById(`size-${boardSize}`).classList.add("glow");
            break;
        default:
            console.log("Hello");
    }
})

board.addEventListener('click',(e)=>{
    if (e.target.matches('div')) {
        e.target.style.backgroundColor = currentPenColor;
    }
})


document.getElementsByName("color-select").forEach((inPut)=>{
    inPut.addEventListener('click',function() {
        if (inPut.checked) colorMode = inPut.value;
    })
})

document.getElementById('remove-color-box').addEventListener('click',(e)=> {
    if (e.target.checked) currentPenColor = document.getElementById('background-layer').
                                            style.backgroundColor;
    else currentPenColor = colorPicker.color.hexString;
})

colorPicker.on('color:change', (color)=>{
    if (colorMode === "pencolor") currentPenColor = color.hexString;
    else if (colorMode === "bgcolor") {
        document.getElementById('background-layer')
        .style.backgroundColor = color.hexString;
    }
})