let slider = document.getElementById('mySlider');
let sliderValue = document.getElementById('showSliderValue');

//Print initial grid
let rows = slider.value;
let columns = slider.value;
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
let colorFlag = false;

function draw(){
    //only draws if the user clicks or hovers over a pixel while holding down mouse
    let pixels = document.getElementsByClassName('row');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mousedown', (e) => {
            e.preventDefault()//prevents drag and drop which stopped the drawing
            colorFlag = true;
            pixels[i].style.backgroundColor = color;
        });
        pixels[i].addEventListener('mouseup', () => {
            colorFlag = false;
        });

        pixels[i].addEventListener('mouseover', () => {
            if (colorFlag) {
                pixels[i].style.backgroundColor = color;
            }
        });
    }

    grid.addEventListener('mouseenter', (event) => {//if user enters grid with mouse clicked then enable drawing
        if (event.buttons === 1) { // Check if left mouse button is down
          colorFlag = true;////--> TODO, drawing on the first pixel after mouse enter doesnt work, fix <----
          console.log(colorFlag);
        }
      });
      
      grid.addEventListener('mouseleave', (event) => {//if user leaves grid with mouse clicked then disable drawing on hover
        if (event.buttons === 1) { // Check if left mouse button is down
          colorFlag = false; 
        }
      });
}

//COLORING


let greenColor = document.getElementById('greenColor');
let redColor = document.getElementById('redColor');
let blackColor = document.getElementById('blackColor')
let brownColor = document.getElementById('brownColor');
let blueColor = document.getElementById('blueColor');
let yellowColor = document.getElementById('yellowColor');
let skinColor = document.getElementById('skinColor');
let whiteColor = document.getElementById('whiteColor');
let anyColor = document.getElementById('anyColor');

let color = "black";
greenColor.addEventListener('click', () => {
    color = greenColor.value;
});
redColor.addEventListener('click', () => {
    color = redColor.value;
});
blackColor.addEventListener('click', () => {
    color = blackColor.value;
});
brownColor.addEventListener('click', () => {
    color = brownColor.value;
});
blueColor.addEventListener('click', () => {
    color = blueColor.value;
})
yellowColor.addEventListener('click', () => {
    color = yellowColor.value;
});
skinColor.addEventListener('click', () => {
    color = skinColor.value;
});
whiteColor.addEventListener('click', () => {
    color = whiteColor.value;
});
anyColor.addEventListener('change', () => {
    color = anyColor.value;
});

