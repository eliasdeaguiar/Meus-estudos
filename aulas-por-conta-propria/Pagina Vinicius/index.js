var list1 = [];
var list2 = [];

var n = 1;
var x = 0;

function addRow(){
    var addRown = document.getElementById('show');
    var newRow = addRown.insertRow(n);

    list1[x] = document.getElementById("nome").value;
    list2[x] = document.getElementById("email").value;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];

    n++;
    x++;
}