let rows = 16;
let columns = 16;
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