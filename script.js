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

let colorMode = "pencolor"
let currentPenColor = "white"; // *default white
let currenBgColor = document.getElementById('background-layer').style.backgroundColor // *default background color

bordInit(16);

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

colorPicker.on('color:change', (color)=>{
    if (colorMode === "pencolor") currentPenColor = color.hexString;
    else if (colorMode === "bgcolor") {
        document.getElementById('background-layer')
        .style.backgroundColor = color.hexString;
    }
})