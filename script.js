var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

function displayDetails()
{
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var mob = document.getElementById("mo").value;
    if(!name || !mail || !mob){
        alert("Please fill all the boxes!!");
        return;
    }
var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);

cell1.innerHTML = name;
cell2.innerHTML = mail;
cell3.innerHTML = mob;

row++;
}
