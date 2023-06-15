document.querySelector(".hamburger-menu").addEventListener("click", function() {
      // Alterna a classe "show-menu" no elemento pai do botão de menu hamburguer
      this.parentNode.classList.toggle("show-menu");
});
    

function paraCima() {
const botao = document.querySelector("#back-to-top");

botao.addEventListener('click', function() {
 window.scrollTo(0, 0);
});
}

function paraBaixo() {      
       window.scrollTo(3000, 3000);
      }




