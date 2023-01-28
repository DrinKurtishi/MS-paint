let slider = document.getElementById('mySlider');
let rows = 32;
let columns = 32;
slider.addEventListener("change", () => {
    rows = slider.value;
    columns = slider.value;
    let grid = document.getElementById("grid");
    grid.innerHTML = "";// TODO clear previous grid 

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
});

let grid = document.getElementById("grid");
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