document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
    //   event.preventDefault(); // Evita o envio padrão do formulário
  
      var nome = document.getElementById('nome').value;
      alert('Obrigado por sua inscrição, ' + nome + '! Deus tem uma benção para você!');
    });
  });