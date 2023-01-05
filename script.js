console.log("Adding Buttons!");

document.getElementById("default-button").addEventListener("click", generateDefault);
let table = document.getElementById("table");

function generateDefault()
{
    for(let i = 1; i <= 100; i++)
    {
        const cell = document.createElement('div');
        table.appendChild(cell);
        
        if(i % 15 == 0)
        {
            cell.innerText="FIZZ BUZZ " + i;
            cell.classList.add("cell", "fizzBuzz");
        }
        else if(i % 3 == 0)
        {
            cell.innerText="FIZZ " + i;
            cell.classList.add("cell", "fizz");
        }
        else if(i % 5 == 0)
        {
            cell.innerText="BUZZ " + i;
            cell.classList.add("cell", "buzz");
        }
        else
        {
            cell.innerText= i;
            cell.classList.add("cell", "onlyNumber");
        }
    }

}

