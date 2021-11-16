  //Função para criação dos elementos
  function createElements(id, row, flag){

  // Pega o elemento do HTML
  const element = document.getElementById(`item-${id}`)

  //Cria o botão de excluir
  var buttonDelete = document.createElement('button');
  buttonDelete.innerHTML = 'X'
  buttonDelete.addEventListener('click', () => {
        deleteRow(element)
  })

  //Cria o elemento de texto
  var text = document.createElement("text");
  text.innerHTML = row;

  //Cria a flag para riscar
  var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');     
        checkbox.setAttribute("OnChange",`taskOk("${element}")`);
        checkbox.setAttribute("name",'checkItem');
        checkbox.setAttribute("checked", flag);
        console.log(checkbox);

  //Cria a lista
  var table = document.createElement('li');
      table.setAttribute("id", `${element}`);
    
  //Insere os itens na lista
  var ul = document.getElementById('tableList');
      ul.appendChild(table);
      table.appendChild(checkbox);
      table.appendChild(text); 
      table.appendChild(buttonDelete); 
};

 ///////////////////////////////////////////////////////////////////

  // Função para adicionar novos itens
  function InsertRow(){

  //Inicia os vetores vazios
  var List = [];
  var Object = {}; 

  // Pega conteúdo do localStorage e mostra, se existir
  let listStorage = localStorage.getItem('lista')
  if (listStorage) {     
	listRestored = JSON.parse(listStorage) //Converte JSON em objeto JavaScript
	console.log(listStorage) 
	console.log(listRestored[0]) 
  }

  //Valor inserido na caixa de texto
  var row = document.getElementById('rowInput').value; 

  //Validação se não está vazio
  if(row==""){
	alert('Preencha o item!'); 
  }else{  
  List.push(List.length+1, row);
  
  //Definição de objeto do item a ser enviado
  Object = { 
	id: List.length+1, 
	name: row, 
	flag: false 
  };
    
  // Função que cria os elementos (botão, flag, texto, etc)
  createElements(List.length+1, row, false); 
  
  // Envia para o local storage
  localStorage.setItem('lista', JSON.stringify(List));

};
};

  ///////////////////////////////////////////////////////////////////

  //Função para excluir itens
  function deleteRow(element){ 

    //Cria nova lista
    let newList= []

    //Lista nova recebe todos os itens não removidos
    for (let i = 0; i < List.length-1; i++) { 
      if (i !== element) { 
        newList.push(List[i]) 
      }
    }

    //Identifica e remove item
    let itemRemove = document.getElementById(element) 
    tableList.removeChild(itemRemove ) 

    //Atualiza a lista com dados da nova lista
    List = newList 

    // Envia para o local storage novamente
    localStorage.setItem('lista', JSON.stringify(List)); 

  };


 ///////////////////////////////////////////////////////////////////

 //Função para riscar texto
function taskOk(element){

  //let table = document.getElementById(element);

  //<span style="text-decoration:line-through;"></span>
  //verifica se está marcado ou não, inverte

// Envia para o local storage novamente
//localStorage.setItem('lista', JSON.stringify(List));
};


 ///////////////////////////////////////////////////////////////////

 //Função para pegar conteúdo do Local Storage
   function storageList(){

    let listStorage = localStorage.getItem('lista')
  
    if (listStorage){ 
      listRestored = JSON.parse(listStorage)
      List = listRestored;
      for(var i=0; i<=List.length-1; i++){
        createElements(List[i].id, List[i].name, List[i].flag);
      };
    };
  }

