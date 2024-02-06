const container = document.getElementById('container');
const button = document.getElementById('btn');
const toggleBorder = document.getElementById('borderOnOff');
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const colorPicker = document.getElementById('colorPicker');
const colorPickerLabel = document.getElementById('colorPickerLabel');
const singleColor = document.getElementById('singleColor');

colorPicker.value = "#FFFFFF";
colorPickerLabel.style.backgroundColor = colorPicker.value;
singleColor.style.backgroundColor = colorPicker.value;

let isSingleColor = true;
let isRainbow = false;
let isEraser = false;
let isToggleBorder = false;

document.body.addEventListener('mouseover', () => {
    colorPickerLabel.style.backgroundColor = colorPicker.value;
    if (isSingleColor){
        singleColor.style.backgroundColor = colorPicker.value;
    }
});


let elements = Array.from(document.querySelectorAll('.column'));

let gridShow = document.querySelector('#gridShow');
gridShow.textContent = "10x10";

let randomNum255 = () => Math.floor((Math.random()*255)+1);

let rainbowColor = (event) => {
    event.addEventListener('mouseover', (e)=>{
        if (e.buttons == 1 || e.button == 1){
            e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
        }
    });
    event.addEventListener('mousedown', (e)=>{
        e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
    });

};

let eraseColor = (event) => {
    event.addEventListener('mouseover', (e)=>{
        if (e.buttons == 1 || e.button == 1){
            e.target.style.backgroundColor = "transparent";
        }
    });
    event.addEventListener('mousedown', (e)=>{
        e.target.style.backgroundColor = "transparent";
    });

};

let singularColor = (event) => {
    event.addEventListener('mouseover', (e)=>{
        if (e.buttons == 1 || e.button == 1){
            e.target.style.backgroundColor = `${colorPicker.value}`;
        }
    });
    event.addEventListener('mousedown', (e)=>{
        e.target.style.backgroundColor = `${colorPicker.value}`;
    });

};

let makeGrid = (gridSize) => {
    container.innerHTML = "";
    container.className = 'border2px';
    if (typeof(gridSize) == 'object'){
        for (let i = 0; i < +gridSize[1]; i++){
            let row = document.createElement('div');
            row.className = "row";
            for (let j = 0; j < +gridSize[0]; j++){
                let column = document.createElement('div');
                column.className = "column";
                singularColor(column);
                row.appendChild(column);
            }
            container.appendChild(row);
        }
    }
    else{
        for (let i = 0; i < +gridSize; i++){
            let row = document.createElement('div');
            row.className = "row";
            for (let j = 0; j < +gridSize; j++){
                let column = document.createElement('div');
                column.className = "column";
                singularColor(column);
                row.appendChild(column);
            }
            container.appendChild(row);
        }
    }
}

makeGrid(10)

button.addEventListener('click', (e) => {
    let input = prompt("» Enter the grid layout:");
    while(true){
        if(isNaN(input)){
            let newInput = input.split('x');
            if(newInput.length == 2 && !isNaN(newInput[0]) && !isNaN(newInput[1])){
                gridShow.textContent = `${+newInput[0]}x${+newInput[1]}`;
                makeGrid(newInput);
                isSingleColor = true;
                isRainbow = false;
                isEraser = false;
                isToggleBorder = false;
                eraser.style.backgroundColor = "transparent";
                eraser.style.color = "white";
                eraser.style.border = "2px solid white";
                rainbow.style.animation = "none";
                toggleBorder.style.backgroundColor = "";
                toggleBorder.style.color = "white";
                toggleBorder.style.border = "2px solid white";
                break;
            }else{
                input = prompt("» Invalid Input:", "Are you dumb?");
            }
        }else{
            if(!isNaN(input) && input > 0 && input <= 1000){
                gridShow.textContent = `${+input}x${+input}`;
                makeGrid(input);
                isSingleColor = true;
                isRainbow = false;
                isEraser = false;
                isToggleBorder = false;
                eraser.style.backgroundColor = "transparent";
                eraser.style.color = "white";
                eraser.style.border = "2px solid white";
                rainbow.style.animation = "none";
                toggleBorder.style.backgroundColor = "";
                toggleBorder.style.color = "white";
                toggleBorder.style.border = "2px solid white";
                break;
            }else if (+input == null || +input == undefined || +input == ""){
                break;
            }else{
                input = prompt("» Out of range ( 1 - 1000 ):", 100);
            }
        }
    };
});

toggleBorder.addEventListener('click', () =>{
    isToggleBorder = !isToggleBorder
    if(isToggleBorder){
        toggleBorder.style.backgroundColor = "gray";
        toggleBorder.style.color = "black";
        toggleBorder.style.border = "2px solid black";
    }else{
        toggleBorder.style.backgroundColor = "";
        toggleBorder.style.color = "white";
        toggleBorder.style.border = "2px solid white";
    }
    document.querySelectorAll("div#container div.row div.column").forEach((value)=> value.classList.toggle('border1px'))
    container.classList.toggle('border2px')
});

reset.addEventListener('click', (e) =>{
    document.querySelectorAll("div#container div.row div.column").forEach((value)=> value.style.backgroundColor = "");
    document.querySelectorAll("div#container div.row div.column").forEach((value)=> singularColor(value));
    isSingleColor = true;
    isRainbow = false;
    isEraser = false;
    isToggleBorder = false;
    eraser.style.backgroundColor = "transparent";
    eraser.style.color = "white";
    eraser.style.border = "2px solid white";
    rainbow.style.animation = "none";
});

eraser.addEventListener("click", () =>{
    if (!isEraser && (isRainbow || isSingleColor)){
        eraser.style.backgroundColor = "gray";
        eraser.style.color = "black";
        eraser.style.border = "2px solid black";
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> eraseColor(value));
        isEraser = !isEraser;
        if (isRainbow){
            rainbow.style.animation = "none";
            rainbow.style.backgroundColor = "transparent";
            rainbow.style.color = "white";
            rainbow.style.border = "2px solid white";
            isRainbow = !isRainbow;
        }else {
            singleColor.style.backgroundColor = "transparent";
            singleColor.style.border = "2px solid white";
            singleColor.style.color = "white";
            isSingleColor = !isSingleColor;
        }
    }
});

rainbow.addEventListener("click", () =>{
    if (!isRainbow && (isEraser || isSingleColor)){
        eraser.style.backgroundColor = "transparent";
        eraser.style.color = "white";
        eraser.style.border = "2px solid white";
        rainbow.style.animation = "rainbow 10s infinite";
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> rainbowColor(value));
        isRainbow = !isRainbow;
        if(isEraser){
            isEraser = !isEraser;
        }else{
            isSingleColor = !isSingleColor;
            singleColor.style.backgroundColor = "transparent";
            singleColor.style.border = "2px solid white";
            singleColor.style.color = "white";
        }
    }
});

singleColor.addEventListener('click', () => {
    if (!isSingleColor && (isRainbow || isEraser)){
        document.querySelectorAll("div#container div.row div.column").forEach((value) => singularColor(value));
        singleColor.style.backgroundColor = colorPicker.value;
        singleColor.style.color = "black";
        singleColor.style.border = "2px solid gray";
        isSingleColor = !isSingleColor;
        if(isRainbow){
            rainbow.style.backgroundColor = "transparent";
            rainbow.style.color = "white";
            rainbow.style.border = "2px solid white";
            rainbow.style.animation = "none";
            isRainbow = !isRainbow;
        }else{
            eraser.style.backgroundColor = "transparent";
            eraser.style.color = "white";
            eraser.style.border = "2px solid white";    
            isEraser= !isEraser;
        }
    }
});