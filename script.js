var eventos= new Array(), cont=0

function insertRow() {
    eventos[cont]={

    nome: document.getElementById("nome").value

    };  
     
    
    var tabela = document.getElementById("tabela");
    var nova_linha = document.createElement("tr");


    var nova_col_nome = document.createElement("td");
    nova_col_nome.innerHTML = eventos[cont].nome;
    nova_linha.appendChild(nova_col_nome);

    tabela.appendChild(nova_linha);

cont++ 
}    


function deleteRow() {	
	if (cont>0){
	document.getElementById("tabela").deleteRow(cont)	
	cont--
	}
	}