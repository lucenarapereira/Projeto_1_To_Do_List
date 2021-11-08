var events= new Array(), cont=0

function  insertRow() {
    events[cont]={
    activity: document.getElementById("activity").value
    }

    cont++ 
}

function  deleteRow() {
    if (cont>0)
        document.getElementById("activity").deleteRow(cont)	
    cont--
}

function  cleanFill() {
    document.getElementById("activity").value="";
}