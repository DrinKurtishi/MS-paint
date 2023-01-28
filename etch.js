let slider = document.getElementById('mySlider');
let sliderValue = document.getElementById('showSliderValue');
//Print initial grid
let rows = 32;
let columns = 32;
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
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
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
                column.appendChild(row);
            }
            grid.appendChild(column);
        }
});

slider.addEventListener("mouseup", () => {//remove borders again when user stops changing grid
    let rows = document.getElementsByClassName('row');
    for(let i = 0; i < rows.length; i++) {
        rows[i].style.borderWidth = "0px";
    }
});