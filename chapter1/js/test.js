function alertInputText() {
    alert(document.getElementById('textInput').value);
}

var tmp = 0;

function addRowTable(idTable,idInput) {
    var tbody = document.getElementById(idTable).getElementsByTagName("TBODY")[0];
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.appendChild(document.createTextNode(++tmp));
    td2.appendChild(document.createTextNode(document.getElementById(idInput).value));
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row); 
}