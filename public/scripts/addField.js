//Procurar botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Ao clicar no botao
//Executar uma acao
function cloneField() {
   //duplicate div
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
   const fields = newFieldContainer.querySelectorAll('input')
   
   fields.forEach(function(field){
       field.value="";
   });
   
   
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

