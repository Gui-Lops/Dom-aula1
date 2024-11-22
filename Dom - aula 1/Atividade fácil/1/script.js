
// Selecionando os elementos do DOM
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

// Adicionando um evento de clique ao botão
botao.addEventListener("click", () => {
  titulo.textContent = "Você clicou no botão!";
});