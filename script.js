console.log("Adding Buttons!");

document.getElementById("default-button").addEventListener("click", generateDefault);
document.getElementById("clearAll-button").addEventListener("click", clearAll);
document.getElementById("custom-button").addEventListener("click", generateCustom);
let table = document.getElementById("table");

function generate(start, end, fizz, buzz) 
{
    for(let i = start; i <= end; i++)
    {
        const cell = document.createElement('div');
        table.appendChild(cell);
        cell.setAttribute("id", "my_div_id_" + i);

        
        if(i % (fizz*buzz) == 0)
        {
            cell.innerText="FIZZ BUZZ " + i;
            cell.classList.add("cell", "fizzBuzz");
        }
        else if(i % fizz == 0)
        {
            cell.innerText="FIZZ " + i;
            cell.classList.add("cell", "fizz");
        }
        else if(i % buzz == 0)
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

function clearAll()
{
    while (table.hasChildNodes())
    {
        table.removeChild(table.firstChild);
    }
}

function generateDefault()
{
    clearAll();
    generate(1, 100, 3, 5);
}

function generateCustom()
{
    clearAll();
    let fizz = document.getElementById("fizz_value");
    let buzz = document.getElementById("buzz_value");
    let start = document.getElementById("start_value");
    let end = document.getElementById("end_value");

    if (fizz.value !== "" && buzz.value !== "" && start.value !== "" && end.value !== "")
    {
        generate(start.value, end.value, fizz.value, buzz.value);
    }
}





