function bordInit(size) {
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (let i=0; i < size*size; i++) {
        const square = document.createElement('div');
        board.appendChild(square);
    }
}


const board = document.getElementById('board');
const colorPicker = new iro.ColorPicker('#color-picker', 
                                {width:180,color:"#fff",
                                borderWidth:3,borderColor:"#DCD7C9"});

let currentPenColor = "white"; // *default white
let currenBgColor = "#3F4E4F"

bordInit(16);

board.addEventListener('click',(e)=>{
    if (e.target.matches('div')) {
        e.target.style.backgroundColor = currentPenColor;
    }
})

colorPicker.on('color:change', (color)=>{
    currentPenColor = color.hexString;
})