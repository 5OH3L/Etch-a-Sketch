const container = document.getElementById('container');
const button = document.querySelector('#btn');
const toggleBorder = document.querySelector('#borderOnOff');
const reset = document.querySelector('#reset');
let elements = Array.from(document.querySelectorAll('.column'));

let gridShow = document.querySelector('#gridShow');
gridShow.textContent = "10x10";

let randomNum255 = () => Math.floor((Math.random()*255)+1);

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
                column.addEventListener('mouseover', (e)=>{
                    if (e.buttons == 1 || e.button == 1){
                        e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
                    }
                });
                column.addEventListener('mousedown', (e)=>{
                    e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
                });
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
                column.addEventListener('mouseover', (e)=>{
                    if (e.buttons == 1 || e.button == 1){
                        e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
                    }
                });
                column.addEventListener('mousedown', (e)=>{
                    e.target.style.backgroundColor = `rgb(${randomNum255()},${randomNum255()},${randomNum255()})`;
                });
                row.appendChild(column);
            }
            container.appendChild(row);
        }
    }
}

makeGrid(10)

button.addEventListener('click', (e) => {
    let input = prompt("» Enter the grid layout:", "How many dads do you have ?");
    while(true){
        if(isNaN(input)){
            let newInput = input.split('x');
            if(newInput.length == 2 && !isNaN(newInput[0]) && !isNaN(newInput[1])){
                gridShow.textContent = `${+newInput[0]}x${+newInput[1]}`;
                makeGrid(newInput);
                break;
            }else{
                input = prompt("» Invalid Input:", "Are you dumb?");
            }
        }else{
            if(!isNaN(input) && input > 0 && input <= 1000){
                gridShow.textContent = `${+input}x${+input}`;
                makeGrid(input);
                break;
            }else{
                input = prompt("» Out of range ( 1 - 1000 ):", "If your can handle Ofcourse :]");
            }
        }
    };

    //              Old conditional statement
    // if(isNaN(+input)){
    //     let newInput = input.split('x');
    //     if(newInput.length == 2){
    //         gridShow.textContent = `${+newInput[0]}x${+newInput[1]}`;
    //         makeGrid(newInput);
    //     }else{
    //         while(true){
    //             input = prompt("» Enter the grid layout:", "Only 1 or 2 arguments you dumb?");
    //             if (isNaN(input)){
    //                 newInput = input.split('x');
    //                 gridShow.textContent = `${+newInput[0]}x${+newInput[1]}`;
    //                 makeGrid(newInput);
    //                 loop = 0;
    //             }else{
    //                 gridShow.textContent = `${input}x${input}`;
    //                 makeGrid(input);
    //                 loop = 0;
    //             }
    //         }
    //         gridShow.textContent = `${+newInput[0]}x${+newInput[1]}`;
    //         makeGrid(newInput);
    //     }

    // }else{
    //     while (+input >= 1000 || +input < 0){
    //         input = prompt("The limit is from 1x1 to 1000x1000 (If you pc can handle)!");
    //     }
    //     if (input == null || input == undefined || input == ""){
    
    //     }else if (typeof(+input) == "number"){
    //         gridShow.textContent = `${input}x${input}`;
    //         makeGrid(input);
    //     }
    // }
});

toggleBorder.addEventListener('click', () =>{
    elements = Array.from(document.querySelectorAll('.column'));
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.toggle("border1px");
    }
    container.classList.toggle('border2px')
});

reset.addEventListener('click', (e) =>{
    elements = Array.from(document.querySelectorAll('.column'));
    for (let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "";
    }
});