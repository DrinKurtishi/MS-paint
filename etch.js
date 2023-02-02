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


let black = document.getElementById('black');
let darkGray = document.getElementById('darkGray');
let maroon = document.getElementById('maroon');
let olive = document.getElementById('olive');
let green = document.getElementById('green');
let teal = document.getElementById('teal');
let navy = document.getElementById('navy');
let purple = document.getElementById('purple');
let olive2 = document.getElementById('olive2');
let navy2 = document.getElementById('navy2');
let lightBlue = document.getElementById('lightBlue');
let navy3 = document.getElementById('navy3');
let navy4 = document.getElementById('navy4');
let brown = document.getElementById('brown');
let white = document.getElementById('white');
let lightGray = document.getElementById('lightGray');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let lime = document.getElementById('lime');
let blue = document.getElementById('blue');
let pink = document.getElementById('pink');
let lighterBlue = document.getElementById('lighterBlue');
let lightYellow = document.getElementById('lightYellow');
let lightGreen = document.getElementById('lightGreen');
let aqua = document.getElementById('aqua');
let lightPurple = document.getElementById('lightPurple');
let hotPink = document.getElementById('hotPink');
let coral = document.getElementById('coral');
let anyColor = document.getElementById('anyColor');

let color = "black";//default color
black.addEventListener('click', () => {
    color = black.value;
});
darkGray.addEventListener('click', () => {
    color = darkGray.value;
});
maroon.addEventListener('click', () => {
    color = maroon.value;
});
olive.addEventListener('click', () => {
    color = olive.value;
});
green.addEventListener('click', () => {
    color = green.value;
})
teal.addEventListener('click', () => {
    color = teal.value;
});
navy.addEventListener('click', () => {
    color = navy.value;
});
purple.addEventListener('click', () => {
    color = purple.value;
});
olive2.addEventListener('click', () => {
    color = olive2.value;
});
navy2.addEventListener('click', () => {
    color = navy2.value;
});
lightBlue.addEventListener('click', () => {
    color = lightBlue.value;
});
navy3.addEventListener('click', () => {
    color = navy3.value;
});
navy4.addEventListener('click', () => {
    color = navy4.value;
});
brown.addEventListener('click', () => {
    color = brown.value;
});
white.addEventListener('click', () => {
    color = white.value;
})
lightGray.addEventListener('click', () => {
    color = lightGray.value;
})
red.addEventListener('click', () => {
    color = red.value;
});
yellow.addEventListener('click', () => {
    color = yellow.value;
})
lime.addEventListener('click', () => {
    color = lime.value;
});
blue.addEventListener('click', () => {
    color = blue.value;
});
pink.addEventListener('click', () => {
    color = pink.value;
});
lighterBlue.addEventListener('click', () => {
    color = lighterBlue.value;
});
lightYellow.addEventListener('click', () => {
    color = lightYellow.value;
});
lightGreen.addEventListener('click', () => {
    color = lightGreen.value;
});
aqua.addEventListener('click', () => {
    color = aqua.value;
});
lightPurple.addEventListener('click', () => {
    color = lightPurple.value;
});
hotPink.addEventListener('click', () => {
    color = hotPink.value;
})
coral.addEventListener('click', () => {
    color = coral.value;
})
anyColor.addEventListener('change', () => {
    color = anyColor.value;
});

