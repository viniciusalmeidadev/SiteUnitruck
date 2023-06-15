const tipoEstabelecimento = document.getElementById('tipo-estabelecimento');

tipoEstabelecimento.addEventListener('click', function() {
  tipoEstabelecimento.setAttribute('size', '5');
});

tipoEstabelecimento.addEventListener('blur', function() {
  tipoEstabelecimento.removeAttribute('size');
});


function exibirBeneficios() {
  const tipoEstabelecimentoSelect = document.getElementById('tipo-estabelecimento');
  const beneficiosContainer = document.getElementById('beneficios-container');
  const wifiCheckbox = document.getElementById('wifi');
  const chuveiroCheckbox = document.getElementById('chuveiro');
  
  const opcaoSelecionada = tipoEstabelecimentoSelect.value;

  if (opcaoSelecionada === 'posto-gasolina' || opcaoSelecionada === 'posto-conveniencia' || opcaoSelecionada === 'hospedagem') {
    beneficiosContainer.style.display = 'block';
    wifiCheckbox.style.display = 'inline-block';
    chuveiroCheckbox.style.display = 'inline-block';
  } else {
    beneficiosContainer.style.display = 'none';
    wifiCheckbox.style.display = 'none';
    chuveiroCheckbox.style.display = 'none';
  }
}


function validarFormulario() {
  var termosCheckbox = document.getElementById("aceite-termos");
  
  if (!termosCheckbox.checked) {
    alert("Por favor, aceite os termos de privacidade.");
    return false; // Impede o envio do formulário
  }
  
  alert("Parabéns! Seu cadastro foi realizado com sucesso!");
  return true; // Permite o envio do formulário
}


const cadastroForm = document.getElementById("cadastroForm");
const cadastrarButton = document.getElementById("cadastrarButton");
const nomeInput = document.getElementById("nome");
const nomeError = document.getElementById("nomeError");

cadastroForm.addEventListener("submit", function(event) {
  if (!validarNome()) {
    event.preventDefault();
  }
});
