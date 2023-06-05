//script bootstrap
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

// disbable/enable selected
function tipoRegime(){

  let selected = document.getElementById("validationCustom04").value;

  if(selected == 'clt'){
    document.getElementById("validationCustomUsername").disabled = false;

    document.getElementById("validationCustomUsername1").disabled = true;
    document.getElementById("validationCustom03").disabled = true;
    document.getElementById("validationCustomUsername2").disabled = true;

  }else if(selected == 'cnpj'){
    document.getElementById("validationCustomUsername1").disabled = false;

    document.getElementById("validationCustomUsername").disabled = true;
    document.getElementById("validationCustom03").disabled = true;
    document.getElementById("validationCustomUsername2").disabled = true;

  }else if(selected == 'horista'){
    document.getElementById("validationCustom03").disabled = false;
    document.getElementById("validationCustomUsername2").disabled = false;

    document.getElementById("validationCustomUsername").disabled = true;
    document.getElementById("validationCustomUsername1").disabled = true;
  }
  
}

// resultado
function result(){
  let selected = document.getElementById("validationCustom04").value;
  let inputNome = document.getElementById("validationCustom01").value;
  let inputClt = document.getElementById("validationCustomUsername").value;
  let inputCnpj = document.getElementById("validationCustomUsername1").value;
  let inputHorista = document.getElementById("validationCustom03").value;
  let inputHoristaValor = document.getElementById("validationCustomUsername2").value;
  document.getElementById("spanNome").innerHTML = inputNome;


  if(inputNome != '' && selected == 'clt' && inputClt != ''){
    document.getElementById("spanResult").innerHTML = "CLT"
    document.getElementById("spanValor").innerHTML = inputClt;
    $('#exampleModal').modal('show');
  }else if(inputNome != '' && selected == 'cnpj' && inputCnpj != ''){
    document.getElementById("spanResult").innerHTML = "CNPJ"
    document.getElementById("spanValor").innerHTML = inputCnpj;
    $('#exampleModal').modal('show');
  }else if(inputNome != '' && selected == 'horista' && inputHorista != '' && inputHoristaValor != ''){
    document.getElementById("spanResult").innerHTML = "HORISTA"
    document.getElementById("spanValor").innerHTML = (inputHorista * inputHoristaValor);
    $('#exampleModal').modal('show');
  }

  
}