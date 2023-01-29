let slider = document.getElementById('mySlider');
let sliderValue = document.getElementById('showSliderValue');
//Print initial grid
let rows = 16;
let columns = 16;
let grid = document.getElementById("grid");
sliderValue.innerHTML = rows + "x" + columns;//print grid size
for (let i = 0; i < columns; i++)
    {
        let column = document.createElement('div');//creates columns
        column.className = 'column';
        for(let j = 0; j < rows; j++)
        {
            let row = document.createElement('div');
            row.className = 'row';
            row.draggable = false;
            row.style.backgroundColor = "white";
            row.style.borderWidth = "1px";
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    draw();//use code for drawing
//end of print initial grid

//print new grid when user changes slider value
slider.addEventListener("input", () => {
        rows = slider.value;
        columns = slider.value;
        let grid = document.getElementById("grid");
        grid.innerHTML = "";//clears previous grid
        sliderValue.innerHTML = slider.value + "x" + slider.value;//print grid size
    for (let i = 0; i < columns; i++)
        {
            let column = document.createElement('div');//creates columns
            column.className = 'column';
            for(let j = 0; j < rows; j++)
            {
                let row = document.createElement('div');//creates rows
                row.className= 'row';
                row.style.borderWidth = "1px";//add a grid when user resizes grid
                row.style.backgroundColor = "white";
                column.appendChild(row);
            }
            grid.appendChild(column);
        }
    draw();//use code for drawing
});

let flag = true;//to erase/not erase grid when user clicks grid button
slider.addEventListener("mouseup", () => {//remove borders again when user stops changing grid
    if(flag === false){//if user presses button to show grid do not erase it on rescale
        let rows = document.getElementsByClassName('row');
        for(let i = 0; i < rows.length; i++) {
            rows[i].style.borderWidth = "0px";
        }
    }
});

let GridButton = document.getElementById('GridButton');

GridButton.addEventListener('click', () => {
    flag = true;//prevents grid from unshwoing if button is pressed
    let rows = document.getElementsByClassName('row');
    if(rows[1].style.borderWidth == "0px"){
        for(let i = 0; i < rows.length; i++) {    
            rows[i].style.borderWidth = "1px";
        }
    }
    else{
        flag = false;//allow borders to unshow if user chooses clear borders
        for(let i = 0; i < rows.length; i++) {    
            rows[i].style.borderWidth = "0px";
        }
    }
});

function draw(){
    //drawing
    //only draws if the user clicks or hovers over a pixel while holding down mouse
    let colorFlag = false;
    let pixels = document.getElementsByClassName('row');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mousedown', () => {
            colorFlag = true;
            pixels[i].style.backgroundColor = "black";
        });
        pixels[i].addEventListener('mouseup', () => {
            colorFlag = false;
        });
        pixels[i].addEventListener('mouseover', (e) => {
            if (colorFlag && e.buttons === 1) {//to prevent accidental drawing when double click
                pixels[i].style.backgroundColor = "black";
            }
        });
    }
}

