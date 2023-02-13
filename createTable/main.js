let rowELement=document.getElementById('rows');
let colELement=document.getElementById('cols');
let buttonElement=document.getElementById('btn');
buttonElement.addEventListener('click',createTable);
function createTable(){
  let body=document.querySelector('body');
  let table=document.createElement('table');
  table.className="table1"
  //create number of rows
  for(let i=0; i<parseInt(rowELement.value); i++){
    let tr=document.createElement("tr");
    table.appendChild(tr);
    for(let j=0;j<parseInt(colELement.value);j++){
      let td=document.createElement("td");
      let text=document.createTextNode("item Text");
      td.appendChild(text);
      tr.appendChild(td);
    }
  

  }
  body.appendChild(table);
}