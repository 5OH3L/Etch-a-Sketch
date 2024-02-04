const container = document.getElementById('container');
const button = document.querySelector('#btn');
const toggleBorder = document.querySelector('#borderOnOff');
let elements = Array.from(document.querySelectorAll('.column'));

let gridShow = document.querySelector('#gridShow');
gridShow.textContent = "10x10";

let randomNum255 = () => Math.floor((Math.random()*255)+1);

let makeGrid = (gridSize) => {
    container.innerHTML = "";
    container.className = 'border2px';
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

makeGrid(10)

button.addEventListener('click', (e) => {
    let input = +prompt("» Enter the grid layout:");
    while (input > 100){
        input = +prompt("The max limit is 100x100!");
    }
    if (input == null || input == undefined || input == ""){

    }else{
        gridShow.textContent = `${input}x${input}`;
        makeGrid(input);
    }
});

toggleBorder.addEventListener('click', () =>{
    elements = Array.from(document.querySelectorAll('.column'));
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.toggle("border1px");
    }
    container.classList.toggle('border2px')
});