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
                row.style.backgroundColor = bgColor;
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
            if(eraserFlag == true){
                pixels[i].style.backgroundColor = bgColor;//set color of pen to background color(mimicing eraser)
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
                if(eraserFlag == true){
                    pixels[i].style.backgroundColor = bgColor;//set color of pen to background color(mimicing eraser)
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


let color = "black";//default pen color
foreground.style.backgroundColor = color;// foreground swatch color
bgswatch.style.backgroundColor = "white";//initial background swatch color
black.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = black.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = black.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
darkGray.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = darkGray.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = darkGray.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
maroon.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = maroon.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = maroon.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
olive.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = olive.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = olive.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
green.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = green.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = green.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
teal.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = teal.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = teal.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
navy.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = navy.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = navy.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
purple.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = purple.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = purple.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
olive2.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = olive2.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = olive2.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
navy2.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = navy2.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = navy2.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lightBlue.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lightBlue.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lightBlue.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
navy3.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = navy3.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = navy3.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
navy4.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = navy4.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = navy4.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
brown.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = brown.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = brown.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
white.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = white.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = white.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lightGray.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lightGray.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lightGray.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
red.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = red.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = red.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
yellow.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = yellow.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = yellow.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lime.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lime.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lime.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
blue.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = blue.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = blue.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
pink.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = pink.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = pink.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lighterBlue.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lighterBlue.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lighterBlue.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lightYellow.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lightYellow.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lightYellow.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lightGreen.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lightGreen.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lightGreen.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
aqua.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = aqua.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = aqua.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
lightPurple.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = lightPurple.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = lightPurple.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
hotPink.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = hotPink.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = hotPink.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});
coral.addEventListener('click', () => {
    if(bgColorFlag == false){//if in pen mode change pen color
        color = coral.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = coral.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
});

anyColor.addEventListener('input', () => {//for the color picker
    if(bgColorFlag == false){//if in pen mode change pen color
        color = anyColor.value;
        foreground.style.backgroundColor = color;
    }
    else{//if in bgColor mode change bgColor
        bgColor = anyColor.value;
        bgswatch.style.backgroundColor = bgColor;
        changeBackgroundColor();
    }
    
});

//switch to choosing background color
let bgColorFlag = false;
let bgColor = document.getElementById('background-color');

bgColor.addEventListener('click', () => {
    if(bgColorFlag == false){
        bgColorFlag = true;
    }
    else{
        bgColorFlag = false;
    }
});
bgColor = white.value;//default background color

function changeBackgroundColor(){
    let rows = document.getElementsByClassName('row');
    for(let i = 0; i < rows.length; i++) {    //changes bgColor of background
        if(rows[i].id == "0"){//if div uncolored then color to bgColor
            rows[i].style.backgroundColor = bgColor;
        }
    }
}

//eraser
let eraserFlag = false;
let eraser = document.getElementById('eraser-button');
eraser.addEventListener('click', () => {
    if(eraserFlag == false){
        eraserFlag = true;
    }
    else{
        eraserFlag = false;
    }
    eraser.value = bgColor;
});
        