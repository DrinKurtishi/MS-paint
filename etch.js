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
            row.id = '0';//to differentiate between background color and colored divs
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
                row.id = '0';//to differentiate between background color and colored divs
                row.style.borderWidth = "1px";//add a grid when user resizes grid
                row.style.backgroundColor = bgColor.value;
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
        //changes grid icon
        GridButton.innerHTML = "";
        let img = document.createElement("img");
        img.src = "images/CloseGrid.png";
        //img.width = "50";
        GridButton.appendChild(img);
    }
    else{
        flag = false;//allow borders to unshow if user chooses clear borders
        for(let i = 0; i < rows.length; i++) {    
            rows[i].style.borderWidth = "0px";
        }
        //changes grid icon
        GridButton.innerHTML = "";
        let img = document.createElement("img");
        img.src = "images/OpenGrid.png";
        //img.width = "50";
        GridButton.appendChild(img);
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
            if(eraserFlag == true){//if eraser button is clicked
                pixels[i].style.backgroundColor = bgColor.value;//set color of pen to background color(mimicing eraser)
                pixels[i].id = '0';//change the state of the pixel to 'uncolored' so a background color change targets it as well
            }
            else{
                pixels[i].style.backgroundColor = color;
                pixels[i].id = '1';//differentiate between a colored div and background color
                swatch.style.backgroundColor = color;
            }
        });
        pixels[i].addEventListener('mouseup', () => {
            colorFlag = false;
        });

        pixels[i].addEventListener('mouseover', () => {
            if (colorFlag) {
                if(eraserFlag == true){//if eraser button is clicked
                    pixels[i].style.backgroundColor = bgColor.value;//set color of pen to background color(mimicing eraser)
                    pixels[i].id = '0';//change the state of the pixel to 'uncolored' so a background color change targets it as well
                }
                else{
                    pixels[i].style.backgroundColor = color;
                    pixels[i].id = '1';//differentiate between a colored div and background color
                }
            }
        });
    }

    grid.addEventListener('mouseenter', (event) => {//if user enters grid with mouse clicked then enable drawing
        if (event.buttons === 1) { // Check if left mouse button is down
          colorFlag = true;////--> TODO, drawing on the first pixel after mouse enter doesnt work, fix <----
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
let swatch = document.getElementById('foreground');
let bgswatch = document.getElementById('background');
let anyColor = document.getElementById('anyColor');
anyColor.value = "#FFFFFF";


let color = "black";//default pen color
foreground.style.backgroundColor = color;// foreground swatch color
bgswatch.style.backgroundColor = "white";//initial background swatch color

function changeColor(button) {
    if (bgColorFlag === false) {
        color = button.value;
        foreground.style.backgroundColor = color;
    } else {
        bgColor.value = button.value;
        bgswatch.style.backgroundColor = bgColor.value;
        changeBackgroundColor();
    }
}

black.addEventListener('click', () => changeColor(black));
darkGray.addEventListener('click', () => changeColor(darkGray));
maroon.addEventListener('click', () => changeColor(maroon));
olive.addEventListener('click', () => changeColor(olive));
green.addEventListener('click', () => changeColor(green));
teal.addEventListener('click', () => changeColor(teal));
navy.addEventListener('click', () => changeColor(navy));
purple.addEventListener('click', () => changeColor(purple));
olive2.addEventListener('click', () => changeColor(olive2));
navy2.addEventListener('click', () => changeColor(navy2));
lightBlue.addEventListener('click', () => changeColor(lightBlue));
navy3.addEventListener('click', () => changeColor(navy3));
navy4.addEventListener('click', () => changeColor(navy4));
brown.addEventListener('click', () => changeColor(brown));
white.addEventListener('click', () => changeColor(white));
lightGray.addEventListener('click', () => changeColor(lightGray));
red.addEventListener('click', () => changeColor(red));
yellow.addEventListener('click', () => changeColor(yellow));
lime.addEventListener('click', () => changeColor(lime));
blue.addEventListener('click', () => changeColor(blue));
pink.addEventListener('click', () => changeColor(pink));
lighterBlue.addEventListener('click', () => changeColor(lighterBlue));
lightYellow.addEventListener('click', () => changeColor(lightYellow));
lightGreen.addEventListener('click', () => changeColor(lightGreen));
aqua.addEventListener('click', () => changeColor(aqua));
lightPurple.addEventListener('click', () => changeColor(lightPurple));
hotPink.addEventListener('click', () => changeColor(hotPink));
coral.addEventListener('click', () => changeColor(coral));


anyColor.addEventListener('input', () => {//for the color picker
    checkIfCustomColorHasChanged = true;
    if(bgColorFlag == false){//if in pen mode change pen color
        color = anyColor.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor.value = anyColor.value;
        bgswatch.style.backgroundColor = bgColor.value;
        changeBackgroundColor();
    }
    
});

//switch to choosing background color
let bgColorFlag = false;
let bgColor = document.getElementById('background-color');

bgColor.addEventListener('click', () => {
    if(bgColorFlag == false){
        bgColorFlag = true;
        bgColor.style.border = "inset";
        bgColor.style.backgroundColor = "#ededed"
    }
    else{
        bgColorFlag = false;
        bgColor.style.border = "outset";
        bgColor.style.backgroundColor = "rgb(209, 209, 209)"
    }
});

function changeBackgroundColor(){
    let rows = document.getElementsByClassName('row');
    for(let i = 0; i < rows.length; i++) {    //changes bgColor of background
        if(rows[i].id == "0"){//if div uncolored then color to bgColor
            rows[i].style.backgroundColor = bgColor.value;
        }
    }
}

//eraser
let eraserFlag = false;//initial eraser off state
let eraser = document.getElementById('eraser-button');
eraser.addEventListener('click', () => {//toggle eraser on
    pencilFlag = false;//disable pencil
    if(eraserFlag == false){
        eraserFlag = true;
    }
    //to tell if a button is on, making it stay "pressed"
    pencilButton.style.border = "outset";
    pencilButton.style.cursor = "pointer";
    pencilButton.style.backgroundColor = "rgb(209, 209, 209)"
    eraser.style.border = "inset";
    eraser.style.cursor = "auto";
    eraser.style.backgroundColor = "#ededed";
});

//pencil button
let pencilFlag = true //pencil is initially in activated mode
let pencilButton = document.getElementById('pencil-button');
pencilButton.style.cursor = "auto";
pencilButton.addEventListener('click', () => {
    eraserFlag = false;//disable eraser
    if(pencilFlag == false){
        pencilFlag = true;
    }
    //to tell if a button is on, making it stay "pressed"
    pencilButton.style.border = "inset";
    eraser.style.border = "outset";
    pencilButton.style.cursor = "auto";
    pencilButton.style.backgroundColor = "#ededed"
    eraser.style.cursor = "pointer";
    eraser.style.backgroundColor = "rgb(209, 209, 209)"
})

//saving colors
/*when the custom button is double clicked it takes the value of the color palette and saves it for later use
when the custom button is clicked once after a color has been set to it the pen will take the saved color
setting a different color is done by changing the value in the palette and double clicking the custom color box.*/
let checkIfCustomColorHasChanged = false;//ran out of names, doesnt let custom color to change if user never clicked color picker

function handleClickAndDoubleClick(element, anyColor) {
    element.addEventListener('dblclick', () => {
        if (checkIfCustomColorHasChanged == true) {
            element.style.backgroundImage = "none";//remove placeholder
            element.style.backgroundColor = anyColor.value;//set bgcolor to color of input="color"
            element.value = anyColor.value;//save color for later use in single click
            if (bgColorFlag == false) {//change pen color
                color = anyColor.value;
                foreground.style.backgroundColor = color;
            } else {
                bgColor.value = anyColor.value;//change background color
                bgswatch.style.backgroundColor = bgColor.value;
                changeBackgroundColor();
            }
        }
    });
    element.addEventListener('click', () => {
        if(element.style.backgroundImage !== ""){//if custom button doesnt have a previous set color dont do anything
            if (checkIfCustomColorHasChanged == true) {
                if (bgColorFlag == false) {//change pen color
                    color = element.value;
                    foreground.style.backgroundColor = color;
                } 
                else {
                    bgColor.value = element.value;//change background color
                    bgswatch.style.backgroundColor = bgColor.value;
                    changeBackgroundColor();
                }
            }
        }
    });
}

let customColor1 = document.getElementById('custom-color-1');
handleClickAndDoubleClick(customColor1, anyColor);

let customColor2 = document.getElementById('custom-color-2');
handleClickAndDoubleClick(customColor2, anyColor);

let customColor3 = document.getElementById('custom-color-3');
handleClickAndDoubleClick(customColor3, anyColor);

let customColor4 = document.getElementById('custom-color-4');
handleClickAndDoubleClick(customColor4, anyColor);

let customColor5 = document.getElementById('custom-color-5');
handleClickAndDoubleClick(customColor5, anyColor);

let customColor6 = document.getElementById('custom-color-6');
handleClickAndDoubleClick(customColor6, anyColor);

let customColor7 = document.getElementById('custom-color-7');
handleClickAndDoubleClick(customColor7, anyColor);

let customColor8 = document.getElementById('custom-color-8');
handleClickAndDoubleClick(customColor8, anyColor);

let customColor9 = document.getElementById('custom-color-9');
handleClickAndDoubleClick(customColor9, anyColor);

let customColor10 = document.getElementById('custom-color-10');
handleClickAndDoubleClick(customColor10, anyColor);

let customColor11 = document.getElementById('custom-color-11');
handleClickAndDoubleClick(customColor11, anyColor);

let customColor12 = document.getElementById('custom-color-12');
handleClickAndDoubleClick(customColor12, anyColor);

let customColor13 = document.getElementById('custom-color-13');
handleClickAndDoubleClick(customColor13, anyColor);

//clear canvas
let clearCanvas = document.getElementById('clear-canvas-button');
function clearCanvass(){
    let rows = document.getElementsByClassName('row');
    for(let i = 0; i < rows.length; i++) {   //cycles through all pixels
        if(rows[i].id == "1"){
            rows[i].id = "0";//change all pixels to "uncolored state"
        }
        rows[i].style.backgroundColor = bgColor.value;
    }
}
clearCanvas.addEventListener('click', () => clearCanvass());

//cursors
grid.addEventListener('mouseenter', () => {
    if(eraserFlag == true){
        grid.style.cursor = "url(images/eraser-cursor.png) 10 14, auto";
    }
    else{
        grid.style.cursor = "url(images/pencil-cursor.png) 13 24, auto";
    }
})

//menu bar buttons
let aboutButton = document.getElementById('about-button');
let helpButton = document.getElementById('help-button');
let aboutFlag = false;
let helpFlag = false;
let aboutDropDown = document.getElementById('about-dropdown');
let helpDropDown = document.getElementById('help-dropdown');
//all this code does is add hover effect and removes it on hover, click and stuff
aboutButton.addEventListener('mouseenter', () => {
    if(aboutFlag === false){
        aboutButton.style.border = "outset";
        aboutButton.style.borderWidth = "2px";
    }
});
aboutButton.addEventListener('mouseleave', () => {
    if(aboutFlag === false){
        aboutButton.style.border = "none";
    }
});

aboutButton.addEventListener('click', () => {
    aboutButton.style.border = "inset"
    aboutButton.style.borderWidth = "2px";

    if(aboutFlag == false){
        aboutFlag = true;
        aboutButton.style.border = "inset";
        aboutButton.style.borderWidth = "2px";
        aboutDropDown.classList.toggle("show");
        helpDropDown.classList.remove("show");
    }
    else{
        aboutFlag = false;
        aboutButton.style.border = "outset";
        aboutButton.style.borderWidth = "2px";
        aboutDropDown.classList.remove("show");
    }
    if(helpFlag === true){
        helpButton.style.border = "none";
        helpFlag = false;
    }
   
});

helpButton.addEventListener('mouseenter', () => {
    if(helpFlag === false){
        helpButton.style.border = "outset";
        helpButton.style.borderWidth = "2px";
    }
})
helpButton.addEventListener('mouseleave', () => {
    if(helpFlag === false){
        helpButton.style.border = "none";
    }
})

helpButton.addEventListener('click', () => {
    if(helpFlag == false){
        helpFlag = true;
        helpButton.style.border = "inset";
        helpButton.style.borderWidth = "2px";
        helpDropDown.classList.toggle("show");
        aboutDropDown.classList.remove("show");
    }
    else{
        helpFlag = false;
        helpButton.style.border = "outset";
        helpButton.style.borderWidth = "2px";
        helpDropDown.classList.remove("show");
    }
    if(aboutFlag === true){
        aboutButton.style.border = "none";
        aboutFlag = false;
    }
});
//function to close an opened menu with a click anywhere on the screen
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          aboutButton.style.border = "none";
          aboutFlag = false;
          helpButton.style.border = "none";
          helpFlag = false;
        }
      }
    }
  }
