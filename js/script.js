const container = document.getElementById('container');
const button = document.querySelector('#btn');
const toggleBorder = document.querySelector('#borderOnOff');
const reset = document.querySelector('#reset');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');

rainbow.style.backgroundColor = "gray";
rainbow.style.color = "black";
rainbow.style.border = "2px solid black";

let isRainbow = true;
let isEraser = false;
let isToggleBorder = false;


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
    event.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
    });

};

let eraseColor = (event) => {
    event.addEventListener('mouseover', (e)=>{
        if (e.buttons == 1 || e.button == 1){
            e.target.style.backgroundColor = "transparent";
        }
    });
    event.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = "transparent";
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
                rainbowColor(column);
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
                rainbowColor(column);
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
                isRainbow = true;
                isEraser = false;
                isToggleBorder = false;
                eraser.style.backgroundColor = "transparent";
                eraser.style.color = "white";
                eraser.style.border = "2px solid white";
                rainbow.style.backgroundColor = "gray";
                rainbow.style.color = "black";
                rainbow.style.border = "2px solid black";
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
                isRainbow = true;
                isEraser = false;
                isToggleBorder = false;
                eraser.style.backgroundColor = "transparent";
                eraser.style.color = "white";
                eraser.style.border = "2px solid white";
                rainbow.style.backgroundColor = "gray";
                rainbow.style.color = "black";
                rainbow.style.border = "2px solid black";
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
    document.querySelectorAll("div#container div.row div.column").forEach((value)=> rainbowColor(value));
    isRainbow = true;
    isEraser = false;
    eraser.style.backgroundColor = "transparent";
    eraser.style.color = "white";
    eraser.style.border = "2px solid white";
    rainbow.style.backgroundColor = "gray";
    rainbow.style.color = "black";
    rainbow.style.border = "2px solid black";
});

eraser.addEventListener("click", () =>{
    isEraser = !isEraser;
    isRainbow = !isRainbow;
    if (isEraser){
        eraser.style.backgroundColor = "gray";
        eraser.style.color = "black";
        eraser.style.border = "2px solid black";
        rainbow.style.backgroundColor = "transparent";
        rainbow.style.color = "white";
        rainbow.style.border = "2px solid white";
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> eraseColor(value));
    }else{
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> rainbowColor(value));
        eraser.style.backgroundColor = "transparent";
        eraser.style.color = "white";
        eraser.style.border = "2px solid white";
        rainbow.style.backgroundColor = "gray";
        rainbow.style.color = "black";
        rainbow.style.border = "2px solid black";
    }
});

rainbow.addEventListener("click", () =>{
    isEraser = !isEraser;
    isRainbow = !isRainbow;
    if (isRainbow){
        eraser.style.backgroundColor = "transparent";
        eraser.style.color = "white";
        eraser.style.border = "2px solid white";
        rainbow.style.backgroundColor = "gray";
        rainbow.style.color = "black";
        rainbow.style.border = "2px solid black";
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> rainbowColor(value));
    }else{
        document.querySelectorAll("div#container div.row div.column").forEach((value)=> eraseColor(value));
        eraser.style.backgroundColor = "gray";
        eraser.style.color = "black";
        eraser.style.border = "2px solid black";
        rainbow.style.backgroundColor = "transparent";
        rainbow.style.color = "white";
        rainbow.style.border = "2px solid white";
    }
});